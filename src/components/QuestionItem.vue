<script setup>
const props = defineProps({
  question: String,
  answer: String,
});
</script>

<template>
  <h2>{{ props.question }}</h2>
  <p>{{ props.answer }}</p>
</template>
