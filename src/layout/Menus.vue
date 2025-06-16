<script setup lang="ts">
import { routes } from '@/router';
</script>

<template>
  <el-menu :default-active="$route.path" class="el-menu-vertical" router>
    <template v-for="route in routes[0].children">
      <!-- 有子菜单的情况 -->
      <el-sub-menu v-if="route.children?.length" :index="route.path">
        <template #title>
          <el-icon>
            <component :is="route.meta?.icon" />
          </el-icon>
          <span>{{ route.meta?.title }}</span>
        </template>
        <template v-for="child in route.children.filter(child => !child.meta?.hidden)" :key="child.path">
          <el-menu-item :index="child.path">
            <el-icon>
              <component :is="child.meta?.icon" />
            </el-icon>
            <span>{{ child.meta?.title }}</span>
          </el-menu-item>
        </template>
      </el-sub-menu>

      <!-- 没有子菜单的情况 -->
      <el-menu-item v-else :index="route.path">
        <el-icon>
          <component :is="route.meta?.icon" />
        </el-icon>
        <span>{{ route.meta?.title }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<style scoped lang="scss">
.el-menu-vertical {
  height: 100%;
  border-right: 1px solid var(--el-border-color-light);
}

:deep() {
  .el-menu-item {
    white-space: unset !important;
    line-height: 1.5;
    padding: 0 !important;
  }
}
</style>