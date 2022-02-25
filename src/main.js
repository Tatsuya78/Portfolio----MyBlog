// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
//引入插件
// import vueResource from 'vue-resource'
// 引入Vue-router
import VueRouter from 'vue-router'
// 应用
Vue.use(VueRouter)
// 引入路由器
import router from './router'
//引入Store
import store from './store/index.js'
// 关闭生产提示
Vue.config.productionTip = false;
// 使用插件
//引入ElementUI组件库
//引入ElementUI样式
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


//创建vm
new Vue({
    // 这里容易犯错，一定要改成#app
    el: '#app',
    render: h => h(App),
    router: router,
    store,
    beforeCreate() {
        // 配置全局事件总线
        Vue.prototype.$bus = this
    },
}) 