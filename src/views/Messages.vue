<template>
  <div>
    <div class="container" @click="message">
      <cButton
        v-for="(item,index) in msgType"
        :key="index"
        :plain="index>3?true:false"
        :type="item"
        :data-index="index"
      >{{msgText[index]}}</cButton>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msgType: ['default t', 'info b', 'warning l', 'danger r',
        'success lt', 'info lb', 'warning rt', 'danger rb'],
      msgText: ['上弹出', '下弹出', '左弹出', '右弹出',
        '左上弹出', '左下弹出', '右上弹出', '右下弹出']
    }
  },
  methods: {
    message (el) {
      this.$message({
        type: this.msgType[el.target.dataset.index],
        text: this.msgText[el.target.dataset.index]
      })
    }
  }
}
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
button {
  margin: 10px;
}
</style>
