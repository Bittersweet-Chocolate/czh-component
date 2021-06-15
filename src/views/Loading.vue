<!--
 * @Author: czh
 * @Date: 2021-06-08 21:00:08
 * @LastEditTime: 2021-06-15 23:17:42
 * @LastEditors: czh
 * @Description: 
-->
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
<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    return {
      loadingTitle: ref("这是加载标题"),
      loadingMesage: ref("这是加载信息"),
      loadingTime: ref(2000)
  }
}
}
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
