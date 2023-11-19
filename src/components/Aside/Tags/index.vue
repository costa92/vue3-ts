<template>
  <el-card class="card-hover tag-box">
    <template #header>
      <span class="card-title tags-title no-choose">🏷️ 所有标签</span>
    </template>
    <div class="all-tag">
      <TagCloud></TagCloud>
    </div>
  </el-card>
</template>

<script setup lang="ts" name="Tags">
  import TagCloud from  "@/components/Aside/Tags/TagCloud.vue"
</script>

<style scoped lang="scss">
.tags-title {
  display: flex;
}
</style>