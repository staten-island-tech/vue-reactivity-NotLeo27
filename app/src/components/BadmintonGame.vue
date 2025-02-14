<template>
  <div>
    <ScoreBoard />
    <Moveset />
  </div>
</template>

<script setup>
import ScoreBoard from "@/components/ScoreBoard.vue";
import Moveset from "@/components/MovesetBadminton.vue";
import { ref } from "vue";

const selectedMove = ref("");

const handleMoveSelection = (move) => {
  selectedMove.value = move;
};
</script>

<style scoped></style>
