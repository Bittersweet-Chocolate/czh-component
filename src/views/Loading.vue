<template>
<div>
  <cLoading  :title="loadingTitle" :message="loadingMesage"></cLoading>
  <div class="container">
    <cButton></cButton>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return { loadingTitle: "这是加载标题", loadingMesage: "这是加载信息" };
  },
  beforeDestroy(){

  }
};
</script>
<style lang="scss" scoped>
.container{
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
</style>
