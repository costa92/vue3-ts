<template>
  <el-row :gutter="20">
    <!--    header left -->
    <el-col
      class="header-left"
      :span="4"
    >
      <el-image
        style="width: 50px; height: 40px"
        :src="blogLogo"
        :fit="'fill'"/>
      <span class="no-choose">{{ blogTitle }}</span>

    </el-col>
    <!--    header middle -->
    <el-col
      class="header-middle"
      :span="12"
      :offset="1"
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
const blogTitle = process.env.VITE_APP_NAME
const blogLogo = process.env.VITE_LOGO

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

.header-left{
  margin-left: 20px;
  .el-image {
    top: 10px;
    border-radius: 8px;
  }
  img{
    border-radius: 8px;
    transition: all .8s;
  }
  span {
    padding-left: 10px;
    font-size: 22px
  }
}

.header-middle {
  border-bottom: 0;
}
</style>