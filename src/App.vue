<template>
  <el-config-provider :locale="locale">
    <div class="app_container">
      <el-container>
        <el-header class="header">
          <Navbar />
        </el-header>
        <el-main class="main">
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

const settingsState = settingsStore();
const language = computed(() => settingsState.config.language);
const router = useRouter()

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

<style lang="less">
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

.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 70px;
  height: 72px;
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
  line-height: 180px;
}

body > .el-container {
  margin-bottom: 0;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>