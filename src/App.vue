<template>
<!--  &lt;!&ndash;使用 router-link 组件进行导航。通过传递 `to` 来指定链接 &ndash;&gt;-->
<!--  <router-link to="/">Go Home</router-link><br/>-->
<!--  <router-link to="/about">Go About</router-link>-->
<!--  &lt;!&ndash; 路由匹配到的组件将渲染在这里 &ndash;&gt;-->
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>