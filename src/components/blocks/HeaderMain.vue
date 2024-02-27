<template>
  <div class="header-main">
    <p v-if="isVisibility" class="header-main__text">{{ name }}</p>
    <div class="header-main__info">
      <p v-if="itemIsOrdered" class="header-main__count">{{ CountProductsInBasket }} товара
        <br> на сумму {{ AllPricePoductsInBasket.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }) }}
      </p>
      <p v-else class="header-main__count">
        Корзина пуста <br> Сделайте заказ
      </p>
      <router-link to="/cart">
        <cardIcon />
      </router-link>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import cardIcon from '@/components/icons/cardIcon.vue'

export default {
  name: 'HeaderMain',
  components: {
    cardIcon
  },
  props: {
    name: {
      type: String,
      default: 'Product'
    },
    isVisibility: {
      type: Boolean,
      default: true
    }
  },
  setup () {
    const store = useStore()

    const AllPricePoductsInBasket = computed(() => {
      return store.getters.getAllPricePoductsInBasket
    })

    const CountProductsInBasket = computed(() => {
      return store.getters.getCountProductsInBasket
    })

    const itemIsOrdered = computed(() => {
      return store.getters.getCountProductsInBasket
    })

    return {
      AllPricePoductsInBasket,
      CountProductsInBasket,
      itemIsOrdered
    }
  }
}
</script>

<style lang="scss" scoped>
.header-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 54px;

  margin-bottom: 80px;

  &__text {
    font-size: 31px;
    font-weight: 700;
    text-transform: uppercase;
  }

  &__info {
    display: flex;
    align-items: center;
    column-gap: 20px;
  }

  &__count {
    text-align: right;
    font-size: 17px;
    font-weight: 500;
    width: 170px;
  }
}

</style>
