<template>
  <section class="article-item">
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content ep-bg-purple" style="background-color: #9900ff">
          <el-image
            :src="article.cover"
            class="cover-img"
            :fit="'fill'"
            lazy
          />
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content ep-bg-purple describe" style="background-color: red">
          <h2>{{ article.title }}</h2>
          <p class="abstract">
            {{ article.abstract }}
          </p>
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
  display: flex;
  padding: 10px;
  margin-bottom: 10px;
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
.describe{
  text-align: left;
  h2 {
    line-height: 10px;
    padding-top: 10px;
    margin-top: 10px;
  }
  p {
    display: flex;
    line-height: 18px;
  }
}

//  .item-cover {
//    width: 270px;
//    padding: 3px;
//    display: inline-block;
//    border: 1px solid var(--el-bg-color);
//    height: 180px;
//    .el-image {
//      border-radius: 10px;
//    }
//  }
//  .describe {
//    margin-left: 15px;
//    h2 {
//      color: var(--el-text-color-primary);
//      margin: 0;
//      line-height: 28px;
//      display: flex;
//      padding-left: 2px;
//    }
//    p {
//      margin: 15px 0;
//      color: var(--el-text-color-secondary);
//      line-height: 28px;
//      overflow: hidden;
//      -webkit-line-clamp: 4;
//      display: -webkit-box;
//      -webkit-box-orient: vertical;
//      text-align: left;
//    }
//    .info {
//      display: flex;
//      justify-content: center;
//      align-items: center;
//      color: var(--el-text-color-placeholder);
//      span {
//        margin: 0 5px 0 15px;
//      }
//    }
//  }
//}
//
//.el-divider--horizontal {
//  margin: 5px 0 !important;
//}
//.no-choose {
//  -webkit-user-select: none;
//  -moz-user-select: none;
//  -ms-user-select: none;
//  user-select: none
//}
//
//.article-item-hover,.article-title-hover,.article-abstract-hover,.article-tag-hover,.card-hover,.ranking-hover,.detail-active-hover,.detail-context-hover {
//  transition: all .5s
//}
//
//.article-item-hover:hover {
//  box-shadow: 0 0 10px 5px #3037421a;
//  transform: translateY(-5px);
//  transition-delay: 0s!important
//}
//
//.article-title-hover:hover {
//  color: var(--el-color-primary)!important;
//  cursor: pointer
//}
//
//.article-abstract-hover:hover {
//  color: var(--el-text-color-regular)!important;
//  cursor: pointer
//}
</style>