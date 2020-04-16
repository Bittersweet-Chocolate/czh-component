<template>
  <div class="loader-bg" v-if="loading">
    <div class="loader-message">
      <h3 class="title">{{title}}</h3>
      <p>{{message}}</p>
    </div>
    <div class="loader-main">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
      loadingTime: null
    };
  },
  props: {
    showL: { type: Boolean, default: true },
    title: { type: String, default: "ChenZH UI" },
    message: { type: String, default: "description" },
    time: { type: String, default: "1000" }
  },
  created() {
    // console.log(1);
    this.loadingTime = setTimeout(_ => {
      this.loading = false;
    }, this.time);
  },
  updated() {
    this.loadingTime = setTimeout(_ => {
      this.loading = false;
    }, this.time);
  },
  beforeDestroy() {
    this.loadingTime = null;
  }
};
</script>
<style lang="scss" scoped>
$accentColor: #3eaf7c;
.loader-bg {
  background-color: white;
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 99;
  .loader-main {
    position: fixed;
    width: 120px;
    height: 50px;
    top: 55%;
    left: 50%;
    z-index: 555;
    transform: translate(-50%, 0);
    div {
      &:nth-child(2) {
        animation: pacman-balls 1s 0s infinite linear;
      }
      &:nth-child(3) {
        animation: pacman-balls 1s 0.33s infinite linear;
      }
      &:nth-child(4) {
        animation: pacman-balls 1s 0.66s infinite linear;
      }
      &:nth-child(5) {
        animation: pacman-balls 1s 0.99s infinite linear;
      }
      &:first-of-type {
        width: 0px;
        height: 0px;
        border-right: 25px solid transparent;
        border-top: 25px solid $accentColor;
        border-left: 25px solid $accentColor;
        border-bottom: 25px solid $accentColor;
        border-radius: 25px;
        animation: rotate_pacman_half_up 0.5s 0s infinite;
      }
      &:nth-child(2) {
        width: 0px;
        height: 0px;
        border-right: 25px solid transparent;
        border-top: 25px solid $accentColor;
        border-left: 25px solid $accentColor;
        border-bottom: 25px solid $accentColor;
        border-radius: 25px;
        animation: rotate_pacman_half_down 0.5s 0s infinite;
        margin-top: -50px;
      }
      &:nth-child(3),
      &:nth-child(4),
      &:nth-child(5),
      &:nth-child(6) {
        background-color: $accentColor;
        width: 15px;
        height: 15px;
        border-radius: 100%;
        margin: 2px;
        width: 10px;
        height: 10px;
        position: absolute;
        transform: translate(0, -6.25px);
        top: 25px;
        left: 100px;
      }
    }
  }
  .loader-message {
    position: fixed;
    top: 25%;
    left: 50%;
    transform: translate(-50%, 0);
    .title {
      // margin: 10% auto 2%;
      text-align: center;
      color: #2c3e50;
      font-size: 30px;
      box-sizing: border-box;
      padding: 0 10px;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    }
  }
}
@keyframes pacman-balls {
  75% {
    opacity: 0.7;
  }
  100% {
    -webkit-transform: translate(-100px, -6.25px);
    transform: translate(-100px, -6.25px);
  }
}
@keyframes rotate_pacman_half_up {
  0% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }
  50% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
  100% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }
}
@keyframes rotate_pacman_half_down {
  0% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
}
</style>