<template>
  <ul class="designer-section-list">
    <li
      class="designer-section-list__item"
      v-for="section in Object.values(SectionEnum)"
      :class="{
        'designer-section-list__item--selected': isSectionSelected(section)
      }"
      @click="setSection(section)"
    >
      <span
        class="designer-section-list__text designer-section-list__text--section"
      >
        {{ getSectionLabel(section) }}
      </span>
      <transition name="designer-section-list__icon--animated">
        <span
          class="designer-section-list__icon designer-section-list__icon--arrow adricon"
          v-show="isSectionSelected(section)"
        >
          arrowleft
        </span>
      </transition>
    </li>
  </ul>
</template>

<script lang="ts">
import { mapMutations, mapGetters } from 'vuex'

import { SectionEnum } from '../../enums'

import { GENERAL_CONSTS } from '../../models/store/general/general.consts'

export default {
  name: 'designer-section-list',
  computed: {
    ...mapGetters({
      section: GENERAL_CONSTS.getters.section
    })
  },
  data() {
    return {
      SectionEnum
    }
  },
  methods: {
    ...mapMutations({
      setSection: GENERAL_CONSTS.mutations.setSection
    }),
    isSectionSelected: function(section: SectionEnum): boolean {
      return this.section === section
    },
    getSectionLabel: function(section: SectionEnum): string {
      return {
        [SectionEnum.INTRO]: () => 'Intro',
        [SectionEnum.WORK]: () => 'Work',
        [SectionEnum.STUDIES]: () => 'Studies',
        [SectionEnum.HOBBIES]: () => 'Hobbies'
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
