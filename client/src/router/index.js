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
    meta: { requiresAuth: true },
    component: () => import("../views/offers.vue"),
  },
  {
    path: "/addoffer",
    name: "add offer",
    meta: { requiresAuth: true },
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
  {
    path: "/myoffers",
    name: "my offers",
    meta: { requiresAuth: true },
    component: () => import("../views/myOffers.vue"),
  },
];

const router = new VueRouter({
  routes,
  linkActiveClass: "active",
  mode: "history",
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => {
    
    console.log(record)
    return record.meta.requiresAuth})) {
    if (localStorage.getItem("jwt") == null) {
      next({
        path: "/login"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});


export default router;
