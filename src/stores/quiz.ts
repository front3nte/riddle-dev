import { defineStore } from 'pinia'
import { ref } from 'vue'
import router from '../router'

export const useLevelStore = defineStore('level', () => {
  const levels = ['countdown', 'quiz', 'fantasy-quiz', 'final-riddle']

  const storedLevel = localStorage.getItem('level')
  const storedQuest = localStorage.getItem('quest')

  const level = ref(storedLevel || 'countdown')
  const quest = ref(storedQuest ? Number.parseInt(storedQuest) : 0)

  set(level.value)

  function resetQuest() {
    quest.value = 0
    localStorage.setItem('quest', String(quest.value))
  }

  function nextQuest() {
    quest.value++
    localStorage.setItem('quest', String(quest.value))
  }

  function reachedQuest(givenQuest: number) {
    return givenQuest >= quest.value
  }

  function increment() {
    const index = levels.indexOf(level.value)
    set(levels[index + 1])
    resetQuest()
  }

  function set(newLevel: string) {
    if (!levels.includes(newLevel)) {
      return
    }

    level.value = newLevel
    localStorage.setItem('level', level.value)

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

  return { increment, level, reached, set, levels, quest, resetQuest, nextQuest, reachedQuest }
})
