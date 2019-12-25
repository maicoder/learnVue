import Vue from 'vue'
import VueRouter from 'vue-router'

// 1.安装插件
Vue.use(VueRouter)

// 2.创建路由对象
const routes = []
const router = new VueRouter({
  routes
})

// 3. 导出 router
export default router
