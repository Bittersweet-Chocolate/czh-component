<template>
  <div>
    <div class="container">
      <cButton @click="open1" plain type="success">上弹出</cButton>
      <cButton @click="open2" plain type="info">下弹出</cButton>
      <cButton @click="open3" plain type="warning">左弹出</cButton>
      <cButton @click="open4" plain type="danger">右弹出</cButton>

      <cButton @click="open1" round type="success">左上弹出</cButton>
      <cButton @click="open2" round type="info">右上弹出</cButton>
      <cButton @click="open3" round type="warning">左下弹出</cButton>
      <cButton @click="open4" round type="danger">右下弹出</cButton>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    open1() {},
    open2() {},
    open3() {},
    open4() {}
  }
};
</script>
<style scoped>
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
button{
  margin: 10px
}
</style>
