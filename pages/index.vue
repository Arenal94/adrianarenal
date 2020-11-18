<template>
  <div class="content">
    <template v-for="section in sections">
      <intersect-element class="content__intersect-element">
        <!-- TODO intersect event-->
        <component
          :is="getSectionComponent(section)"
          class="content__section"
        />
      </intersect-element>
    </template>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'

import { GENERAL_CONSTS } from '~/models/store/general/general.consts'

import { SectionEnum, ThemeEnum } from '~/enums'

import { Hobbies, Intro, Studies, Work, IntersectElement } from '~/components'

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
    getSectionComponent: function(section: SectionEnum) {
      return {
        [SectionEnum.INTRO]: () => Intro,
        [SectionEnum.WORK]: () => Work,
        [SectionEnum.STUDIES]: () => Studies,
        [SectionEnum.HOBBIES]: () => Hobbies
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
    min-height: 100%;
  }
}
</style>
