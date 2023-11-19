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
import { settingsStore } from "@/store";
import { list } from "./data.ts"

const blogTitle = process.env.VITE_APP_NAME
const blogLogo = process.env.VITE_LOGO
const settingsState = settingsStore();
const router = useRouter();
const props = defineProps({
    activeIndex: {
      type: String,
      required: true,
    }
});

onUnmounted(() => {
  console.log("Navbar:"+11)
})
// 监听路由变化
watch(() => router.currentRoute.value.fullPath, (newValue) => {
  console.log("Navbar:"+ newValue)
  activeIndex.value = settingsState.config.active;
});

const activeIndex = ref(props.activeIndex);
const handleSelect = (index: string) => {
  console.log("handleSelect index:"+ index)
  activeIndex.value = index;
  router.push(index).catch(err => {
    console.log(err)
  });
};


// 定义一个函数check，接受两个字符串参数rule和pathname
const check = (rule:string,  pathname:string) => {
  // 用replace方法把rule中的参数部分替换成`([^/]+)`，得到一个新的字符串ruleRegExpStr
  // `([^/]+)`表示匹配任意个非/的字符，并捕获它们
  const ruleRegExpStr = rule.replace(/:[^/]+/g, `([^/]+)`);
  // 用ruleRegExpStr创建一个正则表达式对象ruleMatchRegExp，注意用^和$表示字符串的开始和结束
  const ruleMatchRegExp = new RegExp(`^${ruleRegExpStr}$`);

  // 用match方法匹配ruleMatchRegExp，得到一个数组或null
  const ruleMatched = pathname.match(ruleMatchRegExp);

  // 用match方法匹配rule中的参数部分，例如:name或:age，得到一个数组或null
  const paraMatched = rule.match(/:[^/]+/g);

  // 如果ruleMatched不是null，说明匹配成功
  if (ruleMatched) {
    // 创建一个空对象res，用于存储参数名和参数值的映射关系
    const res = {};
    // 如果paraMatched不是null，说明规则中有参数部分
    if (paraMatched) {
      // 定义一个变量index，表示参数值在ruleMatched中的索引位置，从1开始
      let index = 1;
      // 遍历paraMatched中的参数名
      for (const key of paraMatched) {
        // 把参数名去掉冒号后作为res的属性名，把ruleMatched中对应的参数值作为res的属性值
        res[key.slice(1)] = ruleMatched[index++];
      }
    }
    // 返回res对象
    return res;
  }

  // 否则返回null
  return null;
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
    border-radius: 50%;
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