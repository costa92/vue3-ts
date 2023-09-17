<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
  >
    <el-menu-item
        v-for="item in list"
        :key="item.url"
        :index="item.url"
    >{{ item.name }}</el-menu-item
    >
  </el-menu>
</template>
<script setup lang="ts">
import {useRouter} from "vue-router";
import { ref } from "vue";
const router = useRouter();

const props = defineProps({
    activeIndex: {
      // eslint-disable-next-line no-undef
      type: String,
      required: true,
    }
});
const activeIndex = ref(props.activeIndex.activeIndex);
const handleSelect = (index: string) => {
  console.log(index)
  activeIndex.value = index;
  router.push(index).catch(err => {
    console.log(err)
  });
};



const list = [
  {
    name: "首页",
    url: "/",
  },
  {
    name: "关于",
    url: "/about",
  },
];
</script>

<style scoped lang="less">

</style>