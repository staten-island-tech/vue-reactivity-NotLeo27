<template>
  <div class="move-container">
    <div class="move-box" v-for="move in singlesMoves" :key="singlesMoves.move">
      {{ move.move }}
    </div>
    <div class="move-box" v-for="move in doublesMoves" :key="doublesMoves.move">
      {{ move.move }}
    </div>
  </div>
</template>

<script setup>
import { singlesMoves, doublesMoves } from "../moves.js";
</script>

<style scoped>
.move-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  width: 50%;
  margin: auto;
  padding: 10px;
  border: 2px solid black;
  background-color: #d9d9d9;
}

.move-box {
  background-color: white;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  border: 2px solid black;
  cursor: pointer;
  transition: 0.3s;
}

.move-box:hover {
  background-color: lightgray;
}
</style>
