<script setup lang="ts">
import Grid from './components/Grid.vue'
import { ref } from "vue";

const gridSize = 16
var pattern = ref([]);


function updatePattern(){
  pattern.value = [];
  for (var i=0;i<(gridSize**2);i++){
     pattern.value.push(Math.round(Math.random()))
  }
}
</script>

<template>
  <main>
    <button @click="updatePattern">Update Pattern</button>
    <Grid :size="gridSize" :pattern="pattern" />
  </main>
</template>

<style scoped>

</style>
