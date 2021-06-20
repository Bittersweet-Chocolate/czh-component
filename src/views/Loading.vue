<!--
 * @Author: czh
 * @Date: 2021-06-08 21:00:08
 * @LastEditTime: 2021-06-21 00:22:23
 * @LastEditors: czh
 * @Description: 
-->
<template>
  <div>
    <c-loading
      :time="time"
      :title="title"
      :message="message"
      ref="loadingRef"
      style="z-index: 98 !important"
    ></c-loading>
    <div class="container">
      <form class="loading-form">
        <p>加载标题： <input type="text" v-model="title" /></p>
        <p>加载信息： <input type="text" v-model="message" /></p>
        <p>加载时间(ms)： <input type="number" v-model="time" /></p>
      </form>
      <c-button @click="startLoading">重新加载</c-button>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent } from "vue"
export default defineComponent({
  name: "showLoading",
  setup() {
    const title = ref<String>("这是加载标题");
    const message = ref<String>("这是加载信息");
    const time = ref<Number>(2000);
    const loadingRef = ref<null | HTMLElement>(null);
    const startLoading = () => {
      if (time.value < 500) {
        return;
      }
      
    };
    return {
      title,
      message,
      time,
      startLoading,
    };
  },
});
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
  p {
    font-size: 14px;
    text-align: right;
  }
}
</style>
