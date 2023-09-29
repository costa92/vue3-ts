<template>
  <el-row :gutter="20">
    <!--    header left -->
    <el-col
      class="header-left"
      :span="4"
    />
    <!--    header middle -->
    <el-col
      class="header-middle"
      :span="16"
    >
      <el-menu
        :default-active="activeIndex"
        class="el-menu-nav"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item
          v-for="item in list"
          :key="item.url"
          :index="item.url"
        >
          {{ item.name }}
        </el-menu-item>
      </el-menu>
    </el-col>
    <!--   header right -->
    <el-col
      class="header-right"
      :span="4"
    />
  </el-row>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
import { list } from "./data.ts"
const router = useRouter();
const props = defineProps({
    activeIndex: {
      type: String,
      required: true,
    }
});

const activeIndex = ref(props.activeIndex);
const handleSelect = (index: string) => {
  activeIndex.value = index;
  router.push(index).catch(err => {
    console.log(err)
  });
};
</script>

<style scoped lang="scss">
.el-menu {
  border-bottom: 0;
}
.el-menu-nav {
  list-style: none;
  position: relative;
  margin: 0;
  padding-left: 0;
}
.header-middle {
  border-bottom: 0;
}
</style>