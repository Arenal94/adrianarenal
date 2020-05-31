<template>
  <transition-group
    class="animated-clothes"
    tag="g"
    name="animated-clothes__item--animated"
    @enter="onEnter"
    @leave="onLeave"
  >
    <component
      v-for="(item, index) in clothes"
      class="animated-clothes__item"
      :is="item.component"
      :key="`${currentSection}__${index}`"
      :data-index="item.index"
    />
  </transition-group>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
import { GENERAL_CONSTS } from '~/models/store/general/general.consts'
import {
  Sneakers,
  Shirt,
  Mortarboard,
  BoxingGloves,
  SportShoes,
  ElegantShoes,
  Jeans,
  SportShorts,
  Toga,
  WorkJeans,
  WorkShoes,
  TShirt
} from '~/components/default/clothes'
import { SectionEnum } from '~/enums/section.enum'

export default {
  name: 'animated-clothes',
  components: {
    Toga,
    SportShorts,
    Jeans,
    ElegantShoes,
    SportShoes,
    BoxingGloves,
    Mortarboard,
    Shirt,
    Sneakers,
    WorkJeans,
    WorkShoes,
    TShirt
  },
  computed: {
    ...mapGetters({
      currentSection: GENERAL_CONSTS.getters.currentSection
    }),
    clothes: function() {
      return {
        [SectionEnum.MAIN]: () => [
          {
            component: 'jeans',
            index: 1
          },
          {
            component: 'sneakers',
            index: 0
          },
          {
            component: 'shirt',
            index: 2
          }
        ],
        [SectionEnum.STUDIES]: () => [
          {
            component: 'elegant-shoes',
            index: 0
          },
          {
            component: 'toga',
            index: 1
          },
          {
            component: 'mortarboard',
            index: 2
          }
        ],
        [SectionEnum.HOBBIES]: () => [
          {
            component: 'sport-shoes',
            index: 0
          },
          {
            component: 'sport-shorts',
            index: 1
          },
          {
            component: 'boxing-gloves',
            index: 2
          }
        ],
        [SectionEnum.WORK]: () => [
          {
            component: 'work-jeans',
            index: 1
          },
          {
            component: 'work-shoes',
            index: 0
          },
          {
            component: 't-shirt',
            index: 2
          }
        ]
      }[this.currentSection]()
    },
    topItem: function(): string {
      return {
        [SectionEnum.MAIN]: () => 'shirt',
        [SectionEnum.STUDIES]: () => 'mortarboard',
        [SectionEnum.HOBBIES]: () => 'boxing-gloves',
        [SectionEnum.WORK]: () => 'shirt'
      }[this.currentSection]()
    },
    middleItem: function(): string {
      return {
        [SectionEnum.MAIN]: () => 'jeans',
        [SectionEnum.STUDIES]: () => 'toga',
        [SectionEnum.HOBBIES]: () => 'sport-shorts',
        [SectionEnum.WORK]: () => 'jeans'
      }[this.currentSection]()
    },
    bottomItem: function(): string {
      return {
        [SectionEnum.MAIN]: () => 'sneakers',
        [SectionEnum.STUDIES]: () => 'elegant-shoes',
        [SectionEnum.HOBBIES]: () => 'sport-shoes',
        [SectionEnum.WORK]: () => 'sneakers'
      }[this.currentSection]()
    }
  },
  methods: {
    onEnter(item: HTMLElement): void {
      const elementIndex = +item.dataset.index
      const delayInMillis = 500
      item.style.transitionDelay = `${elementIndex *
        delayInMillis}ms, ${elementIndex * delayInMillis}ms`
    },
    onLeave(item: HTMLElement): void {
      const elementIndex = +item.dataset.index
      const delayInMillis = 500
      item.style.transitionDelay = `${elementIndex *
        delayInMillis}ms, ${elementIndex * delayInMillis}ms`
    }
  }
}
</script>

<style lang="scss" scoped>
.animated-clothes {
  &__item {
    &--animated {
      &-enter-active {
        transition: opacity $transitions-duration,
          transform $transitions-duration--long ease-out;
      }

      &-leave-active {
        transition: opacity $transitions-duration,
          transform $transitions-duration--long ease-in;
      }

      &-enter {
        transform: translate3d(0, -100%, 0);
        opacity: 0;
      }

      &-leave-active {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
      }
    }
  }
}
</style>
