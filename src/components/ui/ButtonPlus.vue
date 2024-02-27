<template>
  <div class="plus">
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 3.49999L12 20.5" stroke="#D58C51" stroke-linecap="round" />
      <path d="M20.5 12H3.50001" stroke="#D58C51" stroke-linecap="round" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'ButtonPlus',
  components: {},
  props: {},
  setup () {}
}
</script>

<style lang="scss" scoped>
.plus {
  width: 30px;
  height: 30px;
  cursor: pointer;
}
</style>
