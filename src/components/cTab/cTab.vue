<template>
  <div class="tabs">
    <div
      :style="{borderBottom: noBar ? 'none' : '2px solid #ddd', lineHeight: height}"
      class="tab-header"
    >
      <span
        :class="['tab-item', {active: activeIndex === index}]"
        :key="tab"
        :style="{width:spanWidth}"
        @click.stop="handleTagChange(index)"
        ref="header"
        v-for="(tab, index) in tabs"
        v-html="tab"
      />
      <span class="line" ref="line" v-if="!noBar"></span>
    </div>
    <div class="tab-content" ref="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabs: [],
      activeIndex: 0,
      childrenLength: 0
    };
  },
  props: {
    onlyHeader: { type: Boolean },
    noBar: { type: Boolean },
    active: { type: String },
    height: { type: Number, default: 2 },
  },
  mounted() {
    this.init(this.active);
    if (!this.noBar) {
      setTimeout(() => {
        this.loadLine(0);
      }, 0);
    }
    if (this.onlyHeader) {
      this.$refs.content.remove();
    }
    this.childrenLength = this.$children.length;
  },
  methods: {
     init(activeName){
      this.$children.forEach((ele, index) => {
        this.tabs.push(ele.label)
        if (activeName === ele.value) {
          ele.visible = true
          this.activeIndex = index
        } else {
          ele.visible = false
        }
      })
    },

    loadLine(index) {
      this.$refs.line.style.width = `${this.$refs.header[index].offsetWidth}px`
      this.$refs.line.style.transform = `translateX(${this.$refs.header[index].offsetLeft}px)`
    },

    handleTagChange(index) {
      (this.$children[this.activeIndex]).visible = false
      let ele = this.$children[index]
      ele.visible = true
      this.activeIndex = index
      if (!this.noBar) {
        this.loadLine(index)
      }
    },
  },
  computed:{
    // 等分当前宽度
    spanWidth() {
      return `${(1 / (this.childrenLength)) * 100}%`
    }
  }
};
</script>
<style lang="scss" scoped>
$blue: #409eff;

.tab-header {
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #303030;
  font-weight: 500;
  position: relative;

  span {
    text-align: center;
  }

  .line {
    position: absolute;
    height: 2px;
    bottom: 0;
    background: $blue;
    transform: translateX(0);
    transition: all 0.3s;
    margin-bottom: -2px;
  }
}

.tab-item {
  cursor: pointer;

  &:hover {
    color: $blue;
  }

  &.active {
    color: $blue;
  }
}
</style>
