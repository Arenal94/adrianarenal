<template>
  <svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 600">
    <defs v-if="animated">
      <linearGradient :id="gradientId" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stop-color="#f7f7f7">
          <animate
            attributeName="stop-color"
            values="#f7f7f7; #8b6391; #f7f7f7; #53b9c9; #f7f7f7; #e67962; #f7f7f7"
            dur="20s"
            repeatCount="indefinite"
          ></animate>
        </stop>

        <stop offset="100%" stop-color="#8b6391">
          <animate
            attributeName="stop-color"
            values="#8b6391; #f7f7f7; #0086b2; #f7f7f7; #80c0a1; #f7f7f7; #8b6391"
            dur="20s"
            repeatCount="indefinite"
          ></animate>
        </stop>
      </linearGradient>
    </defs>
    <path
      class="logo__right"
      v-bind="animated && { fill: `url('#${gradientId}')` }"
      d="M376.92,57.71,178.49,410.81,246,411l134.1-233.18L612,590.26V502.12a40.84,40.84,0,0,0-4.92-19.43Z"
    />
    <path
      class="logo__left"
      v-bind="animated && { fill: `url('#${gradientId}')` }"
      d="M414.8,493.57l-29.72-49.35H123.16L357.48,21.77l-51.58,0a20.42,20.42,0,0,0-17.64,10.14L19.79,493.19Z"
    />
    <path
      class="logo__bottom"
      v-bind="animated && { fill: `url('#${gradientId}')` }"
      d="M0,569.86a20.4,20.4,0,0,0,20.4,20.4H571.55L379.67,248.07l-34,58.88c30.64,53.72,98,169.46,130.32,220.92H0Z"
    />
  </svg>
</template>

<script lang="ts">
export default {
  name: 'logo',
  props: {
    animated: Boolean
  },
  data() {
    return {
      gradientId: 'logo-gradient'
    }
  }
}
</script>

<style lang="scss" scoped></style>
