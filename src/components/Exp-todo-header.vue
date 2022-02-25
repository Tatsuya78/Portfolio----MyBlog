<template>
  <div class="todo-header">
      <input
        type="text"
        placeholder="Please input your tasks~"
        @keyup.enter="add"
      />
    </div>
</template>

<script>
import { nanoid } from "nanoid";

export default {
  name: "MyHeader",
  methods: {
    add(e) {
      if (!e.target.value.trim()) return alert("please write something!");
      const todoObj = { id: nanoid(), title: e.target.value, completed: false };
      this.$store.state.todos.unshift(todoObj);
      e.target.value = "";
    },
  },
};
</script>

<style scoped>
/*header*/
.todo-header input {
  /* width: 560px; */
  width: 100%;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
  margin: 10px 0;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>