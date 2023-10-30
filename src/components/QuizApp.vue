<script setup lang="ts">
document.body.classList.remove('start')
import QuestionItem from './QuestionItem.vue'
import { useQuizStore } from '../stores/quiz'

const store = useQuizStore()
</script>

<template>
  <h1>hello quiz</h1>
  <QuestionItem
    v-if="store.count == 0"
    question="Das ist eine Frage"
    answer="Hier steht die Antwort"
  />
  <QuestionItem
    v-if="store.count == 1"
    question="Das ist eine andere Frage"
    answer="Hier steht die nächste Antwort"
  />
  <QuestionItem
    v-if="store.count == 2"
    question="Das ist eine ganz andere Frage"
    answer="Hier steht noch eine Antwort"
  />
</template>
