<template>
  <section class="home">
    <el-row :gutter="20">
      <!--  左边  start  -->
      <el-col
        :span="15"
        :xs="16"
        :offset="2"
        class="left"
      >
        <el-row :gutter="20">
          <el-col>
            <div class="grid-content radius-10">
              <!--   banner start -->
              <HomeBanner />
              <!--    banner end -->
              <article class="article">
                <el-card class="box-card">
                  <template #header>
                    <div class="card-header">
                      <span class="card-title">🆕 最新文章</span>
                    </div>
                  </template>
                  <!-- 文章列表 -->
                  <ul>
                    <li v-for="item in articles" :key="item.id">
                      <ArticleItem :article="item" />
                    </li>
                  </ul>
                  <p class="isLoading" v-if="loading" v-loading="loading"
                     element-loading-text="玩命加载中"
                     element-loading-background="#ffffff"></p>
                  <p v-if="!noMore && articles.total">
                    <el-divider>我是有底线的</el-divider>
                  </p>
                </el-card>
              </article>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <!--  左边  end  -->
      <!--  右边  start-->
      <el-col :span="2" :lg="5" :md="6" :xl="4" class="right">
        <div class="grid-content bg-purple">
          <Aside />
        </div>
      </el-col>
      <!--  右边  end-->
    </el-row>
  </section>
</template>

<script lang="ts" name="home" setup>
import { ref,reactive } from 'vue';
import ArticleItem from "@/components/ArticleItem/index.vue";
import { getArticles,getBanners } from "@/api"
import { ArticleData } from "@/api/articles/model.ts";
import HomeBanner from "@/components/Banner/HomeBanner/index.vue"
import Aside from "@/components/Aside/index.vue"
import {sleepBack, sleepTime} from "@/hooks"


const articles:ArticleData[] = reactive<ArticleData[]>([]);
const articlesTotal = ref(0)
const loading = ref(false)
// 是否还有更多需要加载
const noMore = computed(() => articles.length < articlesTotal.value);

// 文章请求参数
const article_params = {
  page: 1,
  size: 5,
  ordering: '-created_time',
}

async function init (){
  window.addEventListener("scroll", scrollHandle, false)
  await loadArticle()
}

onMounted(() => {
  init()
})

// 加载下一页
 const  loadArticle = async () => {
  console.log("加载下一页了")
   await getArticles(article_params).then((response) => {
    let { items,total } = response
    articles.push(...items);
    articlesTotal.value = total
    loading.value = false;
    article_params.page = article_params.page + 1
  })
}

// 页面滚动事件
const scrollHandle = () => {
  const scrollHeight = document.body.scrollHeight || document.documentElement.scrollHeight
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
  const clientHeight = document.documentElement.clientHeight
  const distance = scrollHeight - scrollTop - clientHeight
  if (distance <= 400 && noMore.value) {
    if (!loading.value) {
      loading.value = true;
      sleepBack(3000,loadArticle())
    }
  }
}

onUnmounted(() => {
  // 组件卸载时，停止监听
  window.removeEventListener("scroll", scrollHandle, false)
})




defineExpose({
  articles,
  ArticleItem,
  loading,
  noMore,
})

</script>
<style lang="scss">
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 10px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.bg-purple {
  background: #d3dce6;
}
.left .right{
  border-radius: 10px
}
.radius-10{
  border-radius: 10px
}

.article {
  background-color: #9900ff;
  border-radius: 10px;
  .el-card__body{
    padding: 0 !important;
  }
  ul {
    list-style-type: none;
    margin: 0;
    li {
      border-bottom: 1px solid var(--el-card-border-color);
    }
  }
}
.article .card-header {
  flex: 1 0 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  line-height: 20px;
}
.article .el-card {
  border-radius: var(--el-card-border-radius);
  border: 1px solid var(--el-card-border-color);
  background-color: var(--el-card-bg-color);
  overflow: hidden;
  color: var(--el-text-color-primary);
  transition: var(--el-transition-duration);
}
.article .card-title {
  color: var(--el-color-primary);
  font-size: 23px;
}

.isLoading {
  padding: 30px;
  font-size: 30px;
}
</style>