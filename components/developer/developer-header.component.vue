<template>
  <header class="developer-header">
    <ul class="developer-header__breadcumb">
      <li class="developer-header__breadcumb-item">
        <logo class="developer-header__logo" /> Adrian Arenal
      </li>
    </ul>
  </header>
</template>

<script lang="ts">
import Logo from '../logo.component.vue'

export default {
  name: 'developer-header',
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/developer/styles';
.developer-header {
  display: flex;
  &__breadcumb {
    display: flex;
    margin: 0;
    padding: 0;
  }

  &__breadcumb-item {
    display: flex;
    align-items: center;
  }

  &__logo {
    height: 100%;
    width: rem(30px);
    padding: rem(5px);
    fill: $primary-color;
  }
}
</style>
