<template>
  <div>
    <MainSection title="Search" :loading="loading">
      <ListFeed :tweets="searchTweets" />
    </MainSection>
  </div>
</template>

<script setup>
import MainSection from '~/components/Twitter/MainSection.vue';
import ListFeed from '~/components/Twitter/tweet/ListFeed.vue';

definePageMeta({
  layout: 'twitter'
})

useHead({
  title: 'Twitter | Search'
})

const { useAuthLoading } = useAuth()
const isAuthLoading = useAuthLoading()

const loadingListTweets = ref(false);

const loading = computed(() => isAuthLoading.value || loadingListTweets.value);

const { getTweets, useAllTweets } = useTweets()

const searchTweets = useAllTweets();

onBeforeMount(() => {
  loadTweets()
})

const searchQuery = computed(() => useRoute().query.q);

watch(() => useRoute().fullPath, () => {
  loadTweets()
});

async function loadTweets(ignoreLoading) {
  loadingListTweets.value = ignoreLoading ? false : true;

  const response = await getTweets({
    query: searchQuery.value,
  });

  searchTweets.value = response?.tweets ? response.tweets : [];

  loadingListTweets.value = false;
}

</script>

<!-- <style lang="scss">

</style> -->
