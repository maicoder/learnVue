<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null,
        message: '嘿嘿嘿'
      }
    },
    mounted() {
      // 1. 创建 BScroll 对象
      // ref 如果是绑定在组件中的，那么通过 this.$refs.refname 获取到的是一个组件对象
      // ref 如果是绑定在普通的元素中的，那么通过 this.$refs.refname 获取到的是一个元素对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })

      if (this.probeType === 2 || this.probeType === 3) {
        // 2. 监听滚动的位置
        this.scroll.on('scroll', (position) => {
          // console.log(position);
          this.$emit('scroll', position)
        })
      }

      // 3. 监听上拉加载
      if (this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
        })
      }
    },
    methods: {
      scrollTo(x, y, time=300) {
        this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time);
      },
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp();
      },
      refresh() {
        this.scroll && this.scroll.refresh && this.scroll.refresh();
      },
      getScrollY() {
        return this.scroll ? this.scroll.y : 0
      }
    }
  }
</script>

<style scoped>

</style>
