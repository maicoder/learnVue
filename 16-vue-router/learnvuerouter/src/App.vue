<template>
  <div id="app">
<!--    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
<!--    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>-->
<!--    <router-link to="/home" tag="button" replace>首页</router-link>-->
<!--    <router-link to="/about" tag="button" replace>关于</router-link>-->
<!--    <button @click="homeClick">首页</button>-->
<!--    <button @click="aboutClick">关于</button>-->

    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
<!--    <router-link v-bind:to="'/user/' + userId">用户</router-link>-->
<!--    <router-link to="/profile">档案</router-link>-->
<!--    <router-link v-bind:to="{path: '/profile', query: {name: 'Vue', age: 18, height: 1.88}}">档案</router-link>-->

    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>

<!--    // exclude 后面的 profile 和 user 之间不要添加空格-->
    <keep-alive exclude="Profile,User">
      <router-view/>
    </keep-alive>

<!--    <router-view></router-view>-->
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'lisi'
    }
  },
  methods: {
    homeClick() {
      // 通过代码的方式修改路由，不要绕过 vue-router
      // push => pushState
      // this.$router.push('/home')
      this.$router.replace('/home')
      console.log('homeClick');
    },
    aboutClick() {
      // this.$router.push('/about')
      this.$router.replace('/about')
      console.log('aboutClick');
    },
    userClick() {
      this.$router.push('/user/' + this.userId)
    },
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'Vue',
          age: 16,
          height: 1.88
        }
      })
    }
  }
}
</script>

<style>
  /*.router-link-active {*/
  /*  color: #ff0000;*/
  /*}*/

  .active {
    color: #ff0000;
  }
</style>
