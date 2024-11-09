<template>
  <app-button
    class="btn-copy-style"
    :light="props.lightModeBtn"
    type="button"
    variant="outline"
  >
    {{ textForClipboard }}
  </app-button>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: null
  },
  textForClipboard: {
    type: [String],
    default: ''
  },
  lightModeBtn: Boolean
})
</script>
