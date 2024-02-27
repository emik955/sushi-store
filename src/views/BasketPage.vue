<template>
  <div class="cart-page">
    <div class="container__min cart-page__flex">
      <div class="cart-page__header">

        <router-link to="/">
          <arrowIcon />
        </router-link>

        <h2 class="cart-page__title">
          Корзина с выбранными товарами
        </h2>
      </div>

      <div class="card-page-block">
        <CardProduct
          v-for="(item, i) in BasketProducts"
          :key="i"
          :preview="item.img"
          :title="item.title"
          :price="item.price * item.basketCount"
          class="cart-page__card"
          horizontally
          :isCountInBasketBiggerOne="item.basketCount < 2"
          :countInBasket="item.basketCount"
          @removeInBasket="removeInBasket(item.id)"
          @plus="plus(item.id)"
          @minus="minus(item.id)"
          @openNewItemInBasket="openNewItemInBasket(item.id)"
        />

      </div>
      <CardPageBottom class="card-page-bottom"/>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

import CardPageBottom from '@/components/blocks/CardPageBottom.vue'
import CardProduct from '@/components/elements/CardProduct.vue'
import arrowIcon from '@/components/icons/arrowIcon.vue'

export default {
  name: 'CardPage',
  components: {
    CardProduct,
    arrowIcon,
    CardPageBottom
  },
  props: {
  },
  setup () {
    const store = useStore()

    const BasketProducts = computed(() => {
      return store.getters.getBasketProducts
    })

    const removeInBasket = (id) => {
      store.commit('SetRemoveBasketProducts', id)
    }

    const plus = (id) => {
      store.commit('SetPlusBasketProducts', id)
    }

    const minus = (id) => {
      store.commit('SetMinusBasketProducts', id)
    }

    const openNewItemInBasket = (id) => {
      store.commit('SetOpenNewItemInBasket', id)
    }

    return {
      BasketProducts,
      removeInBasket,
      plus,
      minus,
      openNewItemInBasket
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-page {
  width: 100%;
  height: 100vh;
  background: #161516;

  &__header {
    padding-top: 53px;
    display: flex;
    align-items: center;
    padding: 38px;
  }

  &__title {
    width: 100%;
    text-align: center;
    font-size: 31px;
    font-weight: 700;
    text-transform: uppercase;
  }
}
.cart-page__card {
  overflow: auto;
  padding-left: 10px;

  &:not(:last-child) {
    margin-bottom: 31px;
  }

  &:last-child {
    margin-bottom: 102px;
  }
}
.card-page-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.cart-page__flex {
  display: flex;
  flex-direction: column;
}
.card-page-block {
  // flex-grow: 2;
  height: 69vh;
  margin-top: auto;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0;
  }
}

.card-product {
  display: flex;
  border: none;
}
:deep(.card-product__price){
  position: static;
  color: #D58C51;
  font-size: 18px;
  font-weight: 400;
}
:deep(.card-product__container){
  width: 95%;
  display: flex;
  align-items: center;
}
:deep(.card-product__horizontally){
  width: 13%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #D58C51;
}
:deep(.card-product__image){
  width: 122px;
  padding-top: 0;
  margin-bottom: 0;
  margin-right: 98px;
}
:deep(.card-product__name){
  margin-bottom: 0;
  width: 35%;
  margin-right: 30px;
}
</style>
