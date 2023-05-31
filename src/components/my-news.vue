<template>
  <div class="shadow" :class="isnight ? 'night-my-news' : 'day-my-news'">
    <h2>最新动态</h2>
    <ul>
      <li>
        <h4>博客正在努力搭建中...</h4>
        <span>2023.5.31 | 15:58</span>
      </li>
      <li>
        <h4>博客正在努力搭建中...</h4>
        <span>2023.5.31 | 15:58</span>
      </li>
      <li>
        <h4>博客正在努力搭建中...</h4>
        <span>2023.5.31 | 15:58</span>
      </li>
      <li>
        <h4>博客正在努力搭建中...</h4>
        <span>2023.5.31 | 15:58</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "myNews",
  props: {
    isnight: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="less" scoped>
.day-my-news {
  width: 100%;
  height: 350px;
  margin: 20px 0;
  border-radius: 10px;
  padding: 20px;
  //   background-color: pink;
  h2 {
    border-bottom: 1px solid grey;
  }
  ul {
    li {
      cursor: pointer;
      span {
        font-size: 14px;
        color: grey;
      }
    }
  }
}
.night-my-news {
  width: 100%;
  height: 350px;
  margin: 20px 0;
  border-radius: 10px;
  padding: 20px;
  color: white;
  background-color: black;
  h2 {
    border-bottom: 1px solid grey;
  }
  ul {
    li {
      cursor: pointer;
      span {
        font-size: 14px;
        color: grey;
      }
    }
  }
}
</style>