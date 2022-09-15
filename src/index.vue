<template>
  <div class="basic-layout">
    <layout-header>
      <slot name="header" />
    </layout-header>
    <layout-tab>
      <slot name="tab" />
    </layout-tab>
    <layout-sider>
      <slot name="sider" />
    </layout-sider>
    <layout-content>
      <slot />
    </layout-content>
    <layout-footer>
      <slot name="footer" />
    </layout-footer>
  </div>
</template>

<script setup lang="ts">
import { LayoutHeader, LayoutTab, LayoutSider, LayoutContent, LayoutFooter } from './components';

defineOptions({ name: 'BasicLayout' });
</script>

<style scoped></style>
