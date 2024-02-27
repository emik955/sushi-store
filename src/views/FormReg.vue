<template>
  <div class="form">

    <div class="form__block">

      <router-link to="/auth">
        <p class="form__link">Авторизоваться</p>
      </router-link>

      <p class="form__title">Регистрация</p>

      <form class="input">
        <div class="input__container">
          <input
            class="input__data"
            type="email"
            placeholder="Логин"
            v-model="email"
          >
          <p class="input__error" v-if="!isEmailEmpty">Поле не должно быть пустым</p>
          <p class="input__error" v-if="!isEmailLength">Логин должен содержать не менее 4-х символов</p>
          <p class="input__error" v-if="!isEmailCorrect">Введите корректный email</p>
        </div>

        <div class="input__container">
          <input
          class="input__data"
          type="password"
          placeholder="Пароль"
          v-model="password"
          >
          <p class="input__error" v-if="!isPasswordEmpty">Поле не должно быть пустым</p>
          <p class="input__error" v-if="!isPasswordLength">Пароль должен содержать не менее 4-х символов</p>
          <p class="input__error" v-if="!isPasswordCorrect">Пароль должен содержать хотя бы одну букву в верхнем регистре, нижнем, символ и цифру</p>
        </div>

        <div class="input__container-checkbox">
          <input
            class="input__checkbox"
            type="checkbox"
            id="checkbox"
            v-model="checkbox"
          >
          <label class="input__label" for="checkbox">Я согласен получать обновления на почту</label>
          <p class="input__error-bottom" v-if="!isCorrect">Нажмите кнопку с соглашением</p>
        </div>

        <button class="input__btn" @click.prevent="enterHandler">Зарегистрироваться</button>
      </form>
    </div>
  </div>

  <NotificationModal :show="notification.show" :message="notification.message"/>

</template>

<script>
import NotificationModal from '@/views/NotificationModal.vue'

import { ref } from 'vue'
import { useRouter } from 'vue-router'

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
    const isEmailEmpty = ref(true)
    const isEmailLength = ref(true)
    const isEmailCorrect = ref(true)

    const password = ref('')
    const isPasswordEmpty = ref(true)
    const isPasswordLength = ref(true)
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

    // showNotification('Вы успешно зарегистрировались!')

    const enterHandler = (e) => {
      isEmailEmpty.value = email.value.length > 0
      isEmailLength.value = !(email.value.length > 0 && email.value.length < 4)
      isEmailCorrect.value = !(email.value.length > 3 && !email.value
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))

      isPasswordEmpty.value = password.value.length > 0
      isPasswordLength.value = !(password.value.length > 0 && password.value.length < 4)
      isPasswordCorrect.value = !(password.value.length > 3 && !password.value
        .match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=(.*[a-zA-Z]){2}).{4,20}$/))

      if (isEmailCorrect.value && isPasswordCorrect.value && !checkbox.value) {
        isCorrect.value = false
      }

      if (isEmailCorrect.value && isPasswordCorrect.value && checkbox.value) {
        const array = JSON.parse(localStorage.getItem('users')) || []
        console.log(array)

        const checkEmail = array.findIndex(user => user.email === email.value)
        console.log(checkEmail)

        if (checkEmail !== -1) {
          array[checkEmail].password = password.value
          localStorage.setItem('users', JSON.stringify(array))
          showNotification('Пароль успешно заменен!')
          setTimeout(() => {
            router.push('/auth')
          }, 2500)
        } else {
          array.push({ email: email.value, password: password.value, userId: Date.now() })
          localStorage.setItem('users', JSON.stringify(array))
          showNotification('Вы успешно зарегистрировались!')
          setTimeout(() => {
            router.push('/auth')
          }, 2500)
        }
      }
    }

    return {
      email,
      password,
      isCorrect,
      isEmailEmpty,
      isEmailLength,
      isEmailCorrect,
      isPasswordCorrect,
      isPasswordLength,
      isPasswordEmpty,
      checkbox,
      enterHandler,
      notification,
      showNotification
    }
  }
}
</script>

<style lang="scss">
</style>
