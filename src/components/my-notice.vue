<template>
  <div :class="isnight ? 'night-notice' : 'day-notice'">
    <div class="title">
      <div class="mounth">2023/5/29</div>
      <div class="time">11 : 55 : 20</div>
      <div class="not">公告</div>
    </div>
    <div class="info">
      <div class="trends">
        <div class="info_title">今日动态</div>
        <div class="info_content">博客正在努力搭建中...</div>
      </div>
      <div class="data">
        <ul class="data_info">
          <li>文章</li>
          <li>文章</li>
          <li>文章</li>
          <li>文章</li>
        </ul>
        <ul class="data_num">
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myNotice",
  props: {
    isnight: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="less" scoped>
@color-w: white;
@color-n: black;
// ul,
// li {
//   list-style: none;
//   margin: 0;
//   padding: 0;
// }
.day-notice {
  width: 100%;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  .title {
    flex: 2;
    width: 100%;
    height: 80px;
    padding: 10px;
    color: @color-w;
    background-image: url("./img/5.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;

    .mounth {
      font-weight: 900;
      font-size: 20px;
    }
    .time,
    .not {
      text-align: center;
      font-weight: 900;
      font-size: 40px;
    }
  }
  .info {
    flex: 3;
    display: flex;
    flex-direction: column;
    .trends {
      flex: 2;
      padding: 10px;
      .info_title {
        font-weight: 900;
        font-size: 20px;
        color: #5784f7;
      }
    }
    .data {
      flex: 1;
      border-top: 1px solid grey;
      .data_info,
      .data_num {
        display: flex;
        margin: 5px 0;
        justify-content: space-around;
      }
    }
  }
}
.night-notice {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  color: @color-w;
  background-color: @color-n;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  .title {
    flex: 2;
    width: 100%;
    height: 80px;
    padding: 10px;
    color: @color-w;
    background-image: url("./img/5.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;

    .mounth {
      font-weight: 900;
      font-size: 20px;
    }
    .time,
    .not {
      text-align: center;
      font-weight: 900;
      font-size: 40px;
    }
  }
  .info {
    flex: 3;
    display: flex;
    flex-direction: column;
    .trends {
      flex: 2;
      padding: 10px;
      .info_title {
        font-weight: 900;
        font-size: 20px;
        color: #5784f7;
      }
    }
    .data {
      flex: 1;
      border-top: 1px solid grey;
      .data_info,
      .data_num {
        display: flex;
        margin: 5px 0;
        justify-content: space-around;
      }
    }
  }
}
</style>