<template>
  <div class="message" :class="type">{{text}}</div>
</template>
<script>
export default {
  props: {
    text: { type: String, default: "default" },
    type: { type: String, default: "success" },
  }
};
</script>
<style lang="scss" scoped>
.message {
  position: fixed;
  left: 50%;
  top: 10px;
  display: flex;
  align-items: center;
  transform: translate(-50%, -50px);
  padding: 10px 16px;
  font-size: 14px;
  color: #fff;
  border-radius: 4px;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  z-index: 999;

  &.show {
    transform: translate(-50%, 10px);
    opacity: 1;
  }

  &.success {
    background-color: #67c23a;
  }

  &.warning {
    background-color: #e6a23c;
  }

  &.info {
    background-color: #909399;
  }

  &.danger {
    background-color: #f56c6c;
  }
}
</style>
