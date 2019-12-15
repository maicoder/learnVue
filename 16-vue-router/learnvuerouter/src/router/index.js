import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '../components/Home'
import About from "../components/About";

// 1. 通过 Vue.use(插件)，安装插件
Vue.use(Router)

// 2. 创建 Router 对象
const routes = [
  {
    path: '',   // 可以加或不加'/'
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
]
const router = new Router({
  // 配置路由和组件之间的映射关系
  routes, // 默认是 url.hash
  mode: 'history'
})

// 3. 将 router 对象传入到 Vue 实例
export default router

/*
export default new Router({
  // 配置路由和组件之间的映射关系
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
*/
