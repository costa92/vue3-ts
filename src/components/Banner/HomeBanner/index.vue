<template>
  <div class="block indexBanner radius-10" :height="{ bannerHeight } + 'px'">
    <el-carousel
      id="el-carousel"
      class="radius-10"
      :height="bannerHeight + 'px'"
      :interval="2000"
    >
      <el-carousel-item
        v-for="(item,index) in homeBannerNewsList"
        :key="index"
      >
        <img
          ref="bannerHeight"
          class="indexBannerImg"
          :src="item.content"
          alt="banner_nae">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script setup lang="ts" name="HomeBanner">

import { Banner } from "@/api/banners/model.ts";
import {getBanners} from "@/api";
import {reactive, ref} from "vue";
const bannerHeight = ref(400);

const homeBannerNewsList: Banner[] = reactive<Banner[]>([])
onMounted(() => {
  getBannerList()
})

async function getBannerList(){
  try {
    let res = await getBanners({})
    let { items } = res
    homeBannerNewsList.length = 0;
    homeBannerNewsList.push(...items);
  }catch (e) {
    console.log(e)
  }
}
</script>

<style lang="scss">
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
  top: 90%;
  margin-bottom: 10px;
  position: absolute;
}

.el-carousel__button {
  width: 10px;
  height: 10px;
  border: none;
  border-radius: 50% !important;
  background-color: rgba(0, 0, 0, 0.2);
}
// 指示器激活按钮
.is-active .el-carousel__button {
  background: #3f8ec8;
  border-radius: 50% !important;
}
.el-carousel el-carousel--horizontal {
  border-radius: 10px
}
.el-carousel__container {
  border-radius: 10px
}
</style>