<template>
  <slot></slot>
</template>

<script>
// import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'AuthHOC',
  components: {
  },
  props: {
  },
  setup () {
    const router = useRouter()

    const users = localStorage.getItem('users')

    if (!users) {
      router.push('/auth')
    }
  }
}
</script>

<style lang="scss">
.form {
  width: 100%;
  height: 100vh;
  background: url('@/assets/bg/bg_valid.jpeg') 0 0/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;

  &__block {
    display: flex;
    flex-direction: column;

    width: 30.3125rem;
    height: 23.125rem;

    background-color: #fff;
    color: #161516;
  }

  &__link {
    font-size: 0.875rem;
    text-align: right;
    padding: 0.625rem 1.25rem 0 0;
    color: #D58C51;
    margin-bottom: 0.8125rem;
  }

  &__title {
    font-size: 1.9375rem;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;

    margin-bottom: 2.25rem;
  }
}

.input {
  height: 61%;
  display: flex;
  flex-direction: column;

  // position: relative;

  &__container {
    width: 90%;
    height: 3.4375rem;
    align-self: center;
    margin-bottom: 7px;
  }

  &__container-checkbox {
    padding-left: 1.25rem;
    flex-grow: 2;
  }

  &__label {
    padding-left: 5px;
  }

  &__data {
    width: 100%;
    height: 2.4375rem;
    border: 1px solid #D58C51;
    border-radius: 15px;
    padding-left: 18px;
  }

  &__btn {
    // position: absolute;
    // bottom: 20px;

    align-self: center;
    width: 12.5rem;
    height: 2.625rem;
    background-color: #D58C51;
  }

  &__error {
    color: #FF0B0B;
    font-size: 10px;
    padding-left: 15px;
  }

  &__error-bottom {
    color: #FF0B0B;
    font-size: 10px;
    text-align: center;
    padding-top: 2px;
  }
}

.input__checkbox {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
.input__checkbox+label::before {
  content: '';
  display: inline-block;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #adb5bd;
  border-radius: 50%;
  margin-right: 0.4em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}
.input__checkbox:checked+label::before {
  border-color: #D58C51;
  background-color: #D58C51;
}
.input__checkbox:disabled+label::before {
  background-color: #e9ecef;
}
</style>
