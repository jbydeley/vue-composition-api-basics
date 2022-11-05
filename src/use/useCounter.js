import { onMounted, computed, nextTick, reactive, readonly, watch } from "vue";
  const counterData = reactive({
    count: 0,
    title: 'My Counter'
  });

export function useCounter() {

  watch(() => counterData.count, (newCount) => {
    if(newCount === 20) {
      alert('Way to go! You made it to 20!!')
    }
  })

  const oddOrEven = computed(() => counterData.count % 2 === 0 ? 'even' : 'odd')
  const increase = async (amount) => {
    counterData.count += amount
    await nextTick();
    console.log('do something when counter has updated')
  }

  const decrease = amount => {
    counterData.count -= amount
  }

  onMounted(() => {
    console.log('Do stuff related to Counter')
  })

  return {
    counterData: readonly(counterData),
    increase,
    decrease,
    oddOrEven
  }
}