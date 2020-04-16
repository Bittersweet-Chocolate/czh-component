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
<script>
export default {
  data() {
    return {
      loading: true,
      loadingMesage: "组件填充中...",
      loadingTitle: "CZH UI"
    };
  }
};
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
