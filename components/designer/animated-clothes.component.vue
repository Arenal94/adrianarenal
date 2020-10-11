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
      :key="`${contentSection}__${index}`"
      :data-index="item.index"
    />
  </transition-group>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
import { GENERAL_CONSTS } from '~/models/store/general/general.consts'

import ElegantShoes from './clothes/bottom/elegant-shoes.component.vue'
import Sneakers from './clothes/bottom/sneakers.component.vue'
import SportShoes from './clothes/bottom/sport-shoes.component.vue'
import WorkShoes from './clothes/bottom/work-shoes.component.vue'

import Jeans from './clothes/middle/jeans.component.vue'
import SportShorts from './clothes/middle/sport-shorts.component.vue'
import Toga from './clothes/middle/toga.component.vue'
import WorkJeans from './clothes/middle/work-jeans.component.vue'

import BoxingGloves from './clothes/top/boxing-gloves.component.vue'
import Mortarboard from './clothes/top/mortarboard.component.vue'
import Shirt from './clothes/top/shirt.component.vue'
import TShirt from './clothes/top/t-shirt.component.vue'

import { ContentSectionEnum } from '~/enums/content-section.enum'

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
      contentSection: GENERAL_CONSTS.getters.contentSection
    }),
    clothes: function() {
      return {
        [ContentSectionEnum.MAIN]: () => [
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
        [ContentSectionEnum.STUDIES]: () => [
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
        [ContentSectionEnum.HOBBIES]: () => [
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
        [ContentSectionEnum.WORK]: () => [
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
      }[this.contentSection]()
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
