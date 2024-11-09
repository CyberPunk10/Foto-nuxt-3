<template>
  <div class="h-screen">
    <LayoutNavbar />
    <slot />
    <!-- TODO: убрать: || true -->
    <fast-dev v-if="$config.appEnv === 'dev' || $config.appEnv === 'prod_qa' || true" />
  </div>
</template>

<script setup lang="ts">
import FastDev from '~/components/dev/FastDev.vue';
import LayoutNavbar from '~~/components/layout/LayoutNavbar.vue'

</script>

<style lang="scss">

</style>
