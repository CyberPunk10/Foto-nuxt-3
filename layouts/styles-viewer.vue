<template>
  <div class="styles-viewer">
    <NuxtPage />
    <!-- TODO: убрать: || true -->
    <fast-dev v-if="$config.appEnv === 'dev' || $config.appEnv === 'prod_qa' || true" />
  </div>
</template>

<script setup lang="ts">
import FastDev from '~/components/dev/FastDev.vue';

useHead({
  htmlAttrs: {
    class: '--layout-styles-viewer',
  },
});
</script>

<!-- <style lang="scss">
html.--layout-styles-viewer {
}
</style> -->
