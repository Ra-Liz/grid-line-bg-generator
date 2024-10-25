import { createRouter, createWebHistory } from "vue-router";

// 路由数组
const routes = [
  {
    path: "/",
    redirect: "/grid-bg",
    children: [
      {
        path: "grid-bg",
        component: () => import("../views/gridBgGenerator/gridBgGenerator.vue"),
      },
      {
        path: "demo",
        component: () => import("../views/demoCard/demoCard.vue"),
      },
    ],
  },
];

// 创建路由对象
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
