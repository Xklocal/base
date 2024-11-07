<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AA from './layout/footer.vue'
import BB from './layout/header.vue'
</script>

<template>
  <div>
    <AA></AA>
    <div class="flex">
      <div class="menu">菜单</div>
      <div class="content">
        <RouterView />
      </div>
    </div>
    <BB></BB>
  </div>
</template>

<style scoped>
.content {
  height: calc(100vh - 160px);
}
.menu {
  width: 80px;
  text-align: center;
  background-color: #000;
  color: #fff;
}
.flex {
  display: flex;
}
</style>
