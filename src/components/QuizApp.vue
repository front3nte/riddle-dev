<script setup lang="ts">
import QuestionItem from './QuestionItem.vue';
document.body.classList.remove("start");
</script>

<template>
  <h1>hello quiz</h1>
  <QuestionItem question="Das ist eine Frage" answer="Hier steht die Antwort"/>
  <QuestionItem question="Das ist eine andere Frage" answer="Hier steht die nächste Antwort"/>
  <QuestionItem question="Das ist eine ganz andere Frage" answer="Hier steht noch eine Antwort"/>
</template>
