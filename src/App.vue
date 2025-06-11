<script setup lang="ts">
import * as Cesium from 'cesium'
import "cesium/Build/Cesium/Widgets/widgets.css";

// 设置静态资源目录
window.CESIUM_BASE_URL = '/';

// 默认加载看到的视角
Cesium.Camera.DEFAULT_VIEW_RECTANGLE = Cesium.Rectangle.fromDegrees(
  // 西边经度
  89.5,
  // 南边纬度
  20.4,
  // 东边经度
  110.4,
  // 北边纬度
  61.2
);

// token，在官网注册
Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmYWE1YmNhZS05MjE4LTQwYzEtYTcxNC01ZTgxMmE3OThkYTEiLCJpZCI6MzExMTkxLCJpYXQiOjE3NDk2Mjc1MzR9.DyRMrgbStW6Q7uLUjnh7gPNdrOfgNfq5-TOmWVJd978"

</script>

<template>
  <router-view></router-view>
</template>
