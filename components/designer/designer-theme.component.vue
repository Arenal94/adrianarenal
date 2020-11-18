<template>
  <section class="designer-theme">
    <main class="designer-theme__main-content">
      <character class="designer-theme__character" />
      <nuxt class="designer-theme__sections-container scroll--y" />
      <designer-section-list class="designer-theme__section-list" />
    </main>
  </section>
</template>
<script lang="ts">
import Character from '~/components/designer/character.component.vue'
import DesignerSectionList from '~/components/designer/designer-section-list.vue'

export default {
  name: 'designer-theme',
  components: {
    Character,
    DesignerSectionList
  }
}
</script>
<style lang="scss">
@import 'assets/scss/designer/styles';
.designer-theme {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  color: $primary-color;
  background-color: $on-primary-color;
  font-family: $font-family--primary;
  font-size: $font-size--extra-small;

  &__character {
    flex-basis: 35%;
    flex-shrink: 0;
    align-self: center;
    max-height: rem(500px);
  }

  &__main-content {
    display: flex;
    flex-grow: 1;
  }

  &__section-list {
    flex-basis: 25%;
    flex-shrink: 0;
    align-self: center;
  }
}
</style>
