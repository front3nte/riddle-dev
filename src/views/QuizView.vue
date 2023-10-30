<script setup lang="ts">
import router from '@/router'
import QuizApp from '../components/QuizApp.vue'
import { useLevelStore } from '../stores/quiz'

const levelStore = useLevelStore()
if (!levelStore.reached('basic-quiz')) {
  router.push('/')
}
</script>

<template>
  <main>
    <QuizApp />
  </main>
</template>
