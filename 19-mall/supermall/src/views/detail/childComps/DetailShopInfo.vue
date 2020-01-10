<template>
  <div class="detail-shopInfo">
    <div class="shop-logo">
      <img :src="shop.logo" alt="">
      <span class="shop-name">{{shop.name}}</span>
    </div>
    <div class="shop-other">
      <div class="shop-sales">
        <div class="shop-sell">
          <span class="shop-num">{{shop.sells}}</span>
          <span class="shop-text">总销量</span>
        </div>
        <div class="shop-goods">
          <span class="shop-num">{{shop.goodsCount}}</span>
          <span class="shop-text">全部宝贝</span>
        </div>
      </div>
      <div class="shop-description">
        <div class="description-div" v-for="(item,index) in shop.score" :key="index">
          <span>{{item.name}}</span>
          <span :class="{highColor: item.isBetter, lowColor: !item.isBetter}">{{item.score}}</span>
          <span :class="{high: item.isBetter, low: !item.isBetter}">{{item.isBetter? '高' : '低'}}</span>
        </div>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props: {
      shop: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .detail-shopInfo {
    padding: 0 10px;
  }
  .shop-logo {
    height: 100px;
    padding: 20px 0;
  }
  .shop-logo img {
    height: 100%;
    vertical-align: middle;
    border-radius: 50%;
  }
  .shop-name {
    padding-left: 10px;
    font-size: 16px;
  }
  .shop-other {
    display: flex;
    padding: 0 20px 20px;
  }
  .shop-sales, .shop-description {
    flex: 1;
  }
  .shop-sales {
    display: flex;
    border-right: 1px solid #ccc;
    padding-right: 10px;
  }
  .shop-sell, .shop-goods {
    flex: 1;
    display: flex;
    /* flex-wrap: wrap;
    align-content: space-between; */
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
  }
  .shop-num {
    font-size: 25px;
  }
  .shop-text {
    font-size: 14px;
  }
  .shop-description {
    padding-left: 10px;
  }
  .shop-description span:nth-child(1) {
    margin-right: 16px;
  }
  .shop-description span:nth-child(3) {
    float: right;
  }
  .description-div {
    margin: 5px 0;
  }
  .highColor {
    color: orangered;
  }
  .lowColor {
    color: #54d425;
  }
  .high {
    color: #fff;
    background-color: orangered;
  }
  .low {
    color: #fff;
    background-color: #54d425;
  }
  .shop-bottom {
    height: 50px;
  }
  .enter-shop {
    width: 33%;
    height: 30px;
    text-align: center;
    line-height: 30px;
    margin: 10px auto;
    border-radius: 6px;
    /* border: 1px solid #ccc; */
    background-color: #dad5d585;
  }
</style>
