import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// 1. 通过 Vue.use(插件)，安装插件
Vue.use(Router)

// 2. 创建 Router 对象
const routes = []
const router = new router({
  routes
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
