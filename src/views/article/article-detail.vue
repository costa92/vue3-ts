<template>
  <div v-title="articleData.title+'-'">
    <div class="detail-page">
      <div class="detail-left">
        <!--        这是左边部分-->
        <!--    万维广告位-->
<!--        <div class="wwads-cn wwads-vertical wwads-sticky advertising" data-id="259"></div>-->
      </div>
      <div class="detail-center">
        <div class="main detail-card">
          111 {{ VITE_APP_NAME }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="ArticleDetail">
import {reactive} from "vue";
import { settingsStore } from "@/store";

const settingsState = settingsStore();
const { VITE_APP_NAME } = process.env
console.log(VITE_APP_NAME)
// 文章详情数据
const articleData = reactive({
  title: "",
})

articleData.title = "文章"
onMounted(() => {
  settingsState.config.active = "/article"
  settingsState.setConfig(settingsState.config)
})

</script>
<style scoped lang="scss">
.detail {
  .detail-page {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;

    .detail-left {
      width: 15%;
    }

    .detail-center {
      width: 70%;

      .main {
        h1 {
          text-align: center;
          margin: 20px 0;
        }
      }
    }
  }
}
</style>