<template>
  <button class="minus">
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.5 12L4.50002 12" stroke="#D58C51" stroke-linecap="round" />
    </svg>
  </button>
</template>

<script>
export default {
  name: 'ButtonMinus',
  components: {},
  props: {},
  setup () {}
}
</script>

<style lang="scss" scoped>
.minus {
  width: 30px;
  height: 30px;
  cursor: pointer;
}
</style>
