<template>
  <section class="home">
    <h1>{{ i18nRouter('home') }}</h1>
    <el-button type="primary">测试按钮</el-button>
  </section>
</template>
<script lang="ts" setup>
import { i18nRouter } from "@/utils";
</script>

