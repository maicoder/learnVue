<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"/>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info ref="params" :param-info="paramInfo"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <goods-list ref="recommend" :goods="recommends"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
    <detail-bottom-bar @addCart="addToCart"/>
<!--    <toast :message="message" :show="show"/>-->
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamInfo from './childComps/DetailParamInfo'
  import DetailCommentInfo from './childComps/DetailCommentInfo'
  import DetailBottomBar from './childComps/DetailBottomBar'

  import Scroll from 'components/common/scroll/Scroll'
  import GoodsList from 'components/content/goods/GoodsList'
  // import BackTop from 'components/content/backTop/BackTop'

  import {getDetail, getRecommend, Goods, Shop, GoodsParam} from 'network/detail'
  import {debounce} from 'common/utils'
  import {itemListenerMixin, backTopMixin} from 'common/mixin'

  import { mapActions } from 'vuex'
  import Toast from 'components/common/toast/Toast';

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList,
      // BackTop,
      DetailBottomBar,
      // Toast
    },
    mixins: [itemListenerMixin, backTopMixin],
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommends: [],
        themeTopYs: [],
        getThemeTopY: null,
        currentIndex: 0,
        // message: '',
        // show: false
      }
    },
    created() {
      // 1.保存传入的iid
      // this.iid = this.$route.params.iid;
      this.iid = this.$route.query.iid;

      // 2.根据iid请求详情数据
      getDetail(this.iid).then(res => {
        // 1.获取顶部数据
        console.log(res);
        const data = res.result;
        this.topImages = data.itemInfo.topImages;
        // console.log(this.topImages);

        // 2. 获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);

        // 3. 创建店铺信息的对象
        this.shop = new Shop(data.shopInfo);

        // 4. 保存商品的详情数据
        this.detailInfo = data.detailInfo;

        // 5. 获取参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);

        // 6. 取出评论信息
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0];
        }
      })

      // 3. 请求推荐数据
      getRecommend().then(res => {
        // console.log(res);
        this.recommends = res.data.list;
      })

      // 1.第一次获取，值不对
      // 值不对的原因，this.$refs.params.$el 压根没有渲染
      // this.themeTopYs =[];
      // this.themeTopYs.push(0);
      // this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      // this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      // console.log(this.themeTopYs);

      // this.$nextTick(()=>{
      //  2.第二次获取值不对
      //  值不对的原因：图片没有计算在内
      //  根据最新的数据，对应的 DOM 是已经被渲染出来
      //  但是图片依然是没有加载完（目前获取到 offsetTop 不包含其中的图片）
      //  offsetTop 值不对的时候，都是因为图片的问题
      //     this.themeTopYs =[];
      //     this.themeTopYs.push(0);
      //     this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      //     this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      //     this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      //     console.log(this.themeTopYs);
      // })

      // 4. 给 getThemeTopY 赋值（对给 this.themeTopYs 的操作进行防抖）
      this.getThemeTopY = debounce(()=>{
        this.themeTopYs =[];
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
        console.log(this.themeTopYs);
      }, 100)
    },
    mounted() {
      // console.log('detail mounted');
    },
    destroyed() {
      this.$bus.$off('itemImgLoad', this.itemImgListener);
    },
    methods: {
      ...mapActions(['addCart']),
      imageLoad() {
        this.$refs.scroll.refresh();
        this.getThemeTopY();
      },
      titleClick(index) {
        // console.log(index);
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200);
      },
      // backClick() {
      //   this.$refs.scroll.scrollTo(0, 0);
      // },
      contentScroll(position) {
        this.isShowBackTop = (-position.y) > 1000;
        // 1. 获取 y 值
        const positionY = -position.y;
        let pyLength = this.themeTopYs.length;

        // 2. positionY 和主题中值进行对比
        // [0, 7938, 9120, 9452]
        // positionY 在 0 和 7938 之间， index = 0
        // positionY 在 7938 和 9120 之间， index = 1
        // positionY 在 9120 和 9452 之间，index = 2
        // positionY 超过 9452， index = 3
        for (let i = 0; i < pyLength; i++) {
          // console.log(i);
          // if (positionY > this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) {
          //
          // }

          // 或者在 themeTopYs 末尾添加  Number.MAX_VALUE

          if (this.currentIndex !== i && (i < pyLength - 1 && positionY > this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) || (i === pyLength - 1 && positionY > this.themeTopYs[i])) {
            this.currentIndex = i;
            console.log(this.currentIndex);
            this.$refs.nav.currentIndex = this.currentIndex;
          }
        }

      },
      addToCart() {
        // 1. 获取购物车需要展示的信息
        const product = {}
        product.image = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.realPrice;
        product.iid = this.iid
        product.count = 1
        product.checked = true
        // console.log(product);

        // 2. 将商品添加到购物车里(1.Promise 2.mapActions)
        // this.$store.commit('addCart', product);
        this.addCart(product).then(res => {
          // console.log(res);
          // this.show = true;
          // this.message = res;
          //
          // setTimeout(() => {
          //   this.show = false;
          //   this.message = ''
          // }, 1500)

          this.$toast.show(res)
        })

        // this.$store.cartList.push();
        // this.$store.dispatch('addCart', product).then(res => {
        //   console.log(res);
        // });
      }
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  /*.content {*/
  /*  height: calc(100% - 44px);*/
  /*}*/
  .content{
    overflow: hidden;
    position:absolute;
    top:44px;
    bottom:58px;
    left:0;
    right:0;
  }
</style>
