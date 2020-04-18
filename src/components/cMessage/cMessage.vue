<template>
  <div :class="messageStyle">{{text}}</div>
</template>
<script>
export default {
  data() {
    return {
      messageStyle: ["message"]
    };
  },
  props: {
    text: { type: String, default: "default" },
    type: { type: String, default: "default t" }
  },
  mounted() {
    if (!this.type) return;
    this.messageStyle.push(this.type);
    setTimeout(() => {
      this.messageStyle.push("show");
    }, 0);
    setTimeout(() => {
      this.close();
    }, 3000);
  },
  methods: {
    close() {
      const index = this.messageStyle.findIndex(item => item === "show");
      this.messageStyle.splice(index, 1);
      setTimeout(() => {
        this.$el.remove();
        // 销毁组件
        this.$destroy();
      }, 400);
    }
  }
};
</script>
<style lang="scss" scoped>
$tarnsTop: translate(-50%, -50px);
$tarnsBottom: translate(-50%, 50px);
$tarnsLeft: translate(-50px, 0);
$tarnsRight: translate(0, 0);

$tarnsLT: translate(-50px, -50px);
$tarnsRT: translate(0, -50px);
$tarnsLB: translate(0, 50px);
$tarnsRB: translate(0, 50px);
.message {
  position: fixed;
  display: flex;
  align-items: center;
  padding: 10px 16px;
  font-size: 14px;
  color: #fff;
  border-radius: 4px;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  z-index: 999;

  &.default {
    background-color: rgba(0, 0, 0, 0.75);
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

.t {
  transform: $tarnsTop;
  left: 50%;
  top: 10px;
  &.show {
    transform: translate(-50%, 10px);
    opacity: 1;
  }
}

.b {
  transform: $tarnsBottom;
  left: 50%;
  bottom: 10px;
  &.show {
    transform: translate(-50%, -10px);
    opacity: 1;
  }
}

.l {
  transform: $tarnsLeft;
  left: 0;
  top: 50%;
  &.show {
    transform: translate(50px, 0);
    opacity: 1;
  }
}

.r {
  transform: $tarnsRight;
  right: 0;
  top: 50%;
  &.show {
    transform: translate(-50px, 0);
    opacity: 1;
  }
}

.lt {
  transform: $tarnsLT;
  left: 0;
  top: 10px;
  &.show {
    transform: translate(50px, 10px);
    opacity: 1;
  }
}

.rt {
  transform: $tarnsRT;
  right: 0;
  top: 10px;
  &.show {
    transform: translate(-50px, 10px);
    opacity: 1;
  }
}

.lb {
  transform: $tarnsLB;
  left: 0;
  bottom: 10px;
  &.show {
    transform: translate(50px, -10px);
    opacity: 1;
  }
}

.rb {
  transform: $tarnsRB;
  right: 0;
  bottom: 10px;
  &.show {
    transform: translate(-50px, -10px);
    opacity: 1;
  }
}
</style>
