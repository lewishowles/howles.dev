import { createRouter, createWebHistory } from "vue-router";
import PageHome from "@/views/page-home/page-home.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: PageHome,
		},
		{
			path: "/cv",
			name: "cv",
			component: () => import("@/views/page-cv/page-cv.vue"),
		},
	],
});

export default router;
