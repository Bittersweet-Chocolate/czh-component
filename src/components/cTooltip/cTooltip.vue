<template>
  <div
    @mouseenter="handleToggle"
    @mouseleave="handleToggle"
    class="tip-container"
  >
    <slot/>
    <div
      :class="['tooltip', show]"
      v-show="isVisible"
    >
      {{content}}
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isVisible : false
    }
  },
  props:{
    content:{type: String, default: "标签"},
    show:{type: String, default: "top"}
  },
  methods:{
    handleToggle() {
      this.isVisible = !this.isVisible
    }
  }
}
</script>

<style lang="scss" scoped>
  $margin: calc(100% + 10px);
  @mixin horizontal-align {
    left: 50%;
    transform: translateX(-50%);
  }

  @mixin vertical-align {
    top: 50%;
    transform: translateY(-50%);
  }

  .tip-container {
    display: inline-block;
    position: relative;
  }

  .tooltip {
    padding: 5px 10px;
    background: #303030;
    color: white;
    position: absolute;
    white-space: nowrap;
    z-index: 10;
    border-radius: 4px;

    &::before {
      content: '';
      width: 0;
      height: 0;
      position: absolute;
      border: 6px solid transparent;
    }

    &.top {
      bottom: $margin;
      @include horizontal-align;

      &::before {
        border-top-color: #303030;
        top: 100%;
        @include horizontal-align;
      }
    }

    &.bottom {
      top: $margin;
      @include horizontal-align;

      &::before {
        border-bottom-color: #303030;
        bottom: 100%;
        @include horizontal-align;
      }
    }

    &.left {
      right: $margin;
      @include vertical-align;

      &::before {
        border-left-color: #303030;
        left: 100%;
        @include vertical-align;
      }
    }

    &.right {
      left: $margin;
      @include vertical-align;

      &::before {
        right: 100%;
        border-right-color: #303030;
        @include vertical-align;
      }
    }
  }
</style>
