import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Home from '../components/Home'
// import About from "../components/About";
// import User from "../components/User";

// 懒加载
const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')

const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')

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
    component: Home,
    children: [
      {
        path: '',
        redirect: 'news'
      },
      {
        path: 'news',   // 子路由不需要加 '/'
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/user/:userId',
    component: User
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new Router({
  // 配置路由和组件之间的映射关系
  routes, // 默认是 url.hash
  mode: 'history',
  linkActiveClass: 'active'
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
