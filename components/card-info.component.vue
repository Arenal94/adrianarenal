<template>
  <div
    class="card-info card-info--designer"
    v-if="theme === ThemeEnum.DESIGNER"
  >
    <figure class="card-info__image-container" v-if="!!imageSrc">
      <img :src="imageSrc" :alt="author" />
    </figure>
    <div class="card-info__title-wrapper">
      <h3 class="card-info__text card-info__text--title">{{ title }}</h3>
      <code class="card-info__text card-info__text--date" v-if="!!date">
        {{ date }}
      </code>
    </div>
    <label class="card-info__text card-info__text--author" v-if="!!author">
      {{ author }}
    </label>
    <div class="card-info__additional-info-container" v-if="!!$slots.default">
      <slot />
    </div>
  </div>
  <div class="card-info card-info--developer" v-else>
    <p class="card-info__text card-info__text--title">
      {{ title }} ( {{ date }} )
    </p>
    <p class="card-info__text card-info__text--author">{{ author }}</p>
    <slot />
  </div>
</template>

<script lang="ts">
import { ThemeEnum } from '~/enums'
import { mapGetters } from 'vuex'
import { GENERAL_CONSTS } from '~/models/store/general/general.consts'

export default {
  name: 'card-info',
  props: {
    title: {
      type: String,
      required: true
    },
    date: String,
    author: String,
    imageSrc: String
  },
  computed: {
    ...mapGetters({
      theme: GENERAL_CONSTS.getters.theme
    })
  },
  data() {
    return {
      ThemeEnum
    }
  }
}
</script>

<style lang="scss" scoped>
.card-info {
  $component-class: &;
  &--designer {
    display: grid;
    grid-template-areas: 'image title' 'image author' '. additional-info';
    grid-template-columns: rem(50px) auto;
    grid-column-gap: rem(15px);

    #{$component-class} {
      &__image-container {
        grid-area: image;
        margin: 0;
      }
      &__title-wrapper {
        grid-area: title;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
      }
      &__text {
        &--title {
          margin-right: rem(5px);
        }

        &--author {
          grid-area: author;
        }
      }

      &__additional-info-container {
        grid-area: additional-info;
      }
    }
  }
}
</style>
