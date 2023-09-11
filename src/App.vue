<template>
  <el-config-provider :locale="locale">
    <div class="app_container">
      <el-container>
        <el-header class="header">
          <router-view />
        </el-header>
        <el-main class="main">
          Main
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
import { settingsStore } from "@/store";
const settingsState = settingsStore();
const language = computed(() => settingsState.config.language);

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

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
// width: 1200px;
  padding-top: 0;
}

.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 10px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 0px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>