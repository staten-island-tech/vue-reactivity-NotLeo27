<script setup>
import { drinks } from "@/drinks"; 
</script>

<template>
  <div class="container">
    <div v-for="drink in drinks" :key="drink.id" class="drink-card">
      <img :src="drink.image" :alt="drink.name" class="drink-image" />
      <div class="drink-id">{{ drink.id }}</div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 20px;
  justify-items: center;
  padding: 20px;
}

.drink-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.drink-image {
  width: 100px;
  height: 100px;
  object-fit: contain;
}

.drink-id {
  margin-top: 10px;
  background-color: white;
  border-radius: 50px;
  padding: 5px 15px;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
}
</style>
