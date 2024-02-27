<template>
  <div class="container">
    <div class="item-page">
      <div class="item-page__image">
        <img
          class=""
          :src="preview"
          alt="logo"
        >
      </div>
      <div class="item-page__main-block">
        <p class="item-page__name">{{ name }}</p>
        <p
          class="item-page__descr"
        >{{ description }} Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений. Разнообразный и богатый опыт начало повседневной работы по формированию позиции требуют от нас анализа позиций.Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений.
        </p>
        <div class="item-page__inner-block">
          <p class="item-page__price">{{ price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }) }}</p>

            <ButtonBottom
              v-if="!isProductBasket"
              @click="addToBasket(), isVisibleButton = !isVisibleButton"
              class="item-page__btn"
            />

            <ButtonBottom
              v-else
              @click="removeInBasket(), isVisibleButton = !isVisibleButton"
              class="item-page__btn"
              title="Удалить"
            />

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import ButtonBottom from '@/components/ui/ButtonBottom.vue'

export default {
  name: 'ItemPageMain',
  components: {
    ButtonBottom
  },
  props: {
    preview: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: 'Name'
    },
    description: {
      type: String,
      default: 'Description'
    },
    price: {
      type: String,
      default: 'Price'
    },
    id: {
      type: Number
    }
  },
  setup (props) {
    const isVisibleButton = ref(Boolean)
    const store = useStore()

    const addToBasket = () => {
      store.commit('SetPlusInBasketProductsWithItemPage')
    }
    const removeInBasket = () => {
      store.commit('SetMinusInBasketProductsWithItemPage')
    }

    const isProductBasket = computed(() => {
      return store.getters.getIsProductInBasket(props.id)
    })

    return {
      isVisibleButton,
      addToBasket,
      removeInBasket,
      isProductBasket
    }
  }
}
</script>

<style lang="scss" scoped>
.item-page {
  padding-left: 50px;
  display: flex;
  gap: 0 200px;
  padding-top: 25px;

  &__image {
    min-width: 31.25rem;

    & img {
      width: 100%;
    }
  }

  &__main-block {
    display: flex;
    flex-direction: column;
  }

  &__name {
    font-size: 30px;
    color: rgb(213, 140, 81);
    padding-top: 65px;
    margin-bottom: 21px;
  }

  &__descr {
    margin-bottom: 50px;
  }

  &__inner-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__price {
    font-size: 23px;
  }

  &__btn {
    width: 200px;
    height: 42px;
    background-color: rgb(213, 140, 81);
    color: rgb(19, 19, 19);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
