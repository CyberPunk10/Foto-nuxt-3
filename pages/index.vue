<template>
  <div class="bg-gray-50 min-h-screen">
    <div class="flex h-screen">
      <div class="relative flex-1 w-0 lg:block">
        <img
          src="https://images.unsplash.com/photo-1598078412711-93b01b0fb206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          alt=""
          class="absolute inset-0 object-cover w-full h-full"
        >
      </div>
      <div class="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <TweetForm v-if="user" :user="user" />

        <div class="flex items-center w-full h-full max-w-sm mx-auto">
          <AuthForm />
        </div>
      </div>
    </div>

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
import AuthForm from '~~/components/Auth/AuthForm.vue';
import TweetForm from '~~/components/tweet/form/TweetForm.vue';

const { posts } = await $fetch('/api/posts');
const { useAuthUser } = useAuth();
const user = useAuthUser();
</script>
