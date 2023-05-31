<template>
  <div id="app">
    <div class="left_nav"><left-nav></left-nav></div>
    <router-view></router-view>
  </div>
</template>

<script>
import leftNav from "@/components/left-nav.vue";
export default {
  name: "App",
  components: {
    leftNav,
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul,
li {
  list-style: none;
}
img {
  object-fit: cover;
}
.shadow {
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
}
#app {
  min-width: 1200px;
  min-height: 800px;
  // background-color: pink;
  .left_nav {
    position: fixed;
    top: 0;
    width: 200px;
    height: 100vh;
    display: inline-block;
  }
}
</style>
