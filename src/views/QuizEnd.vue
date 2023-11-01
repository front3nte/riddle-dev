<script setup lang="ts">
import router from '@/router'
import { useLevelStore } from '../stores/quiz'
import { onMounted } from 'vue'
import ParchmentText from '../components/ParchmentText.vue'

const levelStore = useLevelStore()
if (!levelStore.reached('end-quiz') && !import.meta.env.VITE_SKIP_ALLOWED) {
  router.push('/final-riddle')
}

onMounted(() => {
  document.body.classList.remove(...levelStore.levels, 'start')
  document.body.classList.add('quiz-end', 'fantasy-quiz')
})

const geoAnswer = import.meta.env.VITE_GEO_ANSWER
</script>

<template>
  <main>
    <ParchmentText :fantasy="true">
      <h1>Fast geschafft!</h1>
      <p>
        <strong>{{ geoAnswer }} ist richtig! 🎖🧙‍♀️</strong>
      </p>
      <p>
        Erklimmet nun die Anhöhen der Schmiede und spürt die gefallenen Ahnen des Waldes unter euren
        Füßen. Wo das Tageslicht sich sanft im Horizont bettet wird der Thymian euch den Weg zum
        kalten Metalle weisen.
      </p>
    </ParchmentText>
  </main>
</template>

<style>
strong {
  font-weight: bold;
}
</style>
