<template>
  <aside class="developer-project scroll">
    <header class="developer-project__header">
      <span>Project</span>
      <span
        class="developer-project__icon developer-project__icon--minus adricon"
        @click="$emit('hide')"
        >minus</span
      >
    </header>
    <div>
      <div
        class="developer-project__option developer-project__option--project-name"
      >
        <span
          class="developer-project__icon developer-project__icon--arrow-down adricon"
        >
          arrowdown
        </span>
        <span
          class="developer-project__icon developer-project__icon--folder adricon"
        >
          folder
        </span>
        adrianarenal
      </div>
      <div
        class="developer-project__option developer-project__option--section"
        v-for="sect in Object.values(SectionEnum)"
        :class="{ 'developer-project__option--selected': sect === section }"
      >
        <span
          class="developer-project__icon developer-project__icon--file adricon"
        >
          file
        </span>
        {{ sect }}.txt
      </div>
    </div>
  </aside>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
import { GENERAL_CONSTS } from '~/models/store/general/general.consts'
import { SectionEnum } from '~/enums'

export default {
  name: 'developer-project',
  computed: {
    ...mapGetters({
      section: GENERAL_CONSTS.getters.section
    })
  },
  data: function() {
    return {
      SectionEnum
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/developer/styles';

.developer-project {
  display: flex;
  flex-direction: column;

  &__header {
    display: flex;
    justify-content: space-between;
    padding: rem(8px);
    border-bottom: 0.25px solid $grey--8;
  }

  &__icon {
    &--minus {
      font-size: $font-size--regular;
      stroke-width: rem(1px);
      cursor: pointer;
    }
  }

  &__option {
    padding: rem(5px);

    &--section {
      padding-left: rem(25px);
    }
    &--selected {
      background-color: $color--dark-blue;
    }
  }
}
</style>
