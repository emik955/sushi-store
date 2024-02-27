<template>
  <div class="item-page">
    <div class="container">
      <ItemPageHead />
    </div>
    <div>
      <ItemPageMain
        :preview="pageInfo.img"
        :name="pageInfo.title"
        :description="pageInfo.descr"
        :price="pageInfo.price"
        :id="pageInfo.id"
      />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

import ItemPageHead from '@/components/blocks/ItemPageHead.vue'
import ItemPageMain from '@/components/blocks/ItemPageMain.vue'

export default {
  name: 'ItemPage',
  components: {
    ItemPageHead,
    ItemPageMain
  },
  props: {
  },
  setup () {
    const store = useStore()

    const pageInfo = computed(() => {
      return store.getters.getItemPageInfo
    })
    return {
      store,
      pageInfo
    }
  }
}
</script>

<style lang="scss" scoped>
.item-page {
  background: #161516;
  height: 100vh;
  background-image: url('../assets/bg/bg.png');
}
</style>
