<template>
  <div class="default-layout">
    <transition name="default-layout__theme--animated" mode="out-in">
      <component
        :is="selectedThemeComponent"
        class="default-layout__theme"
        :class="`default-layout__theme--${theme}`"
      />
    </transition>
    <theme-switch class="default-layout__theme-switch" />
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
  position: relative;
  display: flex;
  height: 100%;
  overflow: hidden;

  &__theme-switch {
    position: absolute;
    top: rem(5px);
    right: rem(5px);
    width: rem(110px);
    height: rem(60px);
  }

  &__theme {
    flex-grow: 1;
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
  @media only screen and (max-width: $breakpoint__small-tablet--max) {
    &__theme-switch {
      width: rem(85px);
      height: rem(50px);
    }
  }
}
</style>
