<template>
  <section class="designer-theme">
    <header class="designer-theme__header">
      <div class="designer-theme__header-content">
        Hola q tal yo fenomenal
      </div>
    </header>
    <main class="designer-theme__main-content">
      <character class="designer-theme__character" />
      <nuxt class="designer-theme__sections-container scroll--y" />
      <designer-section-list class="designer-theme__section-list" />
    </main>
    <footer class="designer-theme__footer">
      <div class="designer-theme__footer-content">
        <span>Adrian Arenal © {{ new Date().getFullYear() }}</span>
        <social-media-list class="designer-theme__socia-media-list" />
      </div>
    </footer>
  </section>
</template>
<script lang="ts">
import Character from '~/components/designer/character.component.vue'
import DesignerSectionList from '~/components/designer/designer-section-list.vue'
import SocialMediaList from '~/components/social-media-list.component.vue'

export default {
  name: 'designer-theme',
  components: {
    Character,
    DesignerSectionList,
    SocialMediaList
  }
}
</script>
<style lang="scss">
$header-height: 10vh;
$footer-height: 5vh;

.designer-theme {
  @import 'assets/scss/designer/styles';
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
    display: flex;
    align-items: center;
    height: $header-height;
    &::after {
      content: '';
      border-bottom: $header-height solid transparent;
      border-left: 100vw solid $color--dark-green;
    }
  }
  &__header-content {
    position: absolute;
  }

  &__main-content {
    display: flex;
    max-height: 100%;
    flex-grow: 1;
  }

  &__character {
    flex-basis: 35%;
    flex-shrink: 0;
    padding-top: $header-height;
    padding-bottom: $footer-height;
  }

  &__section-list {
    flex-basis: 25%;
    flex-shrink: 0;
    align-self: center;
  }

  &__footer {
    position: absolute;
    bottom: 0;
    display: flex;
    height: $footer-height;
    &::after {
      content: '';
      border-top: $footer-height solid transparent;
      border-right: 100vw solid $color--dark-grey-blue;
    }
  }
  &__footer-content {
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: flex-start;
    color: white;
    padding: rem(5px);
    & > *:not(:first-child) {
      margin-left: rem(5px);
    }
  }
}
</style>
