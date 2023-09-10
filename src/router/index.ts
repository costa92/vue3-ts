import { createRouter, createWebHashHistory,RouteRecordRaw,isNavigationFailure } from 'vue-router'
import home from '@/views/home/home.vue'
import about from '@/views/about/about.vue'
import NProgress from "nprogress";
import {route} from "@/hooks";
// 定义路由
export const constantRouters: Array<RouteRecordRaw > = [
    {
        path: '/',
        component: home,
        meta: { title: "home", icon: "home", isAffix: true, isTagView: true },
    },
    {
        path: '/about',
        component: about
    }
];
// 创建路由实例并传递 `routes` 配置
const  router = createRouter({
    history: createWebHashHistory(),
    routes: constantRouters,
});

router.beforeEach(async (to, from, next) => {
    const store = routerStore();
    const { routerList, getRouterList } = store;
    const token = Session.get("token");
    NProgress.start();

    if (to.path === "/login") {
        NProgress.done();
        return next();
    }

    if (!token) {
        const params = JSON.stringify(to.query ? to.query : to.params);
        const url = `/login?redirect=${to.path}&params=${params}`;
        return next(url);
    }

    if (routerList.length > 0) return next();

    try {
        const newRouter = await getRouterList();
        newRouter.forEach((item) => router.addRoute(item));
        next({ ...to, replace: true });
    } catch (err) {
        console.log(err, "动态添加路由失败");
        NProgress.done();
    }
});

// 路由加载后
router.afterEach((to, from, failure) => {
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