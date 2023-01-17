import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Home",
		component: () => import("../views/Home.vue"),
	},
	{
		path: "/movies",
		name: "Movies",
		component: () => import("../views/Movies.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;