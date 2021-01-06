<template>
  <section class="studies-section">
    <h2>Studies and Certificates</h2>

    <card-info
      class="studies-section__card-info"
      title="Degree in Computer Software Engineering"
      date="2012 - 2017"
      author="Universidad de Oviedo"
      :imageSrc="require('../../assets/media/images/uniovi.jpeg')"
    >
      <a
        href="https://www.sciencedirect.com/science/article/pii/S0167739X17317363?via%3Dihub"
        target="_blank"
      >
        Final degree project published in 'Elsevier' (17-01-2018)
      </a>
    </card-info>

    <card-info
      class="studies-section__card-info"
      title="Master in Web Engineering"
      date="2017 - 2019"
      author="Universidad de Oviedo"
      :imageSrc="require('../../assets/media/images/uniovi.jpeg')"
    />

    <card-info
      class="studies-section__card-info"
      title="FCE (First Certificate in English)"
      date="2018"
      author="Cambridge Assessment"
      :imageSrc="require('../../assets/media/images/cambridge.png')"
    />

    <card-info
      class="studies-section__card-info"
      title="Vue.js 3 Deep Dive Workshop"
      date="2020"
      author="Frontend Love"
      :imageSrc="require('../../assets/media/images/frontend-love.png')"
    />
  </section>
</template>

<script lang="ts">
import CardInfo from '~/components/designer/card-info.component.vue'
export default {
  name: 'studies-section',
  components: {
    CardInfo
  }
}
</script>

<style lang="scss" scoped>
.studies-section {
  &__card-info {
    margin-bottom: rem(30px);
  }
}
</style>
