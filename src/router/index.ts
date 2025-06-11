import { createWebHistory, createRouter } from "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    title?: string;
    icon?: any;
    hidden?: boolean;
  }
}

import App01 from "@/pages/App01-基础配置.vue";
import App02 from "@/pages/App02-自定义背景.vue";
import App03 from "@/pages/App03-自定义地图.vue";
import App04 from "@/pages/App04-添加地形.vue";
import Layout from "@/layout/index.vue";

export const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/app01",
        component: App01,
        meta: { title: "基本设置", },
      },
      {
        path: "/app02",
        component: App02,
        meta: { title: "自定义背景", },
      },
      {
        path: "/app03",
        component: App03,
        meta: { title: "自定义地图", },
      },
      {
        path: "/app04",
        component: App04,
        meta: { title: "添加地形", },
      },
    ],
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
