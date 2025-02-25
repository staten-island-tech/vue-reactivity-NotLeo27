import { createRouter, createWebHistory } from 'vue-router';
import VendingMachine from '../views/VendingMachine.vue';

const routes = [
  { path: '/', component: VendingMachine }, // Default route to VendingMachine
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
