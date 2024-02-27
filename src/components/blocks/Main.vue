<template>
    <div class="main">
      <AllProduct
        class="main__card"
        v-for="(item, i) in products"
        :key="i"
        :preview="item.img"
        :name="item.title"
        :description="item.descr"
        :price="item.price"
        :isInBasket="item.basketCount"
        :id="item.id"
        @addToBasket="addToBasket(item.id)"
        @removeInBasket="removeInBasket(item.id)"
        @openNewItem="openNewItem(item.id)"
      />
    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

import AllProduct from '../elements/AllProduct.vue'

export default {
  name: 'MainBlock',
  components: {
    AllProduct
  },
  props: {
  },
  setup () {
    const store = useStore()

    const products = computed(() => {
      return store.getters.getProducts
    })
    const addToBasket = (id) => {
      store.commit('SetBasketProducts', id)
    }

    const removeInBasket = (id) => {
      store.commit('SetRemoveBasketProducts', id)
    }

    const openNewItem = (id) => {
      store.commit('SetOpenNewItem', id)
    }

    return {
      products,
      addToBasket,
      removeInBasket,
      openNewItem
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 17px;
  row-gap: 35px;
  padding-bottom: 70px;

  @media screen and (max-width: 1420px) {
    justify-content: center;
    gap: 40px;
  }

  @media screen and (max-width: 1312px) {
    justify-content: center;
    gap: 20px;
  }

  @media screen and (max-width: 1185px) {
    justify-content: center;
    gap: 50px;
  }

  &__card {
    @media screen and (max-width: 1420px) {
      width: 370px;
    }

    @media screen and (max-width: 1312px) {
      width: 350px;
    }

    @media screen and (max-width: 1212px) {
      width: 340px;
    }

    @media screen and (max-width: 1185px) {
      width: 450px;
    }

    @media screen and (max-width: 1185px) {
      width: 750px;
    }
  }
}
.card-product {
  width: 312px;
  min-height: 552px;
}
:deep(.card-product:hover) {
  color: #D58C51;
}
</style>
