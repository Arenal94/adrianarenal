<template>
  <div class="content">
    <template v-for="contentSection in contentSectionsVisible">
      <intersect-element class="content__intersect-element">
        <!-- TODO intersect event-->
        <component
          :is="getContentSectionComponent(contentSection)"
          class="content__section"
        />
      </intersect-element>
    </template>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'

import { GENERAL_CONSTS } from '~/models/store/general/general.consts'

import { ContentSectionEnum, ThemeEnum } from '~/enums'

import { Hobbies, Main, Studies, Work, IntersectElement } from '~/components'

export default {
  components: {
    IntersectElement
  },
  computed: {
    ...mapGetters({
      theme: GENERAL_CONSTS.getters.theme,
      contentSection: GENERAL_CONSTS.getters.contentSection
    }),
    contentSectionsVisible: function(): ContentSectionEnum[] {
      return this.theme === ThemeEnum
        ? [this.contentSection]
        : Object.values(ContentSectionEnum)
    }
  },
  methods: {
    getContentSectionComponent: function(contentSection: ContentSectionEnum) {
      return {
        [ContentSectionEnum.MAIN]: () => Main,
        [ContentSectionEnum.WORK]: () => Work,
        [ContentSectionEnum.STUDIES]: () => Studies,
        [ContentSectionEnum.HOBBIES]: () => Hobbies
      }[contentSection]()
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
