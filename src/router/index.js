import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue"
import LandingPage from "../views/LandingPage.vue"
import HomePage from "../views/HomePage.vue"
import aboutPage from "../views/aboutPage.vue"
import projectPage from "../views/projectPage.vue"
import contactPage from "../views/contactPage.vue"

Vue.use(VueRouter);

const routes = [{
        path: "/home",
        name: "home",
        component: Home
    },
    {
        path: "/",
        name: "landing-page",
        component: LandingPage
    },
    {
        path: "/homepage",
        name: "home-page",
        component: HomePage
    },
    {
        path: "/about",
        name: "about-page",
        component: aboutPage
    },
    {
        path: "/project",
        name: "project-page",
        component: projectPage
    },
    {
        path: "/contact",
        name: "contact-page",
        component: contactPage
    },
];

const router = new VueRouter({
    routes
});

export default router;