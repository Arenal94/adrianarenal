<template>
  <div class="theme-switch">
    <div class="theme-switch__content">
      <label
        class="theme-switch__label"
        for="theme-switch-input"
        :class="{ 'theme-switch__label--selected': isDeveloperTheme }"
      />
      <span
        class="theme-switch__option theme-switch__option--designer adricon"
        :class="{ 'theme-switch__option--selected': !isDeveloperTheme }"
      >
        designer
      </span>
      <span
        class="theme-switch__option theme-switch__option--developer adricon"
        :class="{ 'theme-switch__option--selected': isDeveloperTheme }"
      >
        developer
      </span>
      <input
        class="theme-switch__input"
        type="checkbox"
        id="theme-switch-input"
        @change="inputChange"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { GENERAL_CONSTS } from '~/models/store/general/general.consts'

import { ThemeEnum } from '~/enums'

import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'theme-switch',
  computed: {
    ...mapGetters({
      theme: GENERAL_CONSTS.getters.theme
    }),
    isDeveloperTheme: function(): boolean {
      return this.theme === ThemeEnum.DEVELOPER
    }
  },
  methods: {
    ...mapMutations({
      setTheme: GENERAL_CONSTS.mutations.setTheme,
      setAutoScrolling: GENERAL_CONSTS.mutations.setAutoScrolling
    }),
    inputChange(inputValue): void {
      const selectedTheme = inputValue.target.checked
        ? ThemeEnum.DEVELOPER
        : ThemeEnum.DESIGNER
      this.setAutoScrolling(true)
      this.setTheme(selectedTheme)
    }
  }
}
</script>

<style lang="scss" scoped>
.theme-switch {
  $component-class: &;
  display: flex;
  align-items: center;
  width: rem(110px);
  height: rem(60px);
  padding: rem(5px);
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 rem(11px) 0 rgba(0, 0, 0, 0.15);
  border-radius: rem(35px);

  &__content {
    position: relative;
    display: flex;
    align-items: center;
    flex-grow: 1;
    height: 100%;
  }

  &__option {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 50%;
    height: 100%;
    font-size: rem(30px);
    color: #a6b0b5;
    z-index: 1;
    transition: color $transitions-duration;
    &--selected {
      color: white;
    }
  }

  &__label {
    position: absolute;
    width: 50%;
    height: 80%;
    border-radius: rem(20px);
    background-color: #243d48;
    transition: transform $transitions-duration;
    &--selected {
      transform: translate3d(100%, 0, 0);
    }
  }

  &__input {
    position: absolute;
    cursor: pointer;
    appearance: none;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    z-index: 2;
  }
}
</style>
