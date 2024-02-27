<template>
  <div class="card-product">
    <router-link to="/item" class="card-product__link" @click.prevent="$emit('openNewItem')">
      <div class="card-product__container">
        <img
          class="card-product__image"
          :src="preview"
          alt="logo"
        >
        <p class="card-product__name">{{ name }}</p>
        <p
          class="card-product__description"
        >{{ description }}
        </p>

        <div :class="{
          'card-product__bottom': true
        }">
          <p class="card-product__price">{{ price }} ₽</p>
          <ButtonEl v-if="!isProductInBasket"
            class="card-product__btn"
            @click.prevent="$emit('addToBasket'), isVisibleButton = !isVisibleButton"
          />
          <ButtonClosed v-else
            class="card-product__btn"
            @click.prevent="$emit('removeInBasket'), isVisibleButton = !isVisibleButton"
          />
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import ButtonEl from '@/components/ui/Button.vue'
import ButtonClosed from '@/components/ui/ButtonClosed.vue'

import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'CardProduct',
  components: {
    ButtonEl,
    ButtonClosed
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
    isInBasket: {
      type: Boolean,
      default: false
    },
    id: {
      type: Number
    }
  },
  setup (props) {
    const store = useStore()
    const isVisibleButton = ref(Boolean)

    const isProductInBasket = computed(() => {
      return store.getters.getIsProductInBasket(props.id)
    })

    return {
      isVisibleButton,
      isProductInBasket
    }
  }
}
</script>

<style lang="scss" scoped>
.card-product {

  border: 1px solid #D58C51;
  transition: .6s ease;

  &__container {
    width: 270px;
    margin: 0 auto;
    height: 100%;

    position: relative;
  }

  &__image {
    padding-top: 43px;
    margin-bottom: 31px;
  }

  &__name {
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 13px;
  }

  &__description {
    width: 260px;
    flex-shrink: 0;
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }

  &__horizontally {
    display: flex;
  }

  &__price {
    position: absolute;
    left: 0;
    bottom: 37px;

    font-size: 17px;
    font-weight: 500;
  }

  &__btn {
    width: 30px;
    height: 30px;
    flex-shrink: 0;

    position: absolute;
    right: 5px;
    bottom: 31px;
  }

  &__link {
    color: #fff;
    transition: .6s;

    &:hover {
      color: #D58C51;
    }
  }
}
.buttons {
  display: flex;
  align-items: center;
  gap: 0 13px;

  position: absolute;
  right: -5px;
  bottom: 22px;
}
.button {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid transparent;
  border-radius: 50%;
}
.buttons__count {
  font-size: 17px;
}

:deep(svg:hover) {
  circle {
    fill: #D58C51;
    stroke: #D58C51;
  }
}
</style>
