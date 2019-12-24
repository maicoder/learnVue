<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容， 哈哈哈</p>

    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>

    <router-view></router-view>

    <h2>{{message}}</h2>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        message: 'Hello, Vue',
        path: '/home/news'
      }

    },
    created() {
      console.log('home created');
    },
    destroyed() {
      console.log('home destroyed');
    },
    // activated 和 deactivated 这两个函数只有该组件保持了状态使用了 keep-alive 时，才是有效的。
    activated() {
      // console.log('activated');
      this.$router.push(this.path)
    },
    deactivated() {
      // console.log('deactivated');
    },
    // 组件内的导航守卫 beforeRouteLeave
    beforeRouteLeave(to, from, next) {
      // console.log(this.$route.path);
      this.path = this.$route.path;
      next()
    },
    mounted() {
      // console.log('mouted');
    },
    updated() {
      // console.log('updated');
    }
  }
</script>

<style scoped>

</style>
