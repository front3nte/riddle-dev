import { defineStore } from 'pinia'
import { ref } from 'vue'
import router from '../router'

export const useLevelStore = defineStore('level', () => {
  const levels = ['countdown', 'quiz', 'fantasy-quiz', 'final-riddle']

  const level = ref('countdown')
  set(level.value)

  function increment() {
    const index = levels.indexOf(level.value)
    set(levels[index + 1])
  }

  function set(newLevel: string) {
    if (!levels.includes(newLevel)) {
      return
    }

    level.value = newLevel

    const index = levels.indexOf(level.value)

    if (index > 0) {
      router.push({ name: newLevel })
    }
  }

  function reached(searchLevel: string) {
    const index = levels.indexOf(level.value)
    const searchIndex = levels.indexOf(searchLevel)
    return searchIndex <= index
  }

  return { increment, level, reached, set, levels }
})
