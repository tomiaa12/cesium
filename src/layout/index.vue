<script setup lang="ts">
import Menus from './Menus.vue'

</script>

<template>
  <div class="layout">
    <el-container>
      <el-aside width="200px">
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

    .el-aside,
    .el-container {

      height: 100%;
    }
  }
}
</style>