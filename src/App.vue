<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AA from './layout/footer.vue'
import BB from './layout/header.vue'
</script>

<template>
  <div>
    <AA></AA>
    <div>
      <div>菜单</div>
      <div>
        <RouterView />
      </div>
    </div>
    <BB></BB>
  </div>
</template>

<style scoped></style>
