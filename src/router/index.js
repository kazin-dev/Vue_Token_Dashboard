import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import Home from "../views/Home.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/dashboard", component: Dashboard, meta: { requiresAuth: true } }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Middleware para proteger rotas privadas
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem("token");

  if (to.meta.requiresAuth && !isAuthenticated) {
    next("/login"); // Redireciona para o login se não estiver autenticado
  } else {
    next();
  }
});

export default router;
