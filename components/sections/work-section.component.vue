<template>
  <section class="work-section">
    <h2>Work experience</h2>
    <card-info
      class="work-section__card-info"
      title="Web programmer"
      date="2015 - 2016"
      author="Capgemini España"
      :imageSrc="require('../../assets/media/images/capgemini.jpeg')"
    >
      <p>Developing and maintaining a SPA application (mainly backend).</p>
      <p>Technologies involved</p>
      <ul>
        <li>SPA: Java + Spring boot, SQL, Javascript, CSS, HTML</li>
      </ul>
    </card-info>

    <card-info
      class="work-section__card-info"
      title="Frontend Engineer"
      date="2018++"
      author="Empathy.co"
      :imageSrc="require('../../assets/media/images/empathy.jpeg')"
    >
      <p>
        Starting as an internship, I developed the
        <a href="https://www.empathy.co/" target="_blank"
          >corporative website</a
        >
        . After that, I joined the honorable 'Play' team.
      </p>
      <p>Technologies involved</p>
      <ul>
        <li>
          SPAs: VueJS, Typescript + ES6, Webpack, SASS, HTML, NODE
        </li>
        <li>
          Static website: Jekyll, NuxtJS, NetlifyCMS
        </li>
        <li>
          Visualisations: D3.js + Typescript
        </li>
      </ul>
    </card-info>
  </section>
</template>

<script lang="ts">
import CardInfo from '~/components/designer/card-info.component.vue'
export default {
  name: 'work-section',
  components: {
    CardInfo
  }
}
</script>

<style lang="scss" scoped>
.work-section {
  &__card-info {
    margin-bottom: rem(20px);
  }
}
</style>
