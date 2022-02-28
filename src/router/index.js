// This file is dedicated to the creation of the entire application router
// this file is mainly for creating a router for whole application

import VueRouter from "vue-router";

// import components
import AboutMain from '../components/About-main.vue'
import HomeMain from '../components/Home-main.vue'
import MovieMain from '../components/Movie-main.vue'
import MusicMain from '../components/Music-main.vue'
import ExpMain from '../components/Exp-main.vue'

// 创建并导出一个路由器
// Create and export a router
export default new VueRouter({
    routes:[
        {
            path:'/about',
            component:AboutMain
        },
        {
            path:'/home',
            component:HomeMain
        },
        {
            path:'/movie',
            component:MovieMain
        },
        {
            path:'/music',
            component:MusicMain
        },
        {
            path:'/experiments',
            component:ExpMain
        },
        
    ]
})
