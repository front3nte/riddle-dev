<script setup lang="ts">
import { onMounted, reactive } from 'vue'
const countDownDate = new Date('November 5, 2023 16:15:50').getTime()
const now = new Date().getTime()
const distance = countDownDate - now

const state = reactive({
  exceeded: false
})

onMounted(() => {
  if (distance < 0) {
    state.exceeded = true
  }
})
</script>
<template>
  <div class="container" :class="{ waiting: !state.exceeded }">
    <div class="sun"></div>
  </div>
</template>
<style lang="scss">
body.fantasy-quiz {
  --duration: 60s;
  animation: dusk var(--duration) linear alternate infinite;

  .container.waiting {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;

    .sun {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: gold;
      opacity: 0.8;
      box-shadow: 0 0 100px 20px gold;
      position: absolute;
      left: 0;
      top: 0;
      animation: sun-float calc(var(--duration) * 2) linear infinite;
    }

    @keyframes sun-float {
      0% {
        transform: translate(0, 0);
        background-color: white;
      }

      30% {
        background-color: gold;
      }

      40% {
        background-color: rgb(215, 40, 40);
      }

      50% {
        transform: translate(50vw, calc(120vh));
        background-color: rgb(123, 65, 65);
      }

      60% {
        background-color: rgb(215, 40, 40);
      }
      70% {
        background-color: gold;
      }

      100% {
        transform: translate(100vw, 0);
        background-color: white;
      }
    }

    @keyframes dusk {
      0% {
        background-color: skyblue;
        color: darkgreen;
      }
      40% {
        background-color: skyblue;
        color: darkgreen;
      }
      50% {
        background-color: rgb(235, 222, 135);
        color: black;
      }
      60% {
        background-color: rgb(228, 111, 52);
        color: white;
      }
      70% {
        background-color: rgb(30, 36, 48);
        color: white;
      }
      100% {
        background-color: rgb(30, 36, 48);
        color: white;
      }
    }
  }
}
</style>
