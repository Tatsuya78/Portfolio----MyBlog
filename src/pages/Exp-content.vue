<template>
  <div class="row">
    <section class="exp-content col-xs-12">
      <div class="content-title">
        <h2>💡Xingchen's TodoList💡</h2>
        <!-- The data in this list is stored in memory via Vuex and should be uploaded 
      to and retrieved from the server when the page is officially launched. -->
      </div>
      <div class="todo-container">
        <div class="todo-wrap">
          <MyHeader />
          <MyItem />
          <MyFooter />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MyHeader from "../components/Exp-todo-header.vue";
import MyFooter from "../components/Exp-todo-footer.vue";
import MyItem from "../components/Exp-todo-item.vue";
export default {
  name: "ExpContent",
  components: { MyHeader, MyFooter, MyItem },
};
</script>

<style>
.btn {
  /* display: inline-block; */
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-edit {
  color: #fff;
  background-color: skyblue;
  border: 1px solid rgb(105, 165, 189);
  margin-right: 5px;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}
.todo-container {
  width: 100%;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.content-title {
  text-align: center;
  margin: 50px 0;
}
</style>