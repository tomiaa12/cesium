<template>
  <div id="cesiumContainer" ref="cesiumContainer"></div>
</template>

<script setup>
import * as Cesium from "cesium";
import { onMounted } from "vue";

onMounted(async () => {
  const viewer = new Cesium.Viewer("cesiumContainer", {
    // 隐藏 logo
    creditContainer: document.createElement('div'),
    // 隐藏右上角的帮助按钮
    navigationHelpButton: false,
    // 去除第一次加载后控制台报错
    infoBox: false,
    // 右上角搜索框
    geocoder: false,
    // 底部时间线
    timeline: false,
    // 左下角动画控件
    animation: false,
    // 右上角主页按钮
    homeButton: false,
    // 右上角显示模式
    sceneModePicker: false,
    // 右上角投影切换按钮
    baseLayerPicker: false,


    // 添加地形
    terrainProvider: await Cesium.createWorldTerrainAsync(),
    // terrainProvider: new Cesium.CesiumTerrainProvider({
    //   url: "./terrains/gz",
    // }),

    

  });

});
</script>


<style scoped>
#cesiumContainer {
  height: 100%;
  width: 100%;
}
</style>

