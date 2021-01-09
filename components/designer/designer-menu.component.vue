<template>
  <aside class="designer-menu">
    <span
      class="designer-menu__icon designer-menu__icon--close adricon"
      @click="$emit('close')"
      >arrowright</span
    >
    <designer-section-list class="designer-menu__section-list" />
    <character class="designer-menu__character" />
  </aside>
</template>

<script lang="ts">
import Character from '~/components/designer/character.component.vue'
import DesignerSectionList from '~/components/designer/designer-section-list.vue'

export default {
  name: 'designer-menu',
  components: {
    DesignerSectionList,
    Character
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/designer/styles';
.designer-menu {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__icon {
    &--close {
      position: absolute;
      right: 0;
      top: 50%;
      font-size: $font-size--large;
      transform: translate(0, -50%);
    }
  }
}
</style>
