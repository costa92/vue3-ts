import { createRouter, createWebHashHistory,RouteRecordRaw,isNavigationFailure } from 'vue-router'
import home from '@/views/home/home.vue'
import about from '@/views/about/about.vue'
import NProgress from "nprogress";
import {route} from "@/hooks";
import {i18nRouter} from "@/utils";
import { settingsStore } from "@/store";
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

// 文档： https://router.vuejs.org/zh/guide/advanced/navigation-guards.html
// 创建路由实例并传递 `routes` 配置
const  router = createRouter({
    history: createWebHashHistory(),
    routes: constantRouters,
});

/* 全局前置守卫 */
router.beforeEach((to, from, next) => {
    /* 全局性的操作：
     * 权限控制
     * 进度条（开始）
     * ...
     */
    next();
});

/* 全局解析守卫 */
router.beforeResolve((to, from, next) => {
    console.log("beforeResolve")
    next();
});

/* 全局后置钩子 */
router.afterEach((to, from, failure) => {
    // save current Route to Store
    const settingsState = settingsStore();
    settingsState.config.active = to.fullPath
    settingsState.setConfig(settingsState.config)

    route.value = to;
    if (isNavigationFailure(failure)) {
        NProgress.done();
        console.log("error navigation", failure);
    } else {
        document.title = i18nRouter(router.currentRoute.value.meta.title as string);
        NProgress.done();
    }
});
export default router;