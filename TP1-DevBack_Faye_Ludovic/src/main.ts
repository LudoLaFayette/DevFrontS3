import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import routesFromPages from "~pages";
import simple from "./pages/simple.vue"

import "./index.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // possible d'ajouter ses propres routes
    // en plus de celles faites automatiquement
    
    {
      path: '/simple',
      name: 'simple',
      component: simple
    },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
