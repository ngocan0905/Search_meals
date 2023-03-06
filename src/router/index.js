import { createRouter, createWebHashHistory } from "vue-router";
import home from "../views/home.vue";
const routes = [
  {
    path: "/",
    component: () => import("../layouts/DefaultLayout.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: home,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: () => import("../views/searchByName.vue"),
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: () => import("../views/searchByLetter.vue"),
      },
      {
        path: "/ingredients",
        name: "ingredients",
        component: () => import("../views/ingredients.vue"),
      },
      {
        path: "/by-ingredient/:ingredient",
        name: "byIngredient",
        component: () => import("../views/searchByIngredients.vue"),
      },
      {
        path: "/meal/:id?",
        name: "mealDetails",
        component: () => import("../views/MealDetails.vue"),
      },
    ],
  },
  {
    path: "/guest",
    component: () => import("../layouts/GuestLayout.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
