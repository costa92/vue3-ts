<template>
  <section class="article-item">
    <el-row :gutter="20">
      <el-col :span="7">
        <div class="grid-content-img">
          <el-image
            :src="article.cover"
            class="cover-img"
            :fit="'fill'"
            lazy
          />
        </div>
      </el-col>
      <el-col :span="17">
        <div class="describe">
          <h2>{{ article.title }}</h2>
          <p class="abstract">
            {{ article.abstract }}
          </p>
          <div class="info">
            <span>时间：2023-10-01</span>
            <span>时间：2023-10-01</span>
            <span>时间：2023-10-01</span>
          </div>
        </div>
      </el-col>
    </el-row>
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
    article,
  })
</script>
<style scoped lang="scss">
.article-item {
  display: flow;
  padding: 10px;
  border-radius: 10px;
}
.el-image{
  border-radius: 10px;
  width: 270px;
  img {
    border-radius: 10px;
    width: 100%;
  }
}
.grid-content-img {
  margin-top: 8px
}

@media screen and (max-width: 1490px){
  .describe{
    text-align: left;
    margin-left: 50px;
    //width: calc(100% - 160px);
    //margin-left: calc(100% - 160px);
    h2{
      margin: 0;
    }
    p {
      font-size: 18px;
      display: flex;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0;
      margin-inline-end: 0;
      height: 114px;
    }
  }
  .info {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--el-text-color-placeholder);
    span {
      margin: 0 5px 0 15px;
    }
  }
}

@media (max-width: 2000px) and (min-width: 1490px){
.describe{
  text-align: left;
  h2{
    margin: 0;
  }
  p {
    font-size: 18px;
    display: flex;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0;
    margin-inline-end: 0;
    height: 114px;
  }
}
  .info {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--el-text-color-placeholder);
    span {
      margin: 0 5px 0 15px;
    }
  }
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>