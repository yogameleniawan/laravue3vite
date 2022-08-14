import './bootstrap';
import { createApp } from 'vue'

// import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import App from './App.vue';
import router from './routes';

createApp(App).use(router).mount("#app");

