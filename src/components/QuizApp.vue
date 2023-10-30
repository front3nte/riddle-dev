<script setup lang="ts">
document.body.classList.remove('start')
import QuestionItem from './QuestionItem.vue'
import { useQuizStore } from '../stores/quiz'

const store = useQuizStore()

const quizQuestions = [
  {
    q: 'Was ist die erste Ziffer von Jasmins Durchwahl?',
    a: '8'
  },
  {
    q: 'Wann hat Antonio auf seiner Tastatur einen echten Bug 🐞 gefunden?',
    a: '15.12.2012'
  },
  {
    q: 'Wann hat Daniel davon berichtet, dass eine Theme-Erstellerin Hühner, Feuer und Lamas in die IDE zaubert?',
    a: '30.06.2021'
  }
]
</script>

<template>
  <h1>Naechstes Raetsel</h1>
  <template v-for="(item, index) in quizQuestions" :key="`test-${index}`">
    <QuestionItem v-if="store.count == index" :question="item.q" :answer="item.a"/>
  </template>
</template>
