import { createRouter, createWebHashHistory,RouteRecordRaw,isNavigationFailure } from 'vue-router'
import home from '@/views/home/home.vue'
import about from '@/views/about/about.vue'
import NProgress from "nprogress";
import {route} from "@/hooks";
import {i18nRouter} from "@/utils";
// 定义路由
export const constantRouters: Array<RouteRecordRaw > = [
    {
        path: '/',
        component: home,
        meta: { title: "home", icon: "home", isAffix: true, isTagView: true },
    },
    {
        path: '/about',
        component: about,
        meta: { title: "about", icon: "about", isAffix: true, isTagView: true },
    }
];
// 创建路由实例并传递 `routes` 配置
const  router = createRouter({
    history: createWebHashHistory(),
    routes: constantRouters,
});



// 路由加载后
router.afterEach((to, from, failure) => {
    route.value = to;
    console.log("afterEach", to, from, failure)
    if (isNavigationFailure(failure)) {
        NProgress.done();
        console.log("error navigation", failure);
    } else {
        document.title = i18nRouter(router.currentRoute.value.meta.title as string);
        NProgress.done();
    }
});
export default router;