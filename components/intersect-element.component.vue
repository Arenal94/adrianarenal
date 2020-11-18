<template>
  <div class="intersect-element">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: 'intersect-element',
  props: {
    root: Object,
    target: Object,
    options: Object
  },
  data: function() {
    return {
      observer: undefined
    }
  },
  mounted: function(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (!!entry && entry.isIntersecting) {
          this.$emit('intersect')
        }
      },
      { root: this.root, ...this.options }
    )
    this.observer.observe(this.target || this.$el)
  },
  destroyed: function(): void {
    this.observer.disconnect()
  }
}
</script>
