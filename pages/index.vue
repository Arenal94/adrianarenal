<template>
  <div class="content">
    <ul class="content__section-list">
      <li
        class="content__section-item"
        v-for="section in Object.values(SectionEnum)"
        @click="setContentSection(section)"
      >
        {{ section }}
      </li>
    </ul>
    <section v-if="isContentSectionVisible(SectionEnum.MAIN)">
      <h1>main title</h1>
      Estamos en la seccion de main
    </section>
    <section v-if="isContentSectionVisible(SectionEnum.WORK)">
      <h1>work title</h1>
      Estamos en la seccion de work
    </section>
    <section v-if="isContentSectionVisible(SectionEnum.STUDIES)">
      <h1>studies title</h1>
      Estamos en la seccion de studies
    </section>
    <section v-if="isContentSectionVisible(SectionEnum.HOBBIES)">
      <h1>hobbies title</h1>
      Estamos en la seccion de hobbies
    </section>
    <h2>h2 title</h2>
    <h3>h3 title</h3>
    <h4>h4 title</h4>
    <h5>h5 title</h5>
    <h6>h6 title</h6>
    <p>
      Lorem fistrum llevame al sircoo la caidita a peich torpedo está la cosa
      muy malar te va a hasé pupitaa. Ese que llega te voy a borrar el cerito
      diodenoo por la gloria de mi madre no te digo trigo por no llamarte
      Rodrigor benemeritaar. No puedor no te digo trigo por no llamarte Rodrigor
      amatomaa quietooor te va a hasé pupitaa al ataquerl caballo blanco caballo
      negroorl pecador caballo blanco caballo negroorl la caidita. Diodeno ese
      pedazo de jarl al ataquerl. Caballo blanco caballo negroorl pecador papaar
      papaar la caidita hasta luego Lucas va usté muy cargadoo hasta luego Lucas
      pecador. No puedor torpedo condemor torpedo jarl.
    </p>
    <p>
      Lorem fistrum llevame al sircoo la caidita a peich torpedo está la cosa
      muy malar te va a hasé pupitaa. Ese que llega te voy a borrar el cerito
      diodenoo por la gloria de mi madre no te digo trigo por no llamarte
      Rodrigor benemeritaar. No puedor no te digo trigo por no llamarte Rodrigor
      amatomaa quietooor te va a hasé pupitaa al ataquerl caballo blanco caballo
      negroorl pecador caballo blanco caballo negroorl la caidita. Diodeno ese
      pedazo de jarl al ataquerl. Caballo blanco caballo negroorl pecador papaar
      papaar la caidita hasta luego Lucas va usté muy cargadoo hasta luego Lucas
      pecador. No puedor torpedo condemor torpedo jarl.
    </p>
    <a>link</a>
    <blockquote>blockquote</blockquote>
    <ul>
      <li>
        item1
      </li>
      <li>
        item 2
        <ul>
          <li>item 2.1</li>
        </ul>
      </li>
      <li>item 3</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { mapMutations, mapGetters } from 'vuex'

import { GENERAL_CONSTS } from '~/models/store/general/general.consts'

import { ContentSectionEnum, ThemeEnum } from '~/enums'

export default {
  layout({ app }) {
    return app.store.getters[GENERAL_CONSTS.getters.theme]
  },
  computed: {
    ...mapGetters({
      theme: GENERAL_CONSTS.getters.theme,
      contentSection: GENERAL_CONSTS.getters.contentSection
    })
  },
  data() {
    return {
      SectionEnum: ContentSectionEnum
    }
  },
  watch: {
    theme() {
      window.$nuxt.setLayout(this.theme)
    }
  },
  methods: {
    ...mapMutations({
      setTheme: GENERAL_CONSTS.mutations.setTheme,
      setContentSection: GENERAL_CONSTS.mutations.setContentSection
    }),
    isContentSectionVisible(contentSection: ContentSectionEnum): boolean {
      return (
        this.theme === ThemeEnum.DESIGNER ||
        this.contentSection === contentSection
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
}

.test {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}
</style>
