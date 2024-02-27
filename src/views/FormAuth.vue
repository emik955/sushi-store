<template>
  <div class="form">

    <div class="form__block">

      <router-link to="/reg">
        <p class="form__link">Зарегистрироваться</p>
      </router-link>

      <p class="form__title">вход</p>

      <form class="input">
        <div class="input__container">
          <input
            class="input__data"
            type="email"
            placeholder="Логин"
            v-model="email"
          >
          <p class="input__error" v-if="!isEmailCorrect">Поле не должно быть пустым</p>
        </div>

        <div class="input__container">
          <input
            class="input__data"
            type="password"
            placeholder="Пароль"
            v-model="password"
            >
          <p class="input__error" v-if="!isPasswordCorrect">Поле не должно быть пустым</p>
        </div>

        <div class="input__container-checkbox">
          <input
            class="input__checkbox"
            type="checkbox"
            id="checkbox"
            v-model="checkbox"
          >
          <label class="input__label" for="checkbox">Запомнить меня</label>
          <p class="input__error-bottom" v-if="!isCorrect">Логин или пароль неверен</p>
        </div>

        <button class="input__btn" @click.prevent="enterHandler">Войти</button>

      </form>

    </div>

  </div>

  <NotificationModal :show="notification.show" :message="notification.message"/>

</template>

<script>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

import NotificationModal from '@/views/NotificationModal.vue'

export default {
  name: 'FormAuth',
  components: {
    NotificationModal
  },
  props: {
  },
  setup () {
    const router = useRouter()

    const email = ref('')
    const isEmailCorrect = ref(true)

    const password = ref('')
    const isPasswordCorrect = ref(true)

    const checkbox = ref(false)

    const isCorrect = ref(true)

    const notification = ref({
      show: false,
      message: ''
    })

    const showNotification = (msg) => {
      notification.value.show = true
      notification.value.message = msg
    }

    const enterHandler = () => {
      isEmailCorrect.value = email.value.length > 0
      isPasswordCorrect.value = password.value.length > 0

      // if (isEmailCorrect.value && isPasswordCorrect.value) {
      //   isCorrect.value = false
      // }

      // if (isEmailCorrect.value && isPasswordCorrect.value && checkbox.value) {
      //   isCorrect.value = true
      // }

      const array = JSON.parse(localStorage.getItem('users')) || []
      array.forEach((value) => {
        if (value.email === email.value && value.password === password.value) {
          showNotification('Вы успешно прошли авторизацию')
          setTimeout(() => {
            router.push('/')
          }, 2500)
        } else if ((email.value.length > 0 && value.email !== email.value) && (password.value.length > 0 && value.password !== password.value)) {
          isCorrect.value = false
        }
      })
    }

    return {
      email,
      password,
      isCorrect,
      enterHandler,
      isEmailCorrect,
      isPasswordCorrect,
      checkbox,
      notification,
      showNotification
    }
  }
}
</script>

<style lang="scss">
</style>
