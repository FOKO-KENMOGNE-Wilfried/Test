import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import './style.css';
import App from './App.vue';
import SingleProduct from "./components/views/SingleProduct.vue";
import Products from "./components/views/Products.vue";
import Basket from "./components/views/Basket.vue";

const routes = [
    { path: "/", component: Products },
    { path: "/single_product/:id", component: SingleProduct },
    { path: "/basket", component: Basket },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).use(router).mount('#app');
