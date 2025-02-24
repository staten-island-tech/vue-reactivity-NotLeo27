<template>
    <div class="number-pad">
      <div class="display">{{ inputValue }}</div>
      <div class="buttons">
        <button v-for="num in numbers" :key="num" @click="appendNumber(num)">
          {{ num }}
        </button>
        <button @click="clearInput" class="clear">Clear</button>
        <button @click="submitInput" class="enter">Enter</button>
      </div>
    </div>
</template>
  
  <script>
  export default {
    name: "NumberPad",
    data() {
      return {
        inputValue: "",
        numbers: [...Array(10).keys()], // Generates 0-9
      };
    },
    methods: {
      appendNumber(num) {
        this.inputValue += num.toString();
      },
      clearInput() {
        this.inputValue = "";
      },
      submitInput() {
        console.log("Final Value:", this.inputValue);
        this.$emit("input-submitted", this.inputValue);
      },
    },
  };
  </script>
  
  <style scoped>
  .number-pad {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  
  .display {
    width: 100px;
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
  