<template>
  <div class="shadow" :class="isnight ? 'night_blog_item' : 'day_blog_item'">
    <div class="img">
      <h1>第一章 如何制作个人博客</h1>
    </div>
    <div class="info">
      <span>2023.5.31</span>
      <span>999 条评论</span>
      <span>999 次阅读</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "blogItem",
  props: {
    isnight: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="less" scoped>
.day_blog_item {
  width: 100%;
  height: 350px;
  border-radius: 10px;
  margin-bottom: 20px;
  //   background-color: pink;
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.02);
  }
  .img {
    flex: 6;
    color: white;
    border-radius: 10px 10px 0 0;
    text-align: center;
    line-height: 300px;
    background-image: url("./img/10.jpg");
    background-position: center;
    cursor: pointer;
  }
  .info {
    flex: 1;
    color: grey;
    line-height: 50px;
    text-indent: 2em;
    border-radius: 0 0 10px 10px;
    span {
      margin: 0 20px;
    }
  }
}
.night_blog_item {
  width: 100%;
  height: 350px;
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: black;
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.02);
  }
  .img {
    flex: 6;
    color: grey;
    border-radius: 10px 10px 0 0;
    text-align: center;
    line-height: 300px;
    background-image: url("./img/10.jpg");
    background-position: center;
    cursor: pointer;
  }
  .info {
    flex: 1;
    color: grey;
    line-height: 50px;
    text-indent: 2em;
    border-radius: 0 0 10px 10px;
    span {
      margin: 0 20px;
    }
  }
}
</style>