import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { pinia } from "@/store";
import { i18n } from "@/i18n";
import router from "@/router";
import App from './App.vue'
const app = createApp(App)
app.use(pinia)
// 该对象目前支持 size 与 zIndex 字段。
// size 用于改变组件的默认尺寸，zIndex 设置弹框的初始 z-index（默认值：2000）。
// 按照引入 Element Plus 的方式，具体操作如下：
app.use(ElementPlus,{ size: 'small', zIndex: 3000 })
app.use(i18n)
app.use(router)
app.mount('#app')
