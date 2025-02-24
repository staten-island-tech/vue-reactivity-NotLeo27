<script setup>
import { drinks } from "@/drinks"; 
</script>

<template>
  <div class="container">
    <div v-for="drink in drinks" :key="drink.id" class="drink-card">
      <img :src="drink.image" :alt="`Image of ${drink.name}`" class="drink-image" />
      <div class="drink-id">{{ drink.id }}</div>
      <div class="drink-name">{{ drink.name }}</div>
      <div class="drink-price">{{ drink.price }}</div>
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
  transition: transform 0.2s ease-in-out;
}

.drink-card:hover {
  transform: scale(1.05);
}

.drink-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
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

.drink-name {
  margin-top: 8px;
  font-size: 16px;
  font-weight: normal;
}

.drink-price {
  margin-top: 5px;
  font-size: 14px;
  font-weight: normal;
  color: #4CAF50; /* Green for pricing */
}
</style>
