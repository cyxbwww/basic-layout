<template>
  <basic-layout>
    <template #header>
      <div class="flex-center h-full bg-#e6e6e6">Header</div>
    </template>
    <template #tab>
      <div class="flex-center h-full bg-#cccccc">Tab</div>
    </template>
    <template #sider>
      <div class="h-full bg-#d9d9d9">
        <div class="flex-center h-56px">Sider</div>
      </div>
    </template>
    <template #footer>
      <div class="flex-center h-full bg-#e6e6e6">Footer</div>
    </template>
  </basic-layout>
</template>

<script setup lang="ts">
import BasicLayout from './index.vue';
</script>

<style scoped></style>
