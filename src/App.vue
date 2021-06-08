<!--
 * @Author: czh
 * @Date: 2021-06-08 21:00:08
 * @LastEditTime: 2021-06-08 23:24:43
 * @LastEditors: czh
 * @Description: 
-->
<template>
  <div id="app">
    <cLoading time="1000" :title="loadingTitle" :message="loadingMesage"></cLoading>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/Buttons">按钮</router-link>|
      <router-link to="/Messages">弹出层</router-link>|
      <router-link to="/Tooltips">提示标签</router-link>|
      <router-link to="/Tabs">选项卡</router-link> |
      <router-link to="/Loading">加载ing</router-link>
    </div>
    <router-view />
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    const loading = ref(true)
    const loadingMesage = ref('组件填充中...')
    const loadingTitle = ref('mine UI')
    return {
      loading,
      loadingMesage,
      loadingTitle
    };
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
