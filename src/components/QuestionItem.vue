<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useLevelStore } from '../stores/quiz'
import ParchmentText from './ParchmentText.vue'
import CelebrationAnimation from './CelebrationAnimation.vue';

const emit = defineEmits(['next'])

const props = defineProps({
  level: String,
  question: String,
  answer: String,
  questionCount: Number,
  displayQuest: Number,
  reachedQuest: Number,
  fantasy: Boolean
})

const levelStore = useLevelStore()
const formState = reactive({ hasError: false, success: false })

const input = ref(null)

const reachedNextLevel =
  levelStore.levels.indexOf(levelStore.level) > levelStore.levels.indexOf(props.level)
const reachedLevelAndQuest =
  (levelStore.reached(props.level) && props.reachedQuest > props.displayQuest) || reachedNextLevel

let givenAnswer: String = reachedLevelAndQuest ? props.answer : ''

onMounted(() => {
  input.value.focus()
})

function submit() {
  if (props.answer === givenAnswer || import.meta.env.VITE_SKIP_ALLOWED === 'true') {
    formState.success = true
    document.body.classList.add('success')
    setTimeout(
      () => {
        formState.success = false
        emit('next')
        document.body.classList.remove('success')
      },
      import.meta.env.VITE_SUCCESS_DURATION || 3000
    )
  } else {
    formState.hasError = true
    setTimeout(() => {
      formState.hasError = false
    }, 1000)
  }
}
</script>

<template>
  <ParchmentText :fantasy="props.fantasy">
    <div v-if="formState.success === true">
      <p>
        Richtig! {{ props.level === 'fantasy-quiz' ? '🧙‍♂️' : '🥳' }} Bewahrt die Antwort gut auf...
      </p>
      <CelebrationAnimation v-if="props.level === 'final-riddle'"/>
    </div>
    <form v-else @submit.prevent="submit">
      <h1>
        {{
          props.displayQuest !== undefined
            ? `Raetsel Nummer ${props.displayQuest}`
            : 'Naechstes Raetsel'
        }}
      </h1>
      <p v-html="props.question"></p>
      <input
        :placeholder="levelStore.level === 'fantasy-quiz' ? '' : 'Deine Antwort'"
        ref="input"
        type="text"
        class="answer"
        v-model="givenAnswer"
        :class="{ error: formState.hasError }"
      />
    </form>
  </ParchmentText>
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
  outline: 2px solid var(--outline-color);
  font-size: 22px;
  margin-top: 10px;
  color: white;
  background: var(--input-background-color);
  font-family: var(--base-font);
  transition: all 200ms ease-in-out;

  &:focus {
    outline-width: 4px;
    outline-color: var(--outline-focus-color);
  }

  &.error {
    outline-color: red;
    animation: shake 100ms infinite;
  }
}
</style>
