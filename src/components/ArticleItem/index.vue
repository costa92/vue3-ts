<template>
  <section class="article-item">
    <el-row :gutter="20" class="article-row">
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
        <div class="describe no-choose">
          <h2 class="article-title-hover" @click="toDetail(article.id)">{{ article.title }}</h2>
          <p class="abstract">
            {{ article.abstract }}
          </p>
          <div class="info">
            <span>时间：{{ timeAgo(article.create_time * 1000) }}</span>
            <span>浏览数： {{ article.viewing }}</span>
            <span>分类：{{ article.category }}</span>
          </div>
        </div>
      </el-col>
      <el-divider></el-divider>
    </el-row>
  </section>
</template>
<script setup lang="ts">
  import  timeFormat  from "@/utils/formatTime"
  import {useRouter} from "vue-router";
  const {timeAgo} = timeFormat()
  const router = useRouter()
  const props = defineProps({
    // 参数
    article:{
      type: Object,
      required: true,
    }
  })

  // 跳转文章详情页
  const toDetail = (detailID) => {
    router.push({path: `/detail/article/${detailID}`})
  }

  const article =  props.article
  defineExpose({
    article,
    timeAgo,
  })
</script>
<style scoped lang="scss">
.article-item {
  display: flex;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
}
.article-row{
  width: 100%;
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

@media only screen and (max-width: 1490px) {
  .describe{
    text-align: left;
    margin-left: calc((100% - 480px) / 2);
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
      padding-right: 3px;
    }
  }
  .info {
    display: flex;
    justify-content: right;
    align-items: center;
    padding-right: 3px;
    color: var(--el-text-color-placeholder);
    span {
      margin: 0 5px 0 15px;
    }
  }
}

@media (max-width: 2000px) and (min-width: 1490px){
.describe{
  text-align: left;
  margin-left: -20px;
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
    padding-right: 15px;
  }
}
  .info {
    display: flex;
    justify-content: right;
    padding-right: 20px;
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
.el-divider--horizontal {
  margin: 20px 0 !important;
}
</style>