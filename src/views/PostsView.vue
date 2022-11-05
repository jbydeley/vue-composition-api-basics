<template>
  <main class="about">
    <h1 ref="appTitleRef">Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <RouterLink :to="`/postDetail/${post.id}`">{{post.title}}</RouterLink>
      </li>
    </ul>
    <input type="text" v-autofocus>

    <div>
      <button class="counter-button" @click="increase(1)" :class="{ 'yellow': oddOrEven === 'odd' }">{{counterData.count}}</button>
    </div>
  </main>
</template>

<script setup>
import { vAutofocus } from '@/directives/vAutofocus'
import { onMounted, ref } from 'vue'
import {useCounter} from '@/use/useCounter'

const appTitleRef = ref(null)

onMounted(() => {
  console.log(appTitleRef.value.offsetWidth)
})

const posts = ref([
  {
    id: 'id1',
    title: 'Post 1'
  },
  {
    id: 'id2',
    title: 'Post 2'
  },
  {
    id: 'id3',
    title: 'Post 3'
  }
]);

const {counterData, increase, oddOrEven} = useCounter();
</script>

<style scoped>
ul {
  margin-bottom: 30px;
}

.counter-button {
  font-size: 60px;
  width: 100%;
  background-color: pink;
}

.yellow {
  background-color: yellow;
}
</style>