<template>
  <section class="article-item">
    {{ article.title }}
  </section>
</template>

<script setup lang="ts">
  const props = defineProps({
    // 参数
    article:{
      type: Object,
      required: true,
    }
  })
  const article =  props.article
  defineExpose({
    article
  })

</script>
<style scoped lang="scss">

</style>