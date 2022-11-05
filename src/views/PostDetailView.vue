<template>
  <main class="post-detail">
    <h1>This is a post</h1>
    <p>Display the content of post with ID of {{ $route.params.id }}</p>
    <p>
      <button @click="showPostId">Show Post ID</button>
    </p>
    <p><RouterLink to="/posts">&lt; Back </RouterLink></p>
  </main>
</template>

<script setup>
  import {vAutofocus} from '@/directives/vAutofocus'
  import { useRoute, useRouter } from 'vue-router';

  const route = useRoute();
  const router = useRouter();

  const showPostId = () => {
    router.push({ name: 'postDetail', params: { id: 5}})  
  }


</script>