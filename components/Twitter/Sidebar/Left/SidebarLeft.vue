<template>
  <div class="h-screen flex flex-col">
    <div
      class="p-2 my-2 hover:bg-blue-50 rounded-full w-min dark:hover:bg-white/20"
      :class="defaultTransition"
    >
      <nuxt-link to="/twitter">
        <div class="w-8 h-8">
          <LogoTwitter />
        </div>
      </nuxt-link>
    </div>

    <div class="mt-2 space-y-3">
      <SidebarLeftTab
        v-for="tab in tabs"
        :key="tab.name"
        :active="tab.active"
      >
        <template #icon>
          <component :is="tab.icon" :key="tab.name" />
        </template>
        <template #name>
          {{ tab.name }}
        </template>
      </SidebarLeftTab>

      <div class="hidden xl:block">
        <UIButton
          size="lg"
          liquid
          @on-click="emits('onTweet')"
        >
          <span class="font-bold">
            Tweet
          </span>
        </UIButton>
      </div>

      <div class="block xl:hidden">
        <UIButton>
          <div class="w-6 h-6 font-bold">
            <PencilIcon />
          </div>
        </UIButton>
      </div>
    </div>

    <div
      class="flex flex-row items-center justify-center px-2 py-2 mx-auto mt-auto mb-5 rounded-full cursor-pointer w-14 xl:w-full hover:bg-gray-100 dark:hover:bg-dim-800"
      :class="defaultTransition"
      @click="emits('onLogout')"
    >
      <div class="flex flex-row">
        <img
          :src="props.user?.profileImage"
          alt=""
          class="w-1- h-10 rounded-full"
        >
        <div class="flex-col hidden ml-2 xl:block">
          <span class="text-sm font-bold text-gray-800 dark:text-white">
            {{ props.user?.name }}
          </span>
          <p class="text-sm text-gray-400">
            {{ props.user?.handle }}
          </p>
        </div>
      </div>

      <div class="hidden ml-auto xl:block">
        <div class="w-6 h-6">
          <ChevronDownIcon />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { HomeIcon } from '@heroicons/vue/24/solid'
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  DocumentTextIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
  PencilIcon,
  ChevronDownIcon,
} from '@heroicons/vue/24/outline'
import UIButton from '~/components/UI/UIButton.vue';
import LogoTwitter from '~/components/Twitter/Logo/Twitter.vue'
import SidebarLeftTab from '~/components/Twitter/Sidebar/Left/Tab.vue'

const emits = defineEmits(['onTweet', 'onLogout']);

const props = defineProps({
  user: {
    type: Object,
    required: true,
  }
})

const { defaultTransition } = useTailwindConfig()

const tabs = [
  { icon: HomeIcon, name: 'HomeIcon', active: true },
  { icon: HashtagIcon, name: 'Explore' },
  { icon: BellIcon, name: 'Notificaions' },
  { icon: InboxIcon, name: 'Messages' },
  { icon: BookmarkIcon, name: 'Bookmark' },
  { icon: DocumentTextIcon, name: 'List' },
  { icon: UserIcon, name: 'Profile' },
  { icon: EllipsisHorizontalCircleIcon, name: 'More' },
]

</script>