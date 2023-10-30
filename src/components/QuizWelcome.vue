<script setup>
import AnimatedBalloons from './AnimatedBalloons.vue'
import { useLevelStore } from "../stores/quiz";

const levelStore = useLevelStore();

</script>
<template>
  <h1>Herzlichen Glückwunsch!</h1>
  <p>
    Wir hoffen ihr hattet mächtigen Puzzle-Spaß. Euer Ehrgeiz und eure Sorgfalt hat euch hier her
    geführt. Nun ihr habt tapfer gewartet bis diese Pforte sich öffnet. Doch bevor ihr endgültig am
    Ziel eurer Reise angekommen seid, warten noch ein paar Aufgaben auf euch, die es zu lösen gilt.
    Also nehmt einander an die Hand und macht euch auf die Suche nach der verborgenen Botschaft und
    durchquert das Rätseldickicht...
  </p>
  <p>
    Doch bedenkt: die Weisheiten, die ihr auf dieser Reise sammeln werdet, werden noch von Belang
    sein, also bewahret sie sicher.
  </p>
  <RouterLink to="/quiz" @click="levelStore.increment()">Los geht's!</RouterLink>

  <AnimatedBalloons />
</template>
