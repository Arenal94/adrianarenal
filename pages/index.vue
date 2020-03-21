<template>
  <div class="content">
    <span @click="setSelectedLayout('default')">Default </span>
    <span @click="setSelectedLayout('developer')">Developer </span>
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
