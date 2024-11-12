<script setup>
import { RouterLink, RouterView } from 'vue-router'
import footerBottom from './layout/footer.vue'
import headerTop from './layout/header.vue'
import Menu from '@/components/Menu/index.vue'
import { ElScrollbar } from 'element-plus'
</script>

<template>
  <div>
    <headerTop></headerTop>
    <div>
      <div class="flex">
        <Menu mode="vertical" class="w-[180px]"></Menu>
        <ElScrollbar class="w-[calc(100vw-180px)]">
          <div class="content">
            <RouterView />
          </div>
          <footerBottom></footerBottom>
        </ElScrollbar>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  min-height: calc(100vh - 160px);
  padding: 20px;
}
.flex {
  display: flex;
}
</style>
