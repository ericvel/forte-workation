import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import OsloPage from "@/pages/OsloPage.vue";
import BookingPage from "@/pages/BookingPage.vue";

const routes = [
  { path: "/", name: "HomePage", component: HomePage },
  { path: "/oslo", name: "OsloPage", component: OsloPage },
  { path: "/booking", name: "BookingPage", component: BookingPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
