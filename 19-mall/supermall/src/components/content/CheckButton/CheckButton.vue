<template>
  <div class="check-button" :class="{isChecked}" >
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props: {
      isChecked: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style scoped>
  .check-button {
    border: 2px solid #AAA;
    border-radius: 45%;
  }
  .isChecked {
    border-color: white;
    background: var(--color-tint);
  }
</style>
