<template>
  <section class="about">
    <div class="page">
      <div>
        <el-collapse v-model="activeNames">
          <el-collapse-item v-for="item in about" :key="item.id" :title="item.title" :name="item.id">
            <MarkDown :text="item.content"></MarkDown>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import MarkDown from "@/components/MarkDown/index.vue"
// 关于页数据
import {getAbout} from "@/api";
const about = ref([])
// 获取关于页数据
async function aboutData() {
  let result  = await getAbout({});
  about.value.push(...result.items)
}

onMounted(() => {
  aboutData()
})
onActivated(() => {
  console.log("执行onActivated")
  // store.commit('setMenuIndex', '6')
})
// 默认展开的数据
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const activeNames = ref([1]);
</script>

<style lang="scss">
.el-collapse-item__header {
  font-size: 25px !important;
  color: var(--el-color-primary) !important;
  padding-left: 1em;
}
</style>