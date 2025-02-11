<template>
  <div class="scoreboard">
    <div class="score-container">
      <div class="team">
        <span class="team-label">Team 1</span>
        <div class="score-card">
          <span class="score">{{ team1score }}</span>
        </div>
      </div>
      <div class="team">
        <span class="team-label">Team 2</span>
        <div class="score-card">
          <span class="score">{{ team2score }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const team1score = ref(0);
    const team2score = ref(0);

    return { team1score, team2score };
  },
};
</script>

<style scoped>
.scoreboard {
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  padding: 20px;
  border-radius: 10px;
}

.score-container {
  display: flex;
  gap: 20px;
  text-align: center;
}

.team {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.team-label {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.score-card {
  background: black;
  color: white;
  font-size: 3rem;
  font-weight: bold;
  width: 80px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 2px solid black;
}
</style>
