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

    <div class="">
      <SidebarLeftTab v-for="tab in tabs" :key="tab.name" :active="tab.active">
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
} from '@heroicons/vue/24/outline'
import UIButton from '~~/components/UI/UIButton.vue';
import LogoTwitter from '~/components/Twitter/Logo/Twitter.vue'
import SidebarLeftTab from '~/components/Twitter/Sidebar/Left/Tab.vue'

const emits = defineEmits(['onTweet']);

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