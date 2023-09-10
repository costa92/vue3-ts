// <reference types="vite/client" />
// 找不到对应的模块“@/views/xxx.vue”或其相应的类型声明
// 解决方法很简单，一开始的时候env.d.ts是空文件，我们可以在项目的env.d.ts中引入如下代码：
declare module '*.vue' {
    import { DefineComponent } from 'vue'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>
    export default component
}