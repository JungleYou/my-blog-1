<template>
  <div class="right_main">
    <div class="my-swiper"><my-swiper></my-swiper></div>
    <div class="main">
      <div class="l">
        <my-notice></my-notice>
        <my-news></my-news>
      </div>
      <div class="m">
        <blog-item></blog-item>
        <blog-item></blog-item>
        <blog-item></blog-item>
        <blog-item></blog-item>
        <blog-item></blog-item>
        <blog-item></blog-item>
        <blog-item></blog-item>
        <blog-item></blog-item>
        <blog-item></blog-item>
        <blog-item></blog-item>
        <blog-item></blog-item>
      </div>
      <div class="r"><my-notice></my-notice></div>
    </div>
  </div>
</template>

<script>
import mySwiper from "@/components/my-swiper";
import blogItem from "@/components/blog-item";
export default {
  name: "homePage",
  components: {
    mySwiper,
    blogItem,
  },
};
</script>

<style lang="less">
.right_main {
  margin-left: 200px;
  padding: 20px;
  .main {
    margin-top: 20px;
    display: flex;
    .l {
      flex: 3;
      height: 100%;
      position: sticky;
      top: 20px;
      margin-right: 20px;
    }
    .m {
      flex: 8;
    }
    .r {
      flex: 3;
      height: 400px;
      margin-left: 20px;
    }
  }
}
</style>