<template>
  <!--
    TODO: разобраться как подгружать иконки
    TODO: добавить $i18n
  -->
  <div class="bg-gray-50 min-h-screen">
    <div v-if="user" class="container mx-auto pt-8">
      <!-- <h1 class="font-bold text-3xl">Blog Posts</h1> -->
      <ul class="w-fit mt-8">
        <li
          v-for="post in posts"
          :key="post.id"
          class="p-2 border-b-2 border-indigo-400 hover:bg-indigo-400 hover:text-white hover:cursor-pointer"
        >
          <NuxtLink :to="'/posts/' + post.id">
            {{ post.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const { posts } = await $fetch('/api/posts')
const { useAuthUser } = useAuth()
const user = useAuthUser()
</script>
