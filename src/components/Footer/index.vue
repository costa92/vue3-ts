<template>
  <el-footer class="footer bg-purple">
    <el-breadcrumb separator="|">
      <el-breadcrumb-item><a>网站地图</a></el-breadcrumb-item>
      <el-breadcrumb-item>Powered By Golang REST Framework + Vue3</el-breadcrumb-item>
    </el-breadcrumb>
  </el-footer>
</template>

<script setup lang="ts">

</script>
<style scoped lang="scss">
footer {
  z-index: 999;
  border-top: 1px solid var(--el-border-color);
  width: 100%;
  background-color: var(--el-bg-color-overlay);
  height: 70px;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  clear: both;
  bottom: 0;
}

</style>