import { createMemoryHistory, createRouter } from "vue-router";
import { HomeFilled} from '@element-plus/icons-vue'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    icon?: any
    hidden?: boolean
  }
}

import HomeView from "@/pages/HelloWorld.vue";
import Layout from "@/layout/index.vue";

export const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/home",
        name: "Home",
        component: HomeView,
        meta: {
          title: '首页',
          icon: HomeFilled
        }
      },
    ],
  },
];

export default createRouter({
  history: createMemoryHistory(),
  routes,
});
