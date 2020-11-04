import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/Home.vue"

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "home-page",
    component: HomePage
}, ];

const router = new VueRouter({
    routes
});

export default router;