<template>
  <div>
    <ul class="todo-main">
      <li v-for="todo in todos" :key="todo.id">
        <label>
          <input
            type="checkbox"
            :checked="todo.completed"
            @change="handleCheck(todo.id)"
          />
          <span>{{ todo.title }}</span>
          <input
            type="text"
            v-show="todo.isEdit"
            :value="todo.title"
            @blur="handleBlur(todo, $event)"
            ref="inputDOM"
          />
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">
          delete
        </button>
        <button
          class="btn btn-edit"
          @click="handleEdit(todo)"
          v-show="!todo.isEdit"
        >
          edit
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MyItem",
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
  methods: {
    // ----checking function----
    handleCheck(id) {
      this.$store.commit("CHECKTODO", id);
    },
    // ----delete function----
    handleDelete(id) {
      if (confirm("Are you sure to delete this item?")) {
        this.$store.commit("DELETETODO", id);
      }
    },
    // ----edit function----
    handleEdit(todo) {
      console.log(todo)
      // “todo.hasOwnProperty”cannot work cuz Do not access Object.prototype method 'hasOwnProperty' from target object
      // then use call() to point to todo
      if (Object.prototype.hasOwnProperty.call(todo, "isEdit")) {
        todo.isEdit = true;
      } else {
        this.$set(todo, "isEdit", true);
      }
      // Get focus automatically when click edit button
      this.$nextTick(function () {
        // here needs optimization
        this.$refs.inputDOM.forEach(i => {
          i.focus()
        })
      });
    },
    handleBlur(todo, e) {
      todo.isEdit = false;
      if (e.target.value.trim() === "") return alert("please write something~");
      this.$store.commit("UPDATETODO", [todo.id, e.target.value]);
    },
  },
};
</script>

<style>
/*item*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
.todo-main li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

.todo-main li label {
  float: left;
  cursor: pointer;
}

.todo-main li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

.todo-main li button {
  float: right;
  display: none;
  margin-top: 3px;
}

.todo-main li:before {
  content: initial;
}

.todo-main li:last-child {
  border-bottom: none;
}

.todo-main li:hover {
  background-color: #ddd;
}

.todo-main li:hover button {
  display: block;
}
</style>