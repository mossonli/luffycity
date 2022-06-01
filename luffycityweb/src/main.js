import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './store'; // vuex实现全局数据状态的统一管理

import 'element-plus/dist/index.css';

createApp(App).use(router).use(store).mount('#app');
