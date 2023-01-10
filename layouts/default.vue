<template>
  <div class="h-screen">
    <Navbar />
    <slot/>
  </div>
</template>

<script setup lang="ts">
import Navbar from '~/components/layout/Navbar.vue';

</script>

<style lang="sass">

</style>