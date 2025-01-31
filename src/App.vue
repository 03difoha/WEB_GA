<script setup lang="ts">
import Grid from "./components/Grid.vue";
import { ref } from "vue";
// import { generatePopulation } from "./utils/GA.js";
const gridSize = 16;
var pattern = ref([]);

const generations = 100;
const populationSize = 100;
const mutationRate = 0.01;
const genotypeLength = 16 ** 2;
// crossoverRate = 0.7;
// elitism = 2;
// tournamentSize = 5;

function generatePopulation() {
  let population = [];
  for (let i = 0; i < populationSize; i++) {
    population.push(generateRandomIndividual());
  }

  return population;
}

function generateRandomIndividual() {
  let individual = [];
  for (let i = 0; i < genotypeLength; i++) {
    individual.push(Math.random() < 0.5 ? 0 : 1);
  }
  return individual;
}

function updatePattern() {
  pattern.value = [];
  for (var i = 0; i < gridSize ** 2; i++) {
    pattern.value.push(Math.round(Math.random()));
  }
}
let pop = generatePopulation();
console.log(pop);
</script>

<template>
  <main>
    <div class="container">
      <div class="column">
        Target Pattern
        <button @click="updatePattern">Update Pattern</button>

        <Grid :size="gridSize" :pattern="pattern" />
      </div>
      <div class="column">Population
        <div v-for="p in pop">
      <Grid :size="gridSize" :pattern="p" />
    </div>
      </div>
    </div>
    
  </main>
</template>

<style scoped>
.container {
  display: flex;
  width: 100%;
  height: 100vh;
}

.column {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid #000;
}
</style>
