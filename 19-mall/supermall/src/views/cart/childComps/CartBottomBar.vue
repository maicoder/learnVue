<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button :is-checked="isSelectAll" @click.native="checkClick" class="check-button"/>
      <span>全选</span>
    </div>

    <div class="total-price">
      合计: {{totalPrice}}
    </div>

    <div class="calcuate" @click="calcClick">
      去计算({{checkLength}})
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton';

  import { mapGetters } from 'vuex'

  export default {
    name: "CartBottomBar",
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters(['cartList']),
      totalPrice() {
        return '¥' + this.$store.state.cartList.filter(item => {
          return item.checked
        }).reduce((previousValue, item) => {
          return previousValue + item.price * item.count
        }, 0).toFixed(2)
      },
      checkLength() {
        // return this.$store.state.cartList.filter(item => item.checked).length

        return this.cartList.filter(item => item.checked).length
      },
      isSelectAll() {
        if (this.cartList.length === 0) return false

        // return !(this.cartList.filter(item => !item.checked).length)th

        // return !this.cartList.find(item => !item.checked)

        let isChecked = false
        for (let item of this.cartList) {
          if (!item.checked) {
            return false
          }
        }
        return true
      }
    },
    methods: {
      checkClick() {
        if (this.isSelectAll) {
          this.cartList.forEach(item => item.checked = false)
        } else {
          this.cartList.forEach(item => item.checked = true)
        }
      },
      calcClick() {
        if (!this.isSelectAll) {

        }
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    position: relative;
    display: flex;

    height: 40px;
    line-height: 40px;

    background-color: #eee;

    font-size: 14px;
  }

  .check-content {
    display: flex;
    align-items: center;
    margin-left: 10px;
    width: 60px;
  }

  .check-button {
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-right: 5px;
  }

  .total-price {
    margin-left: 20px;
    flex: 1;
  }

  .calcuate {
    width: 90px;
    background: red;
    color: #fff;
    text-align: center;
  }
</style>
