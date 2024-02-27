<template>
  <div class="home">
    <div class="container">
      <HeaderMain
        name="наша продукция"
      />

      <MainBlock />
    </div>
  </div>
</template>

<script>
// import { useStore } from 'vuex'
// import { computed } from 'vue'

import HeaderMain from '@/components/blocks/HeaderMain.vue'
import MainBlock from '@/components/blocks/Main.vue'

export default {
  name: 'MainPage',
  components: {
    HeaderMain,
    MainBlock
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  background: #161516;
}
</style>
