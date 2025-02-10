import { createRouter, createWebHistory } from "vue-router";
import GameType from "@/views/GameType.vue";
import InGame from "@/views/InGame.vue";

const routes = [
  { path: "/", component: GameType },
  { path: "/ingame", name: "InGame", component: InGame },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
