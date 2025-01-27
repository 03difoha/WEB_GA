<template>
  <div class="grid" :style="gridStyle">
    <div v-for="tile in tiles" :key="tile" :class="['tile', pattern[tile] === 1 ? 'on' : 'off']">{{ tile }}</div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

// Props
const props = defineProps({
  size: {
    type: Number,
    required: true,
    validator: (value) => value > 0, // Must be a positive number
  },
  pattern:{
    type: Array,
    required: true
  }
});

// Computed properties
const tiles = computed(() =>  props.size * props.size );
const gridStyle = computed(() => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${props.size}, 1fr)`,
  gap: '10px',
  width: `${props.size * 20}px`, // Adjust based on desired tile size
  height: `${props.size * 20}px`, // Adjust based on desired tile size
}));
</script>

<style scoped>
.tile {
  aspect-ratio: 1 / 1; /* Keeps tiles square */
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  border-radius: 8px;
  font-weight: bold;
}

.on{
  background-color: #4caf50;
}

.off{
  background-color: grey;
}
</style>
