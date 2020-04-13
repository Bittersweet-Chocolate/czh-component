<template>
  <div class="container">
    <cTooltip v-for="(item,index) in type" :key="index">
      <cButton plain type="success">左 - left</cButton>
    </cTooltip>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: ["left", "top", "bottom", "right"],
      text: ["这是左边", "这是上边", "这是下边", "这是右边"]
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 500px;
  margin: 30px auto;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  button {
    margin: 0 10px;
  }
}
</style>
