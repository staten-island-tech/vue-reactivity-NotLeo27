<script setup>
import { ref } from "vue";
import { drinks } from "@/drinks";
import InventoryPage from "@/components/InventoryPage.vue";

const inputValue = ref("");
const numbers = [...Array(10).keys()]; // Generates 0-9
const inventory = ref([]);
const emit = defineEmits(["input-submitted", "update-inventory"]);

const appendNumber = (num) => {
  inputValue.value += num.toString();
};

const clearInput = () => {
  inputValue.value = "";
};

const submitInput = () => {
  const drinkId = parseInt(inputValue.value, 10);
  const matchedDrink = drinks.find((drink) => drink.id === drinkId);

  if (matchedDrink) {
    const exists = inventory.value.some((item) => item.id === drinkId);
    if (!exists) {
      inventory.value.push(matchedDrink);
      console.log("Added to inventory:", matchedDrink);
      emit("update-inventory", matchedDrink); // Emit only the new drink
    } else {
      console.log("Drink already in inventory:", matchedDrink);
    }
  } else {
    console.log("No drink found with ID:", drinkId);
  }
  
  emit("input-submitted", inputValue.value);
  clearInput();
};
</script>

<template>
  <div class="num-pad">
    <div class="display">Input: {{ inputValue }}</div>
    <div class="buttons">
      <button v-for="num in numbers" :key="num" @click="appendNumber(num)">
        {{ num }}
      </button>
      <button class="clear" @click="clearInput">Clear</button>
      <button class="enter" @click="submitInput">Submit</button>
    </div>
    
    <InventoryPage :inventory="inventory" />
  </div>
</template>

<style scoped>
.num-pad {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.display {
  width: 120px;
  height: 40px;
  background: #eee;
  text-align: center;
  line-height: 40px;
  border-radius: 5px;
  font-size: 1.2rem;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(3, 50px);
  gap: 5px;
}

button {
  width: 50px;
  height: 50px;
  font-size: 1.2rem;
  cursor: pointer;
  background: #ddd;
  border: none;
  border-radius: 5px;
  transition: background 0.2s;
}

button:hover {
  background: #ccc;
}

button.clear {
  grid-column: span 2;
  background: red;
  color: white;
}

button.enter {
  background: green;
  color: white;
}
</style>
  