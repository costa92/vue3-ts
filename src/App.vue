<template>
<!--  &lt;!&ndash;使用 router-link 组件进行导航。通过传递 `to` 来指定链接 &ndash;&gt;-->
<!--  <router-link to="/">Go Home</router-link><br/>-->
<!--  <router-link to="/about">Go About</router-link>-->
<!--  &lt;!&ndash; 路由匹配到的组件将渲染在这里 &ndash;&gt;-->
  <el-config-provider :locale="locale">
    <router-view/>
  </el-config-provider>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
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