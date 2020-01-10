<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-services-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .detail-baseInfo {
    padding: 10px 10px 0;
    border-bottom: 4px solid #c5baba;
  }
  .info-title {
    font-size: 20px;
    color: #333;
    font-weight: 500;
    margin-bottom: 10px;
    word-break: break-all;
    word-wrap: break-word;
  }
  .info-price {
    margin-bottom: 30px;
  }
  .new-price {
    color: var(--color-tint);
    font-size: 30px;
    padding-right: 10px;
  }
  .old-price {
    text-decoration: line-through;
    font-size: 16px;
    color: #ccc;
    padding-right: 10px;
  }
  .discount {
    display: inline-block;
    border-radius: 10px;
    color: #fff;
    background-color: var(--color-tint);
    padding: 5px;
    font-size: 13px;
    vertical-align: top;
  }
  .info-other {
    display: flex;
    justify-content: space-between;
    color: #a7a0a0;
    margin-bottom: 2px;
  }
  .info-services {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    border-top: 2px solid #e0d5d5;
  }
  .info-services-item {
    font-size: 15px;
  }
  .info-services-item img {
    width: 14px;
    vertical-align: middle;
  }
</style>
