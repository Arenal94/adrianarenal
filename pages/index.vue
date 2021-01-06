<template>
  <div class="content">
    <intersect-element
      v-for="section in sections"
      :key="section"
      class="content__intersect-element"
      :options="{ threshold: [0.75] }"
      @intersect="setSection(section)"
    >
      <component :is="getSectionComponent(section)" class="content__section" />
    </intersect-element>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapMutations } from 'vuex'

import { GENERAL_CONSTS } from '~/models/store/general/general.consts'

import { SectionEnum, ThemeEnum } from '~/enums'

import {
  HobbiesSection,
  IntroSection,
  StudiesSection,
  WorkSection,
  IntersectElement
} from '~/components'

export default {
  components: {
    IntersectElement
  },
  computed: {
    ...mapGetters({
      theme: GENERAL_CONSTS.getters.theme,
      section: GENERAL_CONSTS.getters.section
    }),
    sections: function(): SectionEnum[] {
      return this.theme === ThemeEnum
        ? [this.section]
        : Object.values(SectionEnum)
    }
  },
  methods: {
    ...mapMutations({
      setSection: GENERAL_CONSTS.mutations.setSection
    }),
    getSectionComponent: function(section: SectionEnum) {
      return {
        [SectionEnum.INTRO]: () => IntroSection,
        [SectionEnum.WORK]: () => WorkSection,
        [SectionEnum.STUDIES]: () => StudiesSection,
        [SectionEnum.HOBBIES]: () => HobbiesSection
      }[section]()
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;

  &__intersect-element {
    display: flex;
    min-height: 100%;
    padding-left: rem(20px);
    padding-right: rem(20px);
  }

  &__section {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    max-width: rem(660px);
  }
}
</style>
