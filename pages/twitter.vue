<template>
  <div>
    <MainSection title="home" :loading="loading">
      Content
    </MainSection>
  </div>
</template>

<script setup>
import MainSection from '~/components/Twitter/MainSection.vue';

definePageMeta({
  layout: 'twitter'
})

const loading = ref(true);

</script>

<style lang="css">

</style>
