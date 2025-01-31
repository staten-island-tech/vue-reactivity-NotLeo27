<template>
  <div>
    <h1>Badminton Game</h1>
    <form name="gametype" @submit.prevent="selectedGameType">
      <div>
        <label for="singles">
          <input type="radio" value="singles" v-model="selectedGameType" checked />
          Singles
        </label>
      </div>
      <div>
        <label for="doubles">
          <input type="radio" value="doubles" v-model="selectedGameType" />
          Doubles
        </label>
      </div>
      <div>
        <button class="submit-class" type="submit">Play Game!</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
const selectedGameType = ref("singles");
</script>

<style scoped></style>
