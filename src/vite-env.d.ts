// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly VITE_BASE_API: string
    readonly VITE_PUBLIC_PATH: string
    readonly MODE:string
    readonly VITE_APP_NAME:string
    readonly VITE_BASE_UPLOAD_API: string
    readonly VITE_USE_MOCK: boolean
    readonly VITE_LOGO: string
    // 更多环境变量...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}

// 找不到对应的模块“@/views/xxx.vue”或其相应的类型声明
// 解决方法很简单，一开始的时候env.d.ts是空文件，我们可以在项目的env.d.ts中引入如下代码：
declare module '*.vue' {
    import { DefineComponent } from 'vue'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>
    export default component
}

// 加上这个
declare module '*.mjs'
