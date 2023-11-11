import { defineConfig,loadEnv,ConfigEnv,type PluginOption } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import path from "path";
import vue from '@vitejs/plugin-vue'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { viteMockServe} from 'vite-plugin-mock'
import GlobPlugin from 'vite-plugin-glob'
// https://vitejs.dev/config/
export default defineConfig( ({command, mode }:ConfigEnv) => {
    console.log(command)
    // 获取环境变量
    const env = loadEnv(mode, process.cwd());
    console.log(env.VITE_USE_MOCK)
    const plugins =  createPlugins(env.VITE_USE_MOCK)
    return {
       define: {
           'process.env': env
       },
       plugins: plugins,
       resolve: {
           // 设置别名
           alias:{
               "@": path.resolve(__dirname, "src"),
               store: path.resolve(__dirname, "src/store"),
               views: path.resolve(__dirname, "src/views"),
               hooks: path.resolve(__dirname, "src/hooks"),
               utils: path.resolve(__dirname, "src/utils"),
               i18n: path.resolve(__dirname, "src/i18n"),
               types: path.resolve(__dirname, "src/types"),
               layout: path.resolve(__dirname, "src/layout"),
               api: path.resolve(__dirname,"src/api")
           },
       },
       // 设置服务端口
       server: {
           host: '0.0.0.0',
           port: 3010,
           open: true,
           proxy: {
               '/api': {
                   target: env.VITE_BASE_API,
                   changeOrigin: true,
                   rewrite: (path) => path.replace(/^\/api/, '')
               }
           }
       },
       css: {
           // css预处理器
           preprocessorOptions: {
               scss: {
                   additionalData: `
          @use "@/styles/main.scss" as globalScss;
          @use "@/styles/element/index.scss" as *;
        `, // 在此引用
               },
           },
       },
   }
})


export function createPlugins(enableMock){
    const vitePlugins: (PluginOption)[] = [vue()];
    vitePlugins.push(GlobPlugin({}))
    if (enableMock === "true") {
        vitePlugins.push(viteMockServe(
            {
                mockPath: "./src/mock",
                watchFiles: true, // 监视文件更改
                //这样可以控制关闭mock的时候不让mock打包到最终代码内
                injectCode: `import { setupProdMockServer } from '@/mock';
                    setupProdMockServer();
                `,
            }
        ))
    }

    vitePlugins.push(
        Components({
            resolvers: [ElementPlusResolver()],
        })
    )

    vitePlugins.push( AutoImport({
        resolvers: [ElementPlusResolver()],
        imports: ['vue', 'vue-router', 'pinia'],
        include: [
            /\.[tj]sx?$/,
            /\.vue$/,
            /\.vue\?vue/,
        ],
        // 新增如下
        dts: "src/auto-import.d.ts",
        eslintrc: {
            enabled: true,
        },
    }),)

    return vitePlugins;
}
