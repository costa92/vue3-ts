<script lang="ts" setup>
import { i18nRouter } from "@/utils";


interface Banner {
  content: string,
  id: number,
  link: string,
}

interface BannerList {
  [index: number]: Banner
}

const bannerHeight:number =  400
const homeBannerNewsList: BannerList= [
  {
    content:"https://oss.cuiliangblog.cn/carousel/2023_01_12_20_20_01_690-1673526001798.jpg",
    id:1,
    link:""
  },
  {
    content:"https://oss.cuiliangblog.cn/carousel/2023_03_23_16_55_04_534-1679561704816.jpg",
    id:2,
    link:""
  },
]

</script>

<template>
  <section class="home">
    <el-row :gutter="20">
<!--  左边  start  -->
      <el-col :span="14" :offset="2" class="left">
        <el-row :gutter="20" >
          <el-col>
            <div class="grid-content radius-10">
<!--   banner start -->
              <div class="block indexBanner radius-10"  :height="bannerHeight + 'px'">
                  <el-carousel class="radius-10" :height="bannerHeight + 'px'" :interval="2000" id="el-carousel">
                    <el-carousel-item v-for="(item,index) in homeBannerNewsList" :key="index">
                      <img ref="bannerHeight"  class="indexBannerImg" :src="item.content">
                    </el-carousel-item>
                  </el-carousel>
              </div>
 <!--    banner end -->
              <article class="article">
                <el-card class="box-card">
                  <template #header>
                    <div class="card-header">
                      <span class="card-title">🆕 最新文章</span>
                    </div>
                  </template>
<!--                  <ul>-->
<!--                    <li v-for="item in article.list" :key="item.id">-->
<!--                      <ArticleItem :article="item"></ArticleItem>-->
<!--                    </li>-->
<!--                  </ul>-->
<!--                  <p class="isLoading" v-if="loading" v-loading="loading"-->
<!--                     element-loading-text="玩命加载中"-->
<!--                     element-loading-background="#ffffff"></p>-->
<!--                  <p v-if="!noMore && article.count">-->
<!--                    <el-divider>我是有底线的</el-divider>-->
<!--                  </p>-->
                </el-card>
              </article>
            </div>
          </el-col>
        </el-row>
      </el-col>
<!--  左边  end  -->
<!--  右边  start-->
      <el-col :span="6" class="right">
        <div class="grid-content bg-purple">
          11
        </div>
      </el-col>
<!--  右边  end-->
    </el-row>

  </section>
</template>


<style lang="scss">
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
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

.indexBannerImg {
  height:100%;
  width:100%;
}

.el-carousel__item img {
  color: #475669;
  font-size: 14px;
  opacity: 0.80;
  line-height: 400px;
  margin: 0;
  border-radius: 10px
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.el-carousel__indicators {
  //left: unset;
  //transform: unset;
  //right: 2%;
  top: 75%;
  margin-bottom: 10px;
  position: absolute;
}
.el-carousel__button {
  width: 10px;
  height: 10px;
  border: none;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.2);
}
// 指示器激活按钮
.is-active .el-carousel__button {
  background: #3f8ec8;
}
.el-carousel el-carousel--horizontal {
  border-radius: 10px
}
.el-carousel__container {
  border-radius: 10px
}

.article {
  margin-top: 20px;
  background-color: #9900ff;
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    li {
    }
  }
}

.isLoading {
  padding: 30px;
  font-size: 30px;
}
</style>
customizable