import { createWebHistory, createRouter } from "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    title?: string;
    icon?: any;
    hidden?: boolean;
  }
}

import Layout from "@/layout/index.vue";

export const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/app01",
        component: () => import("@/pages/App01-基础配置.vue"),
        meta: { title: "基本设置", },
      },
      {
        path: "/app02",
        component: () => import("@/pages/App02-自定义背景.vue"),
        meta: { title: "自定义背景", },
      },
      {
        path: "/app03",
        component: () => import("@/pages/App03-自定义地图.vue"),
        meta: { title: "自定义地图", },
      },
      {
        path: "/app04",
        component: () => import("@/pages/App04-添加地形.vue"),
        meta: { title: "添加地形", },
      },
      {
        path: "/app05",
        component: () => import("@/pages/App05-坐标系转换.vue"),
        meta: { title: "坐标系转换", },
      },
      {
        path: "/app06",
        component: () => import("@/pages/App06-相机控制.vue"),
        meta: { title: "相机控制", },
      },
      {
        path: "/app07",
        component: () => import("@/pages/App07-添加物体.vue"),
        meta: { title: "添加物体", },
      },
      {
        path: "/app08",
        component: () => import("@/pages/App08-添加3D模型.vue"),
        meta: { title: "添加3D模型", },
      },
      {
        path: "/app09",
        component: () => import("@/pages/App09-primitive元素.vue"),
        meta: { title: "primitive元素", },
      },
      {
        path: "/app10",
        component: () => import("@/pages/App10-多个实体在一个primitive元素.vue"),
        meta: { title: "多实体在一个primitive", },
      },
      {
        path: "/app11",
        component: () => import("@/pages/App11-修改primitive颜色.vue"),
        meta: { title: "修改primitive颜色", },
      },
      {
        path: "/app12",
        component: () => import("@/pages/App12-primitive和entity物体互动.vue"),
        meta: { title: "primitive和entity物体互动", },
      },
      {
        path: "/app13",
        component: () => import("@/pages/App13-entity面材质.vue"),
        meta: { title: "entity面材质", },
      },
      {
        path: "/app14",
        component: () => import("@/pages/App14-entity线材质.vue"),
        meta: { title: "entity线材质", },
      },
      {
        path: "/app15",
        component: () => import("@/pages/App15-Appearance.vue"),
        meta: { title: "Appearance", },
      },
      {
        path: "/app16",
        component: () => import("@/pages/App16-primitive材质.vue"),
        meta: { title: "Primitive材质", },
      },
      {
        path: "/app17",
        component: () => import("@/pages/App17-着色器自定义材质.vue"),
        meta: { title: "着色器自定义材质", },
      },
      {
        path: "/app18",
        component: () => import("@/pages/App18-加载GeoJson数据.vue"),
        meta: { title: "加载GeoJson数据", },
      },
      {
        path: "/app19",
        component: () => import("@/pages/App19-加载kml数据.vue"),
        meta: { title: "加载kml数据", },
      },
      {
        path: "/app20",
        component: () => import("@/pages/App20-加载kmz数据.vue"),
        meta: { title: "加载kmz数据", },
      },
      {
        path: "/app21",
        component: () => import("@/pages/App21-加载czml数据.vue"),
        meta: { title: "加载czml数据", },
      },
      {
        path: "/app22",
        component: () => import("@/pages/App22-加载czml时序数据.vue"),
        meta: { title: "加载czml时序数据", },
      },
      {
        path: "/app23",
        component: () => import("@/pages/App23-追踪飞机跨洋飞行.vue"),
        meta: { title: "追踪飞机跨洋飞行", },
      },
      {
        path: "/app24",
        component: () => import("@/pages/App24-3DTiles与性能监控.vue"),
        meta: { title: "3DTiles与性能监控", },
      },
      {
        path: "/app25",
        component: () => import("@/pages/App25-设置3DTiles样式.vue"),
        meta: { title: "设置3DTiles样式", },
      },
      {
        path: "/app26",
        component: () => import("@/pages/App26-设置3DTiles样式高级设置.vue"),
        meta: { title: "设置3DTiles样式高级设置", },
      },
    ],
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
