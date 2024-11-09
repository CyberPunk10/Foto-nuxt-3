<template>
  <div class="h-screen flex flex-col">
    <!-- Preview Card: What's happaning -->
    <PreviewCard title="What's happening">
      <PreviewCardItem v-for="item in whatsHappeningItems" :key="item.title">
        <div>
          <h2 class="font-bold text-gray-800 text-md dark:text-white">{{ item.title }}</h2>

          <p class="text-gray-400 text-xs">
            {{ item.count }}
          </p>
        </div>
      </PreviewCardItem>
    </PreviewCard>

    <!-- Preview Card: Who to follow -->
    <PreviewCard title="Who to follow">
      <PreviewCardItem v-for="item in whoToFollowItems" :key="item.title">
        <div class="flex flex-row  items-center justify-between p-2">
          <div class="flex flex-row">
              <img :src="item.image" :alt="item.name" class="w-10 h-10 rounded-full">

              <div class="flex flex-col ml-2">
                <h1 class="text-sm font-bold text-gray-900 dark:text-white">
                  {{ item.name }}
                </h1>
                <p class="text-xs text-gray-400">
                  {{ item.handle }}
                </p>
              </div>
          </div>

          <div class="flex h-full">
            <button class="px-4 py-2 font-bold text-xs text-white dark:text-black bg-black dark:bg-white rounded-full">
              Follow
            </button>
          </div>
        </div>
      </PreviewCardItem>
    </PreviewCard>
  </div>
</template>

<script setup>
import PreviewCard from '~/components/Twitter/Sidebar/Right/PreviewCard/index.vue'
import PreviewCardItem from '~/components/Twitter/Sidebar/Right/PreviewCard/Item.vue'

// const { defaultTransition } = useTailwindConfig()

const whatsHappeningItems = ref([
  {
    title: '#SpaceX',
    count: '18.8k Tweets',
  },
  {
    title: '#CodingIs',
    count: '8.8k Tweets',
  },
  {
    title: '#artforall',
    count: '1.8k Tweets',
  },
])

const whoToFollowItems = ref([
  {
    name: 'Joe Biden',
    handle: '@joeBiden',
    image: 'https://picsum.photos/200/200'
  },
  {
    name: 'Joe Biden',
    handle: '@joeBiden',
    image: 'https://picsum.photos/200/200'
  },
  {
    name: 'Joe Biden',
    handle: '@joeBiden',
    image: 'https://picsum.photos/200/200'
  },
])

</script>