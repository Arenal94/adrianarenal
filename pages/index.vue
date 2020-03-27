<template>
  <div class="content">
    <span @click="setSelectedLayout('default')">Default </span>
    <span @click="setSelectedLayout('developer')">Developer </span>
    <h1>h1 title</h1>
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

export default {
  layout({ app }) {
    return app.store.getters[GENERAL_CONSTS.getters.selectedLayout]
  },
  computed: {
    ...mapGetters({
      selectedLayout: GENERAL_CONSTS.getters.selectedLayout
    })
  },
  watch: {
    selectedLayout() {
      window.$nuxt.setLayout(this.selectedLayout)
    }
  },
  methods: {
    ...mapMutations({
      setSelectedLayout: GENERAL_CONSTS.mutations.setSelectedLayout
    })
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
