<template>
  <div>
    <div class="container">
      <cTab :active="user" :value.sync="user" @tab-change="onTabChange">
        <cTabPanel label="one" value="user">
          选项卡-one
          <br />测试数据
        </cTabPanel>
        <cTabPanel label="two" value="role">选项卡-two</cTabPanel>
        <cTabPanel label="three " value="config">选项卡-three</cTabPanel>
      </cTab>
    </div>
    <div class="container">
      <cTab :active="type" :value.sync="type" noBar @tab-change="onTabChange">
        <cTabPanel label="按钮" value="user">
          <cButton plain>普通按钮</cButton>
        </cTabPanel>
        <cTabPanel label="弹出" value="+">
          <cButton class="success t" plain @click="message">上弹出</cButton>
        </cTabPanel>
      </cTab>
    </div>
    <div class="container">
      <cTab :active="type" :value.sync="type" noBar onlyHeader>
        <cTabPanel label="无滚动条" value="-"></cTabPanel>
        <cTabPanel label="无数据" value="+"></cTabPanel>
      </cTab>
    </div>
  </div>
</template>
<script>
import cTab from '../components/cTab/cTab'
import cTabPanel from '../components/cTab/cTabPanel'
export default {
  data () {
    return {
      type: 'user',
      user: 'user'
    }
  },
  updated () {
    console.log(this.type)
  },
  methods: {
    onTabChange (index) {
      console.log('tab changes: ', index)
    },
    message (el) {
      this.$message({
        type: el.target.className,
        text: el.target.innerText
      })
    }
  },
  components: { cTab, cTabPanel }
}
</script>
<style scoped>
.container {
  max-width: 800px;
  height: auto;
  margin: 30px auto;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  padding: 15px;
}
</style>
