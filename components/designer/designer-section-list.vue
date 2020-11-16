<template>
  <ul class="designer-section-list">
    <li
      class="designer-section-list__item"
      v-for="contentSection in Object.values(ContentSectionEnum)"
      :class="{
        'designer-section-list__item--selected': isContentSectionSelected(
          contentSection
        )
      }"
      @click="setContentSection(contentSection)"
    >
      <span
        class="designer-section-list__text designer-section-list__text--section"
      >
        {{ getContentSectionLabel(contentSection) }}
      </span>
      <transition name="designer-section-list__icon--animated">
        <span
          class="designer-section-list__icon designer-section-list__icon--arrow adricon"
          v-show="isContentSectionSelected(contentSection)"
        >
          arrowleft
        </span>
      </transition>
    </li>
  </ul>
</template>

<script lang="ts">
import { mapMutations, mapGetters } from 'vuex'

import { ContentSectionEnum } from '../../enums'
import { GENERAL_CONSTS } from '../../models/store/general/general.consts'

export default {
  name: 'designer-section-list',
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
$flag-container-width: rem(50px);
$flag-size: rem(20px);
.designer-section-list {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style-type: none;
  &__item {
    display: grid;
    grid-template-columns: 1fr $flag-container-width;
    align-items: center;
    cursor: pointer;
    transition: opacity $transitions-duration--long;
    &:not(&--selected) {
      opacity: 0.8;
    }
  }

  &__text {
    &--section {
      display: flex;
      justify-content: flex-end;
      color: $primary-color;
      font-size: $font-size--huge;
      font-weight: $font-weight--primary-bold;
      text-transform: uppercase;
    }
  }
  &__icon {
    &--arrow {
      font-size: rem(40px);
      justify-self: center;
    }

    &--animated {
      &-enter-active,
      &-leave-active {
        transition: transform $transitions-duration--long;
      }
      &-enter,
      &-leave-active {
        transform: translate3d($flag-container-width, 0, 0);
      }
    }
  }
}
</style>
