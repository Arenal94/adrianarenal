<template>
  <section class="developer-theme">
    <header class="developer-theme__header">
      <ul class="developer-theme__header-breadcumb">
        <li class="developer-theme__header-breadcumb-item">
          <p class="developer-theme__text developer-theme__text--breadcumb">
            <span>icon</span>adrianarenal
          </p>
        </li>
      </ul>
    </header>
    <nuxt class="developer-theme__content scroll--y" />
    <nav class="developer-theme__project-tools-bar">
      <div>
        <p><span>carpeta</span> 1: Project</p>
      </div>
    </nav>
    <aside class="developer-theme__project scroll">
      <p>
        sadadsadasddsadsadsddasadsasdasasdasasdadsadsassdbdsakdsadbaasdsadsadsdadssaddsadsadsadsadsaadsdasdsasad
      </p>
    </aside>
    <section class="developer-theme__tools">
      <header class="developer-theme__tools-header">
        <p>Selected tab name:</p>
        <ul class="developer-theme__tools-tabs">
          <li>local <span>X</span></li>
        </ul>
      </header>
      <main class="developer-theme__tools-content"></main>
    </section>
    <nav class="developer-theme__tools-bar">
      Tools bar
    </nav>
    <footer class="developer-theme__footer">
      <span>Adrian Arenal © {{ new Date().getFullYear() }}</span>
      <social-media-list class="developer-theme__social-media-list" />
    </footer>
  </section>
</template>
<script lang="ts">
import SocialMediaList from '~/components/social-media-list.component.vue'

export default {
  name: 'developer-theme',
  components: {
    SocialMediaList
  }
}
</script>

<style lang="scss">
.developer-theme {
  @import 'assets/scss/developer/styles';
  display: grid;
  grid-template-areas:
    'header header header header'
    'project-tools-bar project content content'
    'project-tools-bar tools tools tools'
    'tools-bar tools-bar tools-bar tools-bar'
    'footer footer footer footer';
  grid-auto-rows: rem(30px) auto rem(200px) rem(30px) rem(30px);
  grid-auto-columns: rem(30px) auto auto auto;
  height: 100vh;
  font-family: $font-family--primary;
  font-size: $font-size--extra-small;
  color: $primary-color;
  background-color: $on-primary-color;

  &__header {
    grid-area: header;
    border-bottom: 0.25px solid $grey--8;
  }

  &__content {
    grid-area: content;
    background-color: $grey--9;
  }

  &__project {
    grid-area: project;
    display: flex;
    width: rem(295px);
    border-right: 0.25px solid $grey--8;
  }

  &__project-tools-bar {
    grid-area: project-tools-bar;
    writing-mode: tb-rl;
    border-left: 0.25px solid $grey--8;
    transform: rotate(-180deg);
  }

  &__tools {
    grid-area: tools;
    display: flex;
    flex-direction: column;
    border-top: 0.25px solid $grey--8;
  }

  &__tools-content {
    flex-grow: 1;
    background-color: $grey--9;
  }

  &__tools-bar {
    grid-area: tools-bar;
    border-top: 0.25px solid $grey--8;
  }

  &__footer {
    grid-area: footer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: rem(5px) rem(10px);
    border-top: 0.25px solid $grey--8;
  }

  &__social-media-list {
    font-size: $font-size--regular;
  }
}
</style>
