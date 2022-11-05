<template>
  <main class="home">
    <h1>{{counterData.title}}</h1>
    <div>
      <button @click="decrease(1)" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increase(1)" class="btn">+</button>
      <p>Number is {{ oddOrEven }}</p>
    </div>
  </main>
</template>

<script setup> 
  import {useCounter} from '@/use/useCounter'
import { onMounted } from 'vue';

  const {counterData, increase, decrease, oddOrEven} = useCounter();

  onMounted(() => {
    counterData.count += 1;
  })
</script>

<style>
.home {
  text-align:  center;
  padding: 20px;
}

.btn, .counter {
  font-size: 40px;
  margin:  10px;
}

.edit {
  margin-top: 60px;
}
</style>