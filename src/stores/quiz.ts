import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLevelStore = defineStore('level', () => {
  const levels = [
    'countdown',
    // 'welcome',
    'basic-quiz',
    // 'fantasy-welcome',
    'fantasy-quiz',
    'final-riddle'
  ]

  const level = ref('countdown')
  set(level.value)

  function increment() {
    const index = levels.indexOf(level.value)
    set(levels[index + 1])
  }

  function set(newLevel: string) {
    level.value = newLevel
    document.body.classList.remove(...levels)
    document.body.classList.add(level.value)

    const index = levels.indexOf(level.value)
    document.body.classList.toggle('start', index < levels.indexOf('fantasy-welcome'))
  }

  function reached(searchLevel: string) {
    const index = levels.indexOf(level.value)
    const searchIndex = levels.indexOf(searchLevel)
    console.log(index, searchIndex)
    return searchIndex <= index
  }

  return { increment, level, reached, set }
})

// export const useQuizStore = defineStore('quizIndex', () => {
//   const count = ref(0)

//   function reset() {
//     count.value = 0;
//   }

//   function increment() {
//     count.value++
//   }

//   return { count, increment, reset }
// })
