<template>
  <section class="designer-theme">
    <header class="designer-theme__header">
      <span>Adrián Arenal</span>
    </header>
    <main class="designer-theme__main-content">
      <character class="designer-theme__character" />
      <nuxt class="designer-theme__sections-container scroll--y" />
      <ul class="designer-theme__section-list">
        <li
          class="designer-theme__section-list-item"
          v-for="contentSection in Object.values(ContentSectionEnum)"
          :class="{
            'designer-theme__section-item--selected': isContentSectionSelected(
              contentSection
            )
          }"
          @click="setContentSection(contentSection)"
        >
          {{ getContentSectionLabel(contentSection) }}
        </li>
      </ul>
    </main>
    <footer class="designer-theme__footer">
      footer
    </footer>
  </section>
</template>
<script lang="ts">
import { mapMutations, mapGetters } from 'vuex'

import Character from '~/components/designer/character.component.vue'

import { ContentSectionEnum } from '~/enums'

import { GENERAL_CONSTS } from '~/models/store/general/general.consts'

export default {
  name: 'designer-theme',
  components: {
    Character
  },
  computed: {
    ...mapGetters({
      contentSection: GENERAL_CONSTS.getters.contentSection
    })
  },
  data() {
    return {
      ContentSectionEnum
    }
  },
  methods: {
    ...mapMutations({
      setTheme: GENERAL_CONSTS.mutations.setTheme,
      setContentSection: GENERAL_CONSTS.mutations.setContentSection
    }),
    isContentSectionSelected: function(section: ContentSectionEnum): boolean {
      return this.contentSection === section
    },
    getContentSectionLabel: function(section: ContentSectionEnum): string {
      return {
        [ContentSectionEnum.MAIN]: () => 'Intro',
        [ContentSectionEnum.WORK]: () => 'Work',
        [ContentSectionEnum.STUDIES]: () => 'Studies',
        [ContentSectionEnum.HOBBIES]: () => 'Hobbies'
      }[section]()
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'assets/scss/designer/styles';
$header-height: rem(100px);
$footer-height: rem(60px);
.designer-theme {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;

  &__header {
    position: absolute;
    top: 0;
    height: $header-height;
    width: 100%;
    background-color: $color--pale-teal;
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
    display: flex;
    flex-direction: column;
    flex-basis: 25%;
    flex-shrink: 0;
    align-self: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  &__section-list-item {
    font-size: $font-size--extra-large;
    text-transform: uppercase;
  }

  &__footer {
    position: absolute;
    bottom: 0;
    background-color: orangered;
    width: 100%;
    height: 60px;
  }
}
</style>
