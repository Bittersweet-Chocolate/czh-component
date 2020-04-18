<template>
  <div>
    <cLoading
      :time="loadingTime"
      ref="loading"
      :title="loadingTitle"
      :message="loadingMesage"
      style="z-index:98!important"
    ></cLoading>
    <div class="container">
      <form class="loading-form">
        <p>加载标题：
        <input type="text" v-model="loadingTitle" /></p>
        <p>加载信息：
        <input type="text" v-model="loadingMesage" /></p>
        <p>加载时间(ms)：
        <input type="number" v-model="loadingTime" /></p>
      </form>
      <cButton @click="startLoading">重新加载</cButton>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loadingTitle: "这是加载标题",
      loadingMesage: "这是加载信息",
      loadingTime: "2000"
    };
  },
  methods: {
    startLoading() {
      var time = this.loadingTime;
      if (time < 500) {
        this.$message({
          type: "warning t",
          text: "加载时间请大于500ms"
        });
        return;
      }
      this.$refs.loading.loading = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  padding: 10px 16px;
  max-width: 500px;
  margin: 30px auto;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
}
.loading-form {
  padding: 15px;
  p{
    font-size: 14px;
    text-align: right;
  }
}
</style>
