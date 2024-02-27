<template>
  <button class="btn">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
    >
      <circle cx="15" cy="15" r="14.5" stroke="white" fill="transparent"/>
      <path
        d="M14.9999 9.28564V20.3571"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M20.3571 14.8214L9.28563 14.8214"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  </button>
</template>

<script>
// import { ref } from 'vue'

export default {
  name: 'ButtonEl',
  components: {},
  props: {
    fill: {
      type: String,
      default: 'none'
    }
  },
  setup () {}
}
</script>

<style lang="scss" scoped>

</style>
