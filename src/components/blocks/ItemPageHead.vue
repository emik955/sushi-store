<template>
  <div class="item-page-head">
    <div>
      <router-link to="/">
        <arrowIcon />
      </router-link>
    </div>
    <div class="item-page-head__block">
      <HeaderMain class="item-page-head__header"
          :isVisibility="false"
      />
      <router-link to="/auth">
        <ButtonBottom
          class="button-bottom"
          title="Выйти"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
// import { ref } from 'vue'
import HeaderMain from '@/components/blocks/HeaderMain.vue'
import ButtonBottom from '@/components/ui/ButtonBottom.vue'
import arrowIcon from '../icons/arrowIcon.vue'

export default {
  name: 'ItemPageHead',
  components: {
    arrowIcon,
    HeaderMain,
    ButtonBottom
  },
  props: {
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.item-page-head {
  padding-top: 3.8125rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item-page-head__block {
  display: flex;
  align-items: center;
  gap: 0 20px
}
.item-page-head__header {
  margin: 0;
  padding: 0;
}
.button-bottom {
  width: 12.5rem;
  height: 2.625rem;
  border: 1px solid rgb(213, 140, 81);
  display: flex;
  justify-content: center;
  text-align: center;
  color: rgb(213, 140, 81);
  transition: .5s;

  &:hover {
    border-color: rgb(247, 176, 118);
    color: rgb(247, 176, 118);
  }

  &:focus {
    opacity: .8;
  }
}
</style>
