<template>
  <el-config-provider :locale="locale">
    <div class="app_container">
      <el-container>
        <el-header class="header">
          <Navbar :active-index="{ activeIndex }"/>
        </el-header>
        <el-main class="main">
          {{ activeIndex }}
          <router-view/>
        </el-main>
        <el-footer class="footer">Footer</el-footer>
      </el-container>
    </div>
  </el-config-provider>
</template>
<script setup lang="ts">
import { computed } from "vue";

import ElementZhCn from "element-plus/dist/locale/zh-cn.mjs";
import ElementEn from "element-plus/dist/locale/en.mjs";
import Navbar from "@/components/Navbar/index.vue";
import { settingsStore } from "@/store";
import {useRouter} from "vue-router";
const router = useRouter()
const settingsState = settingsStore();
const language = computed(() => settingsState.config.language);
const activeIndex =  computed( () => settingsState.config.active);

// 监听路由变化
watch(() => router, (newValue) => {
  console.log(newValue)
});


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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  padding-top: 0;
}

.app_container {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

body > .el-container {
  height:100%;
  margin-bottom: 0;
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
}

.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 70px;
}

.el-header {
  padding: 0;
}

.footer {
  width: 100%;
  align-items: center;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 180px;
  height: 100%;
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