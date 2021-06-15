<!--
 * @Author: czh
 * @Date: 2021-06-08 21:00:08
 * @LastEditTime: 2021-06-15 23:41:05
 * @LastEditors: czh
 * @Description: 
-->
<template>
  <div class="container">
    <div class="cButtonGroup">
      <cButton @click="handleClick">默认按钮</cButton>
      <cButton
        @click="handleClick"
        v-for="(data,index) in btnType"
        :key="index"
        :type="data.type"
      >{{data.name}}</cButton>
    </div>
    <div class="cButtonGroup">
      <cButton @click="handleClick" plain>简单按钮</cButton>
      <cButton
        @click="handleClick"
        plain
        v-for="(data,index) in btnType"
        :key="index"
        :type="data.type"
      >{{data.name}}</cButton>
    </div>
    <div class="cButtonGroup">
      <cButton disabled>禁用按钮</cButton>
      <cButton disabled v-for="(data,index) in btnType" :key="index" :type="data.type">{{data.name}}</cButton>
    </div>
    <div class="cButtonGroup">
      <cButton @click="handleClick" round>圆角按钮</cButton>
      <cButton
        @click="handleClick"
        round
        v-for="(data,index) in btnType"
        :key="index"
        :type="data.type"
      >{{data.name}}</cButton>
    </div>
  </div>
</template>

<script lang="ts">
// import { reactive } from 'vue'
// export default {
//   setup() {
    
//   }
//   data () {
//     return {
//       btnType: [
//         {
//           type: 'primary',
//           name: '主要按钮'
//         },
//         {
//           type: 'success',
//           name: '成功按钮'
//         },
//         {
//           type: 'info',
//           name: '信息按钮'
//         },
//         {
//           type: 'warning',
//           name: '警告按钮'
//         },
//         {
//           type: 'danger',
//           name: '危险按钮'
//         }
//       ]
//     }
//   },
//   methods: {
//     handleClick (e:any) {
//       var type = e.target.classList[2] || 'default'
//       switch (type) {
//         case 'default':
//           type = '默认按钮'
//           break
//         case 'plain':
//           type = '简单按钮'
//           break
//         case 'round':
//           type = '圆角按钮'
//           break
//       }
//       alert(`点击事件触发:类型-${type},名称-${e.target.innerText}`)
//     }
//   }
// }
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.cButtonGroup {
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
