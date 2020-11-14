<template>
  <div class="default-layout">
    <theme-switch class="default-layout__theme-switch" />
    <transition name="default-layout__theme--animated" mode="out-in">
      <component
        class="default-layout__theme"
        :is="selectedThemeComponent"
        :class="`default-layout__theme--${theme}`"
      />
    </transition>
  </div>
</template>
<script lang="ts">
import { mapGetters } from 'vuex'

import { ThemeEnum } from '~/enums'

import { GENERAL_CONSTS } from '~/models/store/general/general.consts'

import { DesignerTheme, DeveloperTheme, ThemeSwitch } from '~/components'

export default {
  name: 'default',
  components: {
    ThemeSwitch
  },
  computed: {
    ...mapGetters({
      theme: GENERAL_CONSTS.getters.theme
    }),
    selectedThemeComponent() {
      return {
        [ThemeEnum.DESIGNER]: () => DesignerTheme,
        [ThemeEnum.DEVELOPER]: () => DeveloperTheme
      }[this.theme]()
    }
  }
}
</script>

<style lang="scss" scoped>
.default-layout {
  $component-class: &;
  overflow: hidden;

  &__theme-switch {
    position: absolute;
    top: rem(5px);
    right: rem(5px);
  }

  &__theme {
    overflow: hidden;
    &--animated {
      &-enter-active,
      &-leave-active {
        transition: transform $transitions-duration;
      }
      &-enter,
      &-leave-to {
        &#{$component-class}__theme {
          &--developer {
            transform: translate3d(100%, 0, 0);
          }
          &--designer {
            transform: translate3d(-100%, 0, 0);
          }
        }
      }
    }
  }
}
</style>
