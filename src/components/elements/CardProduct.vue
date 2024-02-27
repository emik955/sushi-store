<template>
  <router-link to="/item" class="card-product__link" @click="$emit('openNewItemInBasket')">
  <div class="card-product">
    <div class="card-product__container">
      <img
        class="card-product__image"
        :src='preview'
        alt="logo"
      >
      <p class="card-product__name">{{ title }}</p>
      <div
        :class="{
          'card-product__horizontally': horizontally
        }"
      >
        <div class="buttons">
          <div class="button">
            <ButtonMinus
              @click.prevent="$emit('minus')"
              :class="{'button-disabled': isCountInBasketBiggerOne}"
            />
          </div>
          <span class="buttons__count">{{ countInBasket }}</span>
          <div class="button">
            <ButtonPlus @click.prevent="$emit('plus')"/>
          </div>
        </div>

        <p class="card-product__price">{{ price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }) }}</p>
        <ButtonClosed
          @click.prevent="$emit('removeInBasket')"
          class="card-product__btn-close"
        />
      </div>
    </div>
  </div>
</router-link>
</template>

<script>
import ButtonClosed from '@/components/ui/ButtonClosed.vue'
import ButtonPlus from '@/components/ui/ButtonPlus.vue'
import ButtonMinus from '@/components/ui/ButtonMinus.vue'

export default {
  name: 'CardProduct',
  components: {
    ButtonClosed,
    ButtonPlus,
    ButtonMinus
  },
  props: {
    preview: {
      type: String,
      default: ''
    },
    price: {
      type: String,
      default: 'Price'
    },
    title: {
      type: String,
      default: ''
    },
    horizontally: {
      type: Boolean,
      default: false
    },
    countInBasket: {
      type: Number,
      default: 1
    },
    isCountInBasketBiggerOne: {
      type: Boolean,
      default: false
    }
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.card-product {
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
    bottom: 36px;

    margin-right: 30px;

    font-size: 17px;
    font-weight: 500;
  }

  &__btn {
    width: 30px;
    height: 30px;
    flex-shrink: 0;

    position: absolute;
    right: 0;
    bottom: 30px;
  }

  &__btn-count{
    margin-right: 30px;
  }

  &__btn-close{
    position: absolute;

    right: 0;
  }
}

.buttons {
  display: flex;
  align-items: center;
  gap: 0 13px;
  margin-right: 60px;
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
  font-size: 18px;
}
.button-disabled {
  pointer-events: none;
  opacity: .5;
}

.card-product__link {
  color: #fff;
}

:deep(svg:hover) {
  circle {
    fill: #D58C51;
    stroke: #D58C51;
  }
}
</style>
