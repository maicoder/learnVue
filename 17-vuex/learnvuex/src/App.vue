<template>
  <div id="app">

    <h2>----------- App内容: modules 中的内容------------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>
    <button @click="asyncUpdateName">异步修改名字</button>

    <h2>----------- App内容: info 对象内容是否是响应式------------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>

    <h2>----------- App内容 ------------</h2>
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>

    <h2>----------- App内容: getters 相关信息------------</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stuLength}}</h2>
    <h2>{{$store.getters.moreAgestu(12)}}</h2>

    <h2>----------- Hello Vuex内容------------</h2>
    <hello-vuex/>
  </div>
</template>

<script>
  import HelloVuex from "./components/HelloVuex";
  import {
    ADDSTUDENT,
    DECREMENT,
    INCREMENT, INCREMENTCOUNT
  } from './store/mutations-types'

  export default {
    name: 'App',
    components: {
      HelloVuex
    },
    data() {
      return {
        message: '我是App组件'
      }
    },
    methods: {
      addition() {
        // this.$store.commit('increment')
        this.$store.commit(INCREMENT)
      },
      subtraction() {
        this.$store.commit(DECREMENT)
      },
      addCount(count) {
        // payload 负载
        // 1. 普通的提交封装
        // this.$store.commit('incrementCount', count)

        // 2.特殊的提交封装
        this.$store.commit({
          type: INCREMENTCOUNT,
          count
        })
      },
      addStudent() {
        const stu = {id: 114, name: 'alan', age: 35}
        this.$store.commit(ADDSTUDENT, stu)
      },
      updateInfo() {
        // this.$store.commit('updateInfo')
        // this.$store.dispatch('aUpdateInfo', '我是payload')
        // this.$store.dispatch('aUpdateInfo', {
        //   message: '我是负载的信息',
        //   success: () => {
        //     console.log('里面以及完成了');
        //   }
        // })
        this.$store
          .dispatch('aUpdateInfo', '我是负载的信息')
          .then(res => {
            console.log('里面完成了提交');
            console.log(res);
          })
      },
      updateName() {
        this.$store.commit('updateName', 'lisi')
      },
      asyncUpdateName() {
        this.$store.dispatch('aUpdateName')
      }
    }
  }
</script>

<style>

</style>
