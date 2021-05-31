import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    name: "welcome",
    component: () => import("../views/welcome.vue"),
  },
  {
    path: "/offers",
    name: "offers",
    component: () => import("../views/offers.vue"),
  },
  {
    path: "/addoffer",
    name: "add offer",
    component: () => import("../views/addOffer.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/register.vue"),
  },
];

const router = new VueRouter({
  routes,
  linkActiveClass: "active",
  mode: "history",
});

export default router;
