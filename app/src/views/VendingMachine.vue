<template>
  <div class="vending-machine">
    <!-- TheMachine with a grid to display drinks in rows of 5 -->
    <TheMachine />
    
    <div class="bottom-section">
      <!-- NumPad for interaction with inventory -->
      <NumPad @update-inventory="updateInventory" />
      
      <!-- InventoryPage to show a single row of inventory -->
      <InventoryPage :inventory="inventory" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TheMachine from '@/components/TheMachine.vue';
import NumPad from '@/components/NumPad.vue';
import InventoryPage from "@/components/InventoryPage.vue";

const inventory = ref([]);

// Update inventory when NumPad emits an event
const updateInventory = (newItem) => {
  if (!inventory.value.some(item => item.id === newItem.id)) {
    inventory.value.push(newItem);
  }
};
</script>

<style scoped>
.vending-machine {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.bottom-section {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
  gap: 20px;
}

/* Inventory section displayed as a single row */
.inventory-container {
  display: flex;
  flex-wrap: nowrap; /* Ensures all inventory items stay in one row */
  overflow-x: auto; /* Allows horizontal scrolling if needed */
  gap: 10px; /* Gap between inventory items */
}

/* Adjust TheMachine to display drinks in rows of 5 */
.container {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 5 items per row */
  gap: 20px;
  justify-items: center;
  padding: 20px;
}

/* Optional: Add responsive grid for smaller screens */
@media (max-width: 768px) {
  .container {
    grid-template-columns: repeat(3, 1fr); /* 3 items per row on smaller screens */
  }
}
</style>
