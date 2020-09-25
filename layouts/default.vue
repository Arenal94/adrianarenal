<template>
  <div class="default-layout">
    <nuxt />
    <character class="default-layout__character" />
  </div>
</template>
<script lang="ts">
import Character from '~/components/default/character.component.vue'
export default {
  name: 'default',
  components: { Character }
}
</script>
<style lang="scss" scoped>
@import 'assets/scss/default';
.default-layout {
  min-height: 100vh;
  &__character {
    max-height: rem(500px);
  }
}
</style>
