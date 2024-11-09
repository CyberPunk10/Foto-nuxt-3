<template>
  <span
    class="svg-icon"
    :class="originSize ? '--origin-size' : ''"
    v-html="icon"
  />
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    default: ''
  },
  originSize: Boolean
})
</script>

<style lang="scss">
.svg-icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:not(.--origin-size) {
    svg {
      width: 1em;
      height: 1em;
    }
  }

  * {
    transition: fill 0.3s;
  }
}
</style>
