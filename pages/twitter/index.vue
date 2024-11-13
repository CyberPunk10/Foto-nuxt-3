<template>
  <div>
    <MainSection title="home" :loading="loading">
      <TweetForm v-if="user" :user="user" />
    </MainSection>
  </div>
</template>

<script setup>
import TweetForm from '~~/components/Twitter/tweet/form/TweetForm.vue'
import MainSection from '~/components/Twitter/MainSection.vue';

definePageMeta({
  middleware: 'auth',
  layout: 'twitter'
})

const { useAuthUser, useAuthLoading } = useAuth()
const user = useAuthUser()
const isAuthLoading = useAuthLoading()

const loadingMainSection = ref(false);

const loading = computed(() => isAuthLoading.value || loadingMainSection.value);

</script>

<style lang="scss">

</style>
