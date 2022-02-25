<template>
  <div class="todo-footer" v-show="total">
    <label>
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>{{ getCompleted }} Completed </span> / {{ total }}  Total </span
    >
    <button class="btn btn-danger" @click="clearCompleted">
      Clear all completed
    </button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  computed: {
    total() {
      return this.$store.state.todos.length;
    },
    getCompleted() {
      return this.$store.state.todos.reduce((pre, current) => {
        return pre + (current.completed ? 1 : 0);
      }, 0);
    },
    isAll: {
      get() {
        return this.total === this.getCompleted && this.total > 0;
      },
      set(value) {
        this.$store.commit("CHECKALLTODOS", value);
      },
    },
  },
  methods:{
    clearCompleted(){
      this.$store.commit("CLEARALLDONE")
    }
  }
};
</script>

<style>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>