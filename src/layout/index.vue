<script setup lang="ts">
import Menus from './Menus.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <div class="layout">
    <el-container>
      <el-aside v-if="!route.query.hiddenSidebar" width="200px">
        <Menus />
      </el-aside>
      <el-main>
        
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.layout {
  width: 100%;
  height: 100%;

  :deep() {

    .el-main {
      padding: 0;
    }
    .el-aside,
    .el-container {
      height: 100%;
    }
  }
}
</style>