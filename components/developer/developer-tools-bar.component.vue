<template>
  <nav class="developer-tools-bar">
    <div
      class="developer-tools-bar__option developer-tools-bar__option--problems"
    >
      <span
        class="developer-tools-bar__icon developer-tools-bar__icon--problems adricon"
      >
        warning
      </span>
      Problems
    </div>
    <div class="developer-tools-bar__option developer-tools-bar__option--todo">
      <span
        class="developer-tools-bar__icon developer-tools-bar__icon--todo adricon"
      >
        todo
      </span>
      TODO
    </div>
    <div
      class="developer-tools-bar__option developer-tools-bar__option--terminal developer-tools-bar__option--selected"
    >
      <span
        class="developer-tools-bar__icon developer-tools-bar__icon--terminal adricon"
      >
        terminal
      </span>
      Terminal
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'developer-tools-bar'
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/developer/styles';
.developer-tools-bar {
  display: flex;
  padding-left: rem(30px);

  &__option {
    display: flex;
    align-items: center;
    padding: rem(5px) rem(10px);

    &:not(:first-child) {
      margin-left: rem(10px);
    }

    &--selected {
      background-color: $grey--8;
    }
  }
  &__icon {
    margin-right: rem(5px);
    &--terminal {
      color: $on-primary-color;
      background-color: $primary-color;
    }
  }
}
</style>
