<template>
  <div>
    <div class="carousel">
      <div class="l">
        <car-rousel></car-rousel>
      </div>
      <div class="r">
        <div class="top">
          <img src="./img/4.jpg" alt="" />
        </div>
        <div class="bottom"><img src="./img/17.jpg" alt="" /></div>
      </div>
    </div>
  </div>
</template>

<script>
import CarRousel from "./CarRousel.vue";
export default {
  name: "lunBo",
  components: {
    CarRousel,
  },
};
</script>

<style lang="less" scoped>
.carousel {
  width: 100%;
  height: 625px;
  display: flex;
  .l {
    flex: 4;
    height: 100%;
    margin-right: 10px;
    border-radius: 10px;
    overflow: hidden;
  }
  .r {
    flex: 2;
    margin-left: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    .top {
      flex: 3;
      overflow: hidden;
      margin-bottom: 20px;
    }
    .bottom {
      flex: 2;
      overflow: hidden;
      border-radius: 10px;
    }
  }
}
</style>