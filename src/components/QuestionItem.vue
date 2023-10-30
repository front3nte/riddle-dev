<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useLevelStore, useQuizStore } from '../stores/quiz'

const props = defineProps({
  question: String,
  answer: String,
  questionCount: Number
})

const quizStore = useQuizStore()
const levelStore = useLevelStore()
const formState = reactive({ hasError: false, success: false })

const input = ref(null)

let givenAnswer: String

function submit() {
  if (props.answer === givenAnswer) {
    formState.success = true
    setTimeout(() => {
      formState.success = false
      quizStore.increment()
      if (props.questionCount && quizStore.count >= props.questionCount) {
        quizStore.reset();
        levelStore.increment();
      }
    }, 3000)
  } else {
    formState.hasError = true
    setTimeout(() => {
      formState.hasError = false
    }, 1000)
  }
}
</script>

<template>
  <p v-if="formState.success === true">Richtig! 🥳 Bewahrt die Antwort gut auf...</p>
  <form v-else @submit.prevent="submit">
    <p v-html="props.question"></p>
    <input
      placeholder="Deine Antwort"
      ref="input"
      type="text"
      class="answer"
      v-model="givenAnswer"
      :class="{ error: formState.hasError }"
    />
  </form>
</template>

<style lang="scss">
@keyframes shake {
  from {
    transform: translateX(-2px);
  }
  to {
    transform: translateX(2px);
  }
}

input {
  padding: 15px;
  border-radius: 4px;
  border: none;
  outline: 2px solid darkslategrey;
  font-size: 22px;
  margin-top: 10px;
  color: white;
  background: hsla(0.5turn, 0%, 50%, 0.8);
  font-family: 'Gentium Book Plus', 'Times New Roman', 'Times New Roman', Times, serif;

  &.error {
    outline: 2px red solid;
    animation: shake 100ms infinite;
  }
}
</style>
