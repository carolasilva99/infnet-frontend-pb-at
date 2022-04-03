import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MonteSeuKitViewVue from "../views/MonteSeuKitView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/cadastro",
      name: "cadastro",
      component: () => import("../views/CadastroView.vue"),
    },
    {
      path: "/informacoes/:id",
      name: "informacoes",
      component: () => import("../views/InformacoesView.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  }
});

export default router;
