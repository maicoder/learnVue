<template>
  <div id="category">
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';

  import TabMenu from './childComps/TabMenu';

  export default {
    name: "Category",
    components: {
      NavBar,
      TabMenu
    }
  }
</script>

<style scoped>

</style>
