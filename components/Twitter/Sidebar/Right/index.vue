<template>
  <div class="h-screen flex flex-col">
    <!-- Search bar -->
     <div class="relative m-2">
        <div class="absolute flex items-center h-full pl-4 text-gray-600 cursor-pointer">
          <div class="w-6 h-6">
            <MagnifyingGlassIcon @click="handleSearch" />
          </div>
        </div>
        <input
          v-model="searchModel"
          type="text"
          class="flex items-center w-full pl-12 text-sm font-normal text-black dark:text-gray-100 bg-gray-200 border border-gray-200 rounded-full shadow dark:bg-dim-400 dark:border-dim-400 focus:bg-gray-100 dark:focus:bg-dim-900 focus:outline-none focus:border focus:border-blue-200 h-9"
          placeholder="Search tweet"
        >
     </div>

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

    <footer>
      <ul class="mx-2 my-4 text-xs text-gray-500">
        <li class="inline-block mx-2">
          <a
            href="#"
            class="hover:underline"
            @click.prevent="handleToggleDarkMode"
          >Dark mode</a>
        </li>
        <li class="inline-block mx-2">
          <a href="#" class="hover:underline">Privacy Policy</a>
        </li>
        <li class="inline-block mx-2">
          <a href="#" class="hover:underline">Cookie Policy</a>
        </li>
        <li class="inline-block mx-2">
          <a href="#" class="hover:underline">Accessability</a>
        </li>
        <li class="inline-block mx-2">
          <a href="#" class="hover:underline">Ads info</a>
        </li>
        <li class="inline-block mx-2">
          <a href="#" class="hover:underline">More</a>
        </li>
        <li class="inline-block mx-2">
          @ 2022 Twitter, Inc
        </li>
      </ul>
    </footer>
  </div>
</template>

<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import PreviewCard from '~/components/Twitter/Sidebar/Right/PreviewCard/index.vue'
import PreviewCardItem from '~/components/Twitter/Sidebar/Right/PreviewCard/Item.vue'

const searchModel = ref('')

function handleSearch() {
  useRouter().push({
    path: '/twitter/search',
    query: {
      q: searchModel.value
    }
  })
}

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

const colorMode = useColorMode();
const darkMode = computed(() => colorMode.preference === 'dark')

function handleToggleDarkMode() {
  useColorMode().preference = darkMode.value ? 'light' : 'dark'
}

</script>