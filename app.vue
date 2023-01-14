<template>
  <div>
    <NuxtLayout>
      <LoadingPage v-if="isAuthLoading"/>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import LoadingPage from '~/components/LoadingPage.vue';

const { initAuth, useAuthLoading } = useAuth();
const isAuthLoading = useAuthLoading();

onBeforeMount(() => {
  initAuth();
});
</script>