<template>
  <section class="designer-theme">
    <header class="designer-theme__header">
      <span>Adrián Arenal</span>
    </header>
    <main class="designer-theme__main-content">
      <character class="designer-theme__character" />
      <nuxt class="designer-theme__sections-container scroll--y" />
      <designer-section-list class="designer-theme__section-list" />
    </main>
    <footer class="designer-theme__footer">
      footer
    </footer>
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
$header-height: rem(100px);
$footer-height: rem(60px);
.designer-theme {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  color: $primary-color;
  background-color: $on-primary-color;
  font-family: $font-family--primary;
  font-size: $font-size--extra-small;

  &__header {
    position: absolute;
    top: 0;
    height: $header-height;
    width: 100%;
    background-color: $secondary-color;
    color: $on-secondary-color;
  }

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
  &__sections-container {
    padding: rem(20px) 0;
  }

  &__section-list {
    flex-basis: 25%;
    flex-shrink: 0;
    align-self: center;
  }

  &__footer {
    position: absolute;
    bottom: 0;
    background-color: $primary-color;
    color: $on-primary-color;
    width: 100%;
    height: 60px;
  }
}
</style>
