<script setup>
import { defineProps } from "vue";

const props = defineProps({
  inventory: {
    type: Array,
    required: true,
    default: () => [],
  }
});
</script>

<template>
  <div class="inventory-container">
    <aside class="inventory-bar">
      <h2>Inventory</h2>
      <ul v-if="inventory && inventory.length">
        <li v-for="item in inventory" :key="item.id">
          <img :src="item.image || '/default-image.png'" :alt="item.name" width="50" />
          <span>{{ item.name }} - ${{ item.price }}</span>
        </li>
      </ul>
      <p v-else>No drinks in inventory.</p>
    </aside>
  </div>
</template>

<style scoped>
.inventory-container {
  display: flex;
  justify-content: flex-end;
  height: 100vh;
}

.inventory-bar {
  width: 250px;
  background-color: #f8f8f8;
  padding: 15px;
  border-left: 2px solid #ccc;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 5px 0;
}

img {
  border-radius: 5px;
}
</style>
