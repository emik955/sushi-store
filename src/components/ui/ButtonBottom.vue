<template>
  <div class="button-bottom">
    <button>{{ title }}</button>
  </div>
</template>

<script>
// import { ref } from 'vue'

export default {
  name: 'ButtonBottom',
  components: {
  },
  props: {
    title: {
      type: String,
      default: 'Оформить заказ'
    }
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>

</style>
