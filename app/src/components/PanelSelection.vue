<template>
    <div class="panel-selection">
      <nav>
        <button @click="$router.push('/drinks')" :class="{ active: $route.path === '/drinks' }">
          Drink Inventory
        </button>
        <button @click="$router.push('/vending')" :class="{ active: $route.path === '/vending' }">
          Vending Machine
        </button>
      </nav>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PanelSelection',
  };
  </script>
  
  <style scoped>
  .panel-selection {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: white;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
    text-align: center;
    padding: 10px 0;
    }

    nav {
        display: flex;
        justify-content: center;
        gap: 10px;
    }

  button {
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    background: #ddd;
    border-radius: 5px;
  }
  button.active {
    background: #007bff;
    color: white;
  }
  </style>
  