<template>
  <div>
    <h1>Protected page</h1>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})
</script>
