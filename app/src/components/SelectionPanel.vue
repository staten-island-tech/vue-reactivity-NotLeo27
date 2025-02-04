<template>
  <div>
    <h1>Badminton Game</h1>
    <div>
      <form name="gametype" @submit.prevent="startGame">
        <div class="choices">
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
  </div>
</template>

<script setup>
import { ref } from "vue";
const selectedGameType = ref("singles");
</script>

<style scoped></style>
