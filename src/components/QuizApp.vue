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
    question="Was ist die erste Ziffer von Jasmins Durchwahl?"
    answer="8"
  />
  <QuestionItem
    v-if="store.count == 1"
    question="Wann hat Antonio auf seiner Tastatur einen echten Bug 🐞 gefunden?"
    answer="15.12.2012"
  />
  <QuestionItem
    v-if="store.count == 2"
    question="Wann hat Daniel davon berichtet, dass eine Theme-Erstellerin Hühner, Feuer und Lamas in die IDE zaubert?"
    answer="30.06.2021"
  />
</template>
