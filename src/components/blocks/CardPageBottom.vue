<template>
  <div class="card-page-bottom">
    <div class="order-information">
      <p class="card-page-bottom__text">Заказ на сумму:</p>
      <p class="card-page-bottom__price">{{ AllPricePoductsInBasket.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }) }} </p>
    </div>
    <router-link to="/">
      <ButtonBottom
        @click="itemIsOrdered"
        class="button-bottom"
      />
    </router-link>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import ButtonBottom from '@/components/ui/ButtonBottom.vue'

export default {
  name: 'CardPageBottom',
  components: {
    ButtonBottom
  },
  props: {
    price: {
      type: String,
      default: '6 220'
    }
  },
  setup () {
    const store = useStore()

    const AllPricePoductsInBasket = computed(() => {
      return store.getters.getAllPricePoductsInBasket
    })

    const itemIsOrdered = () => {
      store.commit('SetItemIsOrdered')
    }

    return {
      AllPricePoductsInBasket,
      itemIsOrdered
    }
  }
}
</script>

<style lang="scss" scoped>
.card-page-bottom {
  height: 125px;

  &__text {
    font-size: 21px;
    font-weight: 400;
    text-transform: uppercase;
  }
}
.button-bottom {
  width: 200px;
  height: 42px;
  background: #D58C51;

  color: #131313;
  font-size: 14px;
  font-weight: 400;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  transition: .5s ease;

  &:hover {
    background: #f98a2f;
  }
}
.order-information {
  display: flex;
  align-items: center;
  width: 50%;
  column-gap: 15px;
}
.card-page-bottom__price {
  color: #D58C51;
  font-size: 17px;
}
</style>
