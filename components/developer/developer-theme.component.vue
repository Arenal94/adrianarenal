<template>
  <section class="developer-theme">
    <developer-header class="developer-theme__header" />
    <nuxt class="developer-theme__content scroll--y" />
    <nav class="developer-theme__project-tools-bar">
      <div
        class="developer-theme__tab developer-theme__tab--project"
        @click="showProject ? (showProject = false) : (showProject = true)"
        :class="{ 'developer-theme__tab--selected': showProject }"
      >
        <span
          class="developer-theme__icon developer-theme__icon--folder adricon"
          >folder</span
        >
        <span>Project</span>
      </div>
    </nav>
    <developer-project
      class="developer-theme__project"
      v-if="showProject"
      @hide="showProject = false"
    />
    <developer-tools class="developer-theme__tools" />
    <developer-tools-bar class="developer-theme__tools-bar" />
    <footer class="developer-theme__footer">
      <span>Adrian Arenal © {{ new Date().getFullYear() }}</span>
      <social-media-list class="developer-theme__social-media-list" />
    </footer>
  </section>
</template>
<script lang="ts">
import SocialMediaList from '~/components/social-media-list.component.vue'
import DeveloperToolsBar from '~/components/developer/developer-tools-bar.component.vue'
import DeveloperTools from '~/components/developer/developer-tools.component.vue'
import DeveloperProject from '~/components/developer/developer-project.component.vue'
import Logo from '~/components/logo.component.vue'
import DeveloperHeader from '~/components/developer/developer-header.component.vue'

export default {
  name: 'developer-theme',
  components: {
    DeveloperHeader,
    Logo,
    DeveloperProject,
    DeveloperTools,
    DeveloperToolsBar,
    SocialMediaList
  },
  data() {
    return {
      showProject: true
    }
  }
}
</script>

<style lang="scss">
.developer-theme {
  @import 'assets/scss/developer/styles';
  display: grid;
  grid-template-areas:
    'header header header'
    'project-tools-bar project content'
    'project-tools-bar tools tools'
    'tools-bar tools-bar tools-bar'
    'footer footer footer';
  grid-auto-rows: rem(30px) auto rem(200px) rem(30px) rem(30px);
  grid-auto-columns: rem(30px) auto 1fr;
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
    width: rem(270px);
    border-right: 0.25px solid $grey--8;
  }

  &__project-tools-bar {
    grid-area: project-tools-bar;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    writing-mode: tb-rl;
    border-left: 0.25px solid $grey--8;
    transform: rotate(-180deg);
  }

  &__tab {
    &--project {
      display: flex;
      align-items: center;
      padding: rem(10px) rem(5px);
    }
    &--selected {
      background-color: $grey--8;
    }
  }

  &__icon {
    &--folder {
      margin-bottom: rem(5px);
      font-size: $font-size--large;
      transform: rotate(90deg);
    }
  }

  &__tools {
    grid-area: tools;
    border-top: 0.25px solid $grey--8;
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
