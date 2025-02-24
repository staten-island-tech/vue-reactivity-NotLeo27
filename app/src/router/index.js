import { createRouter, createWebHistory } from 'vue-router';
import DrinkInventory from '../views/DrinkInventory.vue';
import VendingMachine from '../views/VendingMachine.vue';

const routes = [
  { path: '/drinks', component: () => import('../views/DrinkInventory.vue') },
  { path: '/vending', component: () => import('../views/VendingMachine.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
