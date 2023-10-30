import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

// export const useLevelStore = defineStore("level", () => {
//   const levels = ["countdown", "welcome", "basic-quiz", "fantasy-welcome", "fantasy-quiz", "final-riddle"];

//   const counter = ref(0);

//   function increment() {
//     counter.value++
//   }

//   function getLevel() {
//     return levels[counter.value]
//   }

//   return { getLevel, increment }
// })
