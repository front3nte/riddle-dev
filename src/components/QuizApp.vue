<script setup lang="ts">
import QuestionItem from './QuestionItem.vue'
import { useLevelStore } from '../stores/quiz'
import type { PropType } from 'vue'
import { reactive } from 'vue'
import router from '../router'
import SunsetAnimation from "./SunsetAnimation.vue";

const levelStore = useLevelStore()

interface Question {
  q: string
  a: string
}

const props = defineProps({
  questions: Array as PropType<Question[]>,
  startText: String,
  nextLevel: String,
  wait: Boolean,
  waitingText: String,
})

const state = reactive({
  index: -1,
  isWaiting: props.wait,
})
</script>

<template>
  <div v-if="state.index < 0">
    <slot />
    <div v-if="state.isWaiting">
      <SunsetAnimation @exceeded="state.isWaiting = false" />
      <p class="wait-text">{{ props.waitingText }}</p>
    </div>
    <button v-else class="riddle-start-button" @click="state.index++">{{ props.startText }}</button>
  </div>
  <div v-else>
    <template v-for="(item, index) in props.questions" :key="`questionItem-${index}`">
      <QuestionItem
        v-if="state.index == index"
        :index="index"
        :question="item.q"
        :answer="item.a"
        :questionCount="props.questions?.length"
        @reset="state.index = -1"
        @next="
          () => {
            state.index++
            if (props.questions && state.index >= props.questions?.length && props.nextLevel) {
              router.push(props.nextLevel)
              levelStore.increment()
            }
          }
        "
      />
    </template>
  </div>
</template>

<style lang="scss">
.riddle-start-button {
  padding: 15px 20px;
  font-size: 22px;
  background: transparent;
  border: 2px solid var(--outline-color);
  border-radius: 4px;
  color: var(--color-text);
  min-width: 200px;
  float: right;
  transition: all 300ms ease-in-out;
  cursor: pointer;
  display: flex;
  margin: auto;
  align-items: baseline;
  justify-content: center;
  font-family: var(--base-font);

  &.final {
    float: none;
  }

  &:hover {
    background-color: var(--outline-color);
    color: white;
  }

  &:active {
    color: var(--outline-color);
    background-color: white;
  }
}

.wait-text {
  text-align: center;
  padding-top: 15px;
  font-style: italic;
  font-weight: bold;
  font-size: 32px;
  font-family: 'My Soul', var(--heading-font);
}
</style>
