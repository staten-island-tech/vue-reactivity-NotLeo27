<template>
  <div class="moves-container">
    <div
      v-for="moveObj in singlesMoves"
      :key="moveObj.move"
      class="move-button"
      @click="selectMove(moveObj.move)"
    >
      {{ moveObj.move }}
    </div>
  </div>

  <button v-if="move" @click="confirmMove" class="confirm-button">Confirm Move: {{ move }}?</button>
</template>

<script setup>
import { ref } from "vue";
import { singlesMoves } from "../moves.js";

const move = ref("");

const selectMove = (selectedMove) => {
  move.value = selectedMove;
};

const confirmMove = () => {
  emit("moveSelected", move.value);
};
</script>

<style scoped>
.confirm-button {
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.confirm-button:hover {
  background-color: #388e3c;
}
</style>
