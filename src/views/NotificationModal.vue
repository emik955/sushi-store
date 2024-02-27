<template>
  <div
    v-if="show"
    class="notification-modal"
  >
    <div class="notification-modal__img">
      <img src="@/assets/images/arrow.png" alt="arrow">
    </div>

    {{ message }}
  </div>
</template>

<script>
// import { ref } from 'vue'

export default {
  name: 'NotificationModal',
  components: {
  },
  props: {
    show: {
      type: Boolean
    },
    message: {
      type: String,
      default: '123'
    }
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.notification-modal {
  width: 800px;
  height: 400px;
  position: fixed;
  top: 25%;
  left: 27%;
  background-color: #FFF;
  padding: 10px;
  border: 1px solid #360909;
  border-radius: 10px;
  // box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, .8);

  color: #000;
  font-size: 35px;
  font-weight: 500;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &__img {
    width: 300px;
  }
}
</style>
