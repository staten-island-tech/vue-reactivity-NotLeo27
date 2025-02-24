<script setup>
import { defineProps } from "vue";

const props = defineProps({
  inventory: Array
});
</script>

<template>
  <div>
    <h2>Inventory</h2>
    <ul v-if="inventory.length">
      <li v-for="item in inventory" :key="item.id">
        <img :src="`/images/${item.image}`" :alt="item.name" width="50" />
        {{ item.name }} - ${{ item.price }}
      </li>
    </ul>
    <p v-else>No drinks in inventory.</p>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 5px 0;
}
</style>
