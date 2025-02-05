import { createRouter, createWebHistory } from "vue-router";
import GameType from "@/views/GameType.vue"; // Import GameType.vue
import InGame from "@/views/InGame.vue"; // Import InGame.vue

// Define routes
const routes = [
  { path: "/", component: GameType }, // Home page (Game Type selection)
  { path: "/ingame", name: "InGame", component: InGame }, // The InGame page
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(), // Enables history mode (no hash # in URLs)
  routes,
});

export default router;
