<template>
  <div class="moves-container">
    <div
      v-for="move in singlesMoves"
      :key="move.move"
      class="move-button"
      @click="selectedKey = move.move"
    >
      {{ move.move }}
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import { singlesMoves, doublesMoves } from "../moves.js";

const selectedKey = ref(null);
const emit = defineEmits(["moveClicked"]);

const emitKey = (moveKey) => {
  emit("moveClicked", moveKey);
};
</script>

<style scoped>
.scoreboard {
  background-color: black;
  color: white;
  width: 100%;
  max-width: 600px;
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 12px;
  text-align: center;
}

.scores {
  display: flex;
  justify-content: space-around;
  font-size: 1.5rem;
  margin-top: 1rem;
}

.moves-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
  max-width: 600px;
}

.move-button {
  padding: 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s ease;
  background-color: white;
  font-weight: bold;
  cursor: pointer;
}

.move-button:hover {
  background-color: #f8fafc;
  border-color: #cbd5e1;
}

@media (max-width: 1023px) {
  .moves-container {
    gap: 0.5rem;
  }

  .move-button {
    padding: 0.75rem;
    font-size: 0.875rem;
  }
}

@media (min-width: 1024px) {
  .moves-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}
</style>
