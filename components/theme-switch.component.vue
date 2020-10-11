<template>
  <div class="theme-switch">
    <div class="theme-switch__content">
      <label
        class="theme-switch__label"
        for="theme-switch-input"
        :class="{ 'theme-switch__label--selected': selected }"
      />
      <span
        class="theme-switch__option theme-switch__option--left adricon"
        :class="{ 'theme-switch__option--selected': !selected }"
      >
        developer
      </span>
      <span
        class="theme-switch__option theme-switch__option--right adricon"
        :class="{ 'theme-switch__option--selected': selected }"
      >
        designer
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

import { mapMutations } from 'vuex'

export default {
  name: 'theme-switch',
  data: function() {
    return {
      selected: false
    }
  },
  methods: {
    ...mapMutations({
      setTheme: GENERAL_CONSTS.mutations.setTheme
    }),
    inputChange(inputValue) {
      this.selected = inputValue.target.checked
    }
  },
  watch: {
    selected: function(selected) {
      if (selected) {
        this.setTheme(ThemeEnum.DESIGNER)
      } else {
        this.setTheme(ThemeEnum.DEVELOPER)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.theme-switch {
  $component-class: &;
  display: flex;
  align-items: center;
  width: rem(90px);
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
    font-size: $font-size--extra-large;
    color: $color--grey;
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
    background-color: $color--dark-grey-blue;
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
    z-index: 2;
  }
}
</style>
