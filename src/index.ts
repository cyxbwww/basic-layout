import type { App } from 'vue-demi';
import BasicLayout from './index.vue';

function install(app: App) {
  app.component('BasicLayout', BasicLayout);
}

BasicLayout.install = install;

export default BasicLayout;
