<template>
  <section class="aside animate__animated animate__fadeInRight">
    <AsideRecommend />
    <Tags />
  </section>
</template>
<script setup lang="ts" name="Aside">
import AsideRecommend from "@/components/Aside/Recommend/index.vue";
import Tags from "@/components/Aside/Tags/index.vue";
</script>

<style lang="scss">
.tag-box {
  margin-top: 10px;
}
</style>