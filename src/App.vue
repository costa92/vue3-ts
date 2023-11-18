<template>
  <el-config-provider :locale="locale">
    <div class="app_container">
      <el-container>
        <el-header class="header">
          <Navbar :active-index="activeIndex" />
        </el-header>
        <el-main class="main">
          <router-view />
        </el-main>
        <Footer />
      </el-container>
    </div>
  </el-config-provider>
</template>
<script setup lang="ts">
import { computed } from "vue";
import ElementZhCn from "element-plus/dist/locale/zh-cn.mjs";
import ElementEn from "element-plus/dist/locale/en.mjs";
import Navbar from "@/components/Navbar/index.vue";
import Footer from  "@/components/Footer/index.vue"
import { settingsStore } from "@/store";
import {useRouter} from "vue-router";
const router = useRouter()
const settingsState = settingsStore();
const language = computed(() => settingsState.config.language);
const activeIndex =  computed( () => settingsState.config.active);
const { VITE_BASE_API } = process.env
// 监听路由变化
watch(() => router, (newValue) => {
  console.log(newValue)
});

console.log(VITE_BASE_API)

const locale = computed(() => {
  switch (language.value) {
    case "zh-cn":
      return ElementZhCn;
    case "en":
      return ElementEn;
    default:
      return ElementZhCn;
  }
});
</script>

<style lang="scss">
// 去掉边距
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  display: block;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  padding-top: 0;
  overflow-x: hidden;
}
body > .el-container {
  height:100%;
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  padding-bottom: var(--footer-height);
  overflow-y: auto;
}
.el-header, .el-footer {
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-header {
  padding: 0;
}
.header{
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
  border-bottom: 1px solid var(--el-border-color);
}
.el-main {
  color: #333;
  text-align: center;
}
.router-view {
  color: var(--el-text-color-primary);
  background-color: var(--el-background-color-base);
  transition: background 1s, color 0.6s;
  width: 100%;
  height: max-content;
  min-height: 100vh;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: 0 auto;
  -webkit-overflow-scrolling: touch;
  animation-timing-function: linear;
}
</style>