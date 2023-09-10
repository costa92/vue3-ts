# Vue 3 + TypeScript + Vite

## 安装 
```shell
npm init vite@latest
// 选择vue3
// 选择ts
```

## 安装 unplugin-auto-import 和 unplugin-vue-components
```shell
pnpm add -D unplugin-auto-import
pnpm add -D unplugin-vue-components
```
在刚才的 vite.config.ts 文件中修改：
```ts
AutoImport({
  imports: ["vue", "vue-router"],
  resolvers: [ElementPlusResolver()],
  // 新增如下
  dts: "src/auto-import.d.ts",
  eslintrc: {
    enabled: true
  },
})
```
eslintrc 中 enabled 设置为 true，保存之后会随即在跟目录下生成 .eslintrc-auto-import.json 文件

## 文档
1. [设置主题](https://juejin.cn/post/7224145268739620923)
2. [unplugin-auto-import 和 unplugin-vue-components 的正确使用方式](https://blog.csdn.net/goodcto/article/details/130022782)
3. [vue3-element-admin](https://github.com/jack-pearson/vue3-element-admin)