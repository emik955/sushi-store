<template>
  <div class="button-closed">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
    >
      <g clip-path="url(#clip0_0_105)">
        <path
          d="M6.70408 6.07886L12.1218 11.4966C12.2723 11.6471 12.2723 11.891 12.1218 12.0415C12.0467 12.1168 11.948 12.1543 11.8495 12.1543C11.7508 12.1543 11.6523 12.1168 11.5771 12.0415L6.11867 6.583L0.660201 12.0415C0.584848 12.1168 0.486355 12.1543 0.387861 12.1543C0.289368 12.1543 0.190682 12.1168 0.115521 12.0415C-0.0349922 11.891 -0.0349922 11.6471 0.115521 11.4966L5.53306 6.07886L0.111887 0.657308C-0.0386267 0.506794 -0.0386267 0.26295 0.111887 0.112437C0.262401 -0.0378858 0.506245 -0.0378858 0.656568 0.112437L6.11848 5.57473L11.581 0.112628C11.7315 -0.0376946 11.9751 -0.0376946 12.1256 0.112628C12.2762 0.263142 12.2762 0.506985 12.1256 0.657499L6.70408 6.07886Z"
          fill="#D58C51"
        />
      </g>
      <defs>
        <clipPath id="clip0_0_105">
          <rect
            width="12.24"
            height="12.24"
            fill="white"
            transform="matrix(-1 0 0 1 12.2402 0)"
          />
        </clipPath>
      </defs>
    </svg>
  </div>
</template>

<script>
// import { ref } from 'vue'

export default {
  name: 'ButtonClosed',
  components: {},
  props: {},
  setup () {}
}
</script>

<style lang="scss" scoped>
.button-closed{
  width: 30px;
  height: 30px;
  flex-shrink: 0;

  border: 1px solid #D58C51;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
