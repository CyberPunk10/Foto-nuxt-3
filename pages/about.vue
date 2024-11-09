<template>
  <div class="temp">
    <NuxtLink to="/">
      Main
    </NuxtLink>
    <NuxtWelcome />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'layout-navbar'
})
</script>
