import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import path from "path";
import vue from '@vitejs/plugin-vue'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
    AutoImport({
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
        enabled: true
      },
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    // 设置别名
    alias:{
      "@": path.resolve(__dirname, "src"),
      store: path.resolve(__dirname, "src/store"),
      views: path.resolve(__dirname, "src/views"),
      utils: path.resolve(__dirname, "src/utils"),
      i18n: path.resolve(__dirname, "src/i18n"),
    },
  },
  // 设置服务端口
  server: {
    host: '0.0.0.0',
    port: 3010,
    open: true
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
})
