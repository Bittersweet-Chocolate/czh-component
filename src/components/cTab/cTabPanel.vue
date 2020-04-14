<template>
  <div class="tab-panel" v-show="visible">
    <slot></slot>
  </div>
</template>
<script>
export default {
  data(){
    return {
      visible:false
    }
  },
  props: {
    label: {type:String, required: true},
    value:{type:String,}
  }
};
</script>
<style scoped>
.tab-panel {
  padding-top: 15px;
  font-size: 14px;
}
</style>
