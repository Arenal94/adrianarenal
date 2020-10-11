<template>
  <section class="designer-theme">
    <nuxt />
    <character class="designer-theme__character" />
  </section>
</template>
<script lang="ts">
import Character from '~/components/designer/character.component.vue'

export default {
  name: 'designer-theme',
  components: { Character }
}
</script>
<style lang="scss" scoped>
@import 'assets/scss/designer';
.designer-theme {
  min-height: 100vh;
  &__character {
    max-height: rem(500px);
  }
}
</style>
