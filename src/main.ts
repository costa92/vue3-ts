import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

import store from '@/store/index.ts'
import router from '@/router/index.ts'

const app = createApp(App)
// 该对象目前支持 size 与 zIndex 字段。
// size 用于改变组件的默认尺寸，zIndex 设置弹框的初始 z-index（默认值：2000）。
// 按照引入 Element Plus 的方式，具体操作如下：
app.use(ElementPlus,{ size: 'small', zIndex: 3000 })
app.use(store)
app.use(router)
app.mount('#app')
