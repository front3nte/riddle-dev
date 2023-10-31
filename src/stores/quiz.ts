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
    document.body.classList.remove(...levels)
    document.body.classList.add(level.value)

    const index = levels.indexOf(level.value)

    if (index > 0) {
      router.push({ name: newLevel })
    }

    document.body.classList.toggle('start', index <= levels.indexOf('quiz'))
  }

  function reached(searchLevel: string) {
    const index = levels.indexOf(level.value)
    const searchIndex = levels.indexOf(searchLevel)
    return searchIndex <= index
  }

  return { increment, level, reached, set }
})
