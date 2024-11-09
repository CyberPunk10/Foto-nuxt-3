<template>
  <div>
    <NuxtLayout>
      darkMode: {{ darkMode }}
      <client-only>
        <LoadingPage v-if="isAuthLoading" />
      </client-only>

      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import LoadingPage from '~/components/LoadingPage.vue'

const { initAuth, useAuthLoading } = useAuth()
const isAuthLoading = useAuthLoading()

onBeforeMount(() => {
  initAuth()
})

const colorMode = useColorMode();
const darkMode = computed(() => colorMode.preference === 'dark')
</script>
