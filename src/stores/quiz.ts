import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLevelStore = defineStore('level', () => {
  const levels = [
    'countdown',
    'welcome',
    'basic-quiz',
    'fantasy-welcome',
    'fantasy-quiz',
    'final-riddle'
  ]

  const level = ref("countdown")

  function increment() {
    const index = levels.indexOf(level.value);
    level.value = levels[index+1]
  }

  function reached(searchLevel: string) {
    const index = levels.indexOf(level.value);
    const searchIndex = levels.indexOf(searchLevel);
    console.log(index, searchIndex);
    return searchIndex <= index;
  }

  return { increment, level, reached }
})

export const useQuizStore = defineStore('quizIndex', () => {
  const count = ref(0)

  function reset() {
    count.value = 0;
  }

  function increment() {
    count.value++
  }

  return { count, increment, reset }
})
