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

  const counter = ref(0)

  function increment() {
    counter.value++
  }

  function getLevel() {
    return levels[counter.value]
  }

  return { getLevel, increment }
})

export const useQuizStore = defineStore('quizIndex', () => {
  const count = ref(0)

  function increment() {
    count.value++
  }

  return { count, increment }
})
