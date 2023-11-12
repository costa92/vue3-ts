<template>
  <div class="recommend-comp">
    <el-card class="card-hover">
      <template #header>
        <span class="card-title recommend-title no-choose">👍 推荐阅读</span>
      </template>
      <div class="recommend">
        <span v-for="article in recommend"
              :key="article.id" class="recommend-hover" @click="toDetail(article.id)">
          <el-image
            style="width: 100%;height: 76px"
            :src="article.cover"
            :fit="'fill'">
            <template #placeholder>
              <span v-loading="true" class="loading"></span>
            </template>
          </el-image>
          <p class="no-choose">{{ article.title }}</p>
        </span>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts" name="AsideRecommend">
  import {ArticleData} from "@/api/articles/model.ts";
  import {reactive} from "vue";
  import {getRecommends} from "@/api";
  const recommend:ArticleData[] = reactive<ArticleData[]>([]);
  onMounted(() => {
     recommends()
  })

  async function recommends() {
    try {
      let res =  await getRecommends({})
      recommend.push(...res.items)
    }catch (e) {
      console.log(e)
    }
}

function toDetail(id:number ){
  console.log(id)
}

</script>
<style lang="scss">
.recommend-title {
  display: flex;
}
.recommend-comp {
  .recommend {
    display: flex;
    flex-wrap: wrap;
    transition: all 0.5s;
  }
  &:hover {
    span {
      opacity: 0.5;
    }
  }
  @media only screen and (max-width: 1490px) {
    span {
      width: 100px;
      &:hover {
        opacity: 1;
      }
      p {
        text-align: center;
        color: var(--el-text-color-regular);
        margin: 7px 0;
        line-height: 20px;
        font-size: 14px;

        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  @media (max-width: 2000px) and (min-width: 1490px){
    span {
      width: 120px;
      &:hover {
        opacity: 1;
      }
      p {
        text-align: center;
        color: var(--el-text-color-regular);
        margin: 7px 0;
        line-height: 20px;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }


  span:nth-child(odd) {
    margin-right: 12px;
  }
}

.loading {
  display: flex;
  justify-content: center;
  padding-top: 80px;
}

</style>