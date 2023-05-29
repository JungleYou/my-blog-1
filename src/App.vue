<template>
  <div id="app">
    <div class="left">
      <left-nav isnight></left-nav>
    </div>
    <div class="right"><lun-bo></lun-bo></div>
  </div>
</template>

<script>
import leftNav from "@/components/left-nav.vue";
import lunBo from "@/components/lun-bo.vue";
export default {
  name: "App",
  components: {
    leftNav,
    lunBo,
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
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}
#app {
  display: flex;
  .left {
    width: 200px;
    height: 100vh;
  }
  .right {
    width: 100vw;
    min-width: 1200px;
    padding: 20px;
    border-radius: 10px;
  }
}
.shadow {
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>
