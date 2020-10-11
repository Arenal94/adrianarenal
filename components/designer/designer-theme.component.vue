<template>
  <section class="designer-theme">
    <header class="designer-theme__header">
      Adrian Arenal
    </header>
    <main class="designer-theme__content">
      <aside class="designer-theme__content-aside">
        <character class="designer-theme__character" />
      </aside>
      <nuxt class="scroll--y" />
      <nav class="designer-theme__content-menu">
        <ul class="designer-theme__section-list">
          <li
            class="designer-theme__section-item"
            v-for="contentSection in Object.values(ContentSectionEnum)"
            @click="setContentSection(contentSection)"
          >
            {{ contentSection }}
          </li>
        </ul>
      </nav>
    </main>
  </section>
</template>
<script lang="ts">
import { mapMutations, mapGetters } from 'vuex'

import Character from '~/components/designer/character.component.vue'

import { GENERAL_CONSTS } from '~/models/store/general/general.consts'

import { ContentSectionEnum } from '~/enums'

export default {
  name: 'designer-theme',
  components: { Character },
  computed: {
    ...mapGetters({
      theme: GENERAL_CONSTS.getters.theme,
      contentSection: GENERAL_CONSTS.getters.contentSection
    })
  },
  data() {
    return {
      ContentSectionEnum: ContentSectionEnum
    }
  },
  methods: {
    ...mapMutations({
      setTheme: GENERAL_CONSTS.mutations.setTheme,
      setContentSection: GENERAL_CONSTS.mutations.setContentSection
    })
  }
}
</script>
<style lang="scss" scoped>
@import 'assets/scss/designer';

$header-height: rem(150px);
.designer-theme {
  display: flex;
  flex-direction: column;

  &__header {
    background-color: yellow;
    height: $header-height;
  }

  &__content {
    display: flex;
    height: calc(100% - #{$header-height});
    flex-grow: 1;
  }
  &__content-aside {
    background-color: blue;
    flex-shrink: 0;
    flex-basis: 20%;
    display: flex;
    align-items: center;
  }
  &__character {
    flex-grow: 1;
  }
  &__text-wrapper {
    display: flex;
  }
  &__content-menu {
    background-color: red;
    flex-shrink: 0;
    flex-basis: 30%;
  }
  &__character {
    max-height: rem(500px);
  }
}
</style>
