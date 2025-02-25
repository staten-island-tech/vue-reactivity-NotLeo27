import { createRouter, createWebHistory } from 'vue-router';
import VendingMachine from '@/views/VendingMachine.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: VendingMachine
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
