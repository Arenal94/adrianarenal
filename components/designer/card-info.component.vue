<template>
  <div class="card-info">
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
</template>

<script lang="ts">
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
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/designer/styles';
.card-info {
  display: grid;
  grid-template-areas: 'image title' 'image author' '. additional-info';
  grid-template-columns: rem(50px) auto;
  grid-column-gap: rem(15px);

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
</style>
