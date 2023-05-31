<template>
  <div :class="isnight ? 'n-left-nav' : 'd-left-nav'">
    <div class="logo">Y Y S</div>
    <div class="user"><img src="./img/1.jpg" alt="" /></div>
    <h6>用户名</h6>
    <!-- 导航开始 -->
    <ul class="nav" @click="change">
      <li tabindex="1">首页</li>
      <li tabindex="2">music</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "leftNav",
  data() {
    return {
      pages: ["homePage", "blogInfo"],
    };
  },
  props: {
    isnight: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    change(e) {
      // console.dir(e);
      if (e.target.tabIndex) {
        // console.log(e.target.tabIndex);
        let index = e.target.tabIndex - 1;
        this.$router.push({ name: this.pages[index] });
      }
    },
  },
};
</script>

<style lang="less" scoped>
@d_color: black;
@d_bg_color: white;
@n_color: white;
@n_color_8: #fafafa;
@n_bg_color: black;
@n_bg_color_8: #1f1e1e;

.d-left-nav {
  width: 100%;
  height: 100%;
  padding: 20px;
  text-align: center;
  .logo {
    width: 150px;
    height: 70px;
    border-radius: 10px;
    text-align: center;
    line-height: 70px;
    font-size: 24px;
    font-weight: 900;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  }
  .user {
    img {
      width: 80px;
      height: 80px;
      margin: 20px;
      border-radius: 10px;
      object-fit: cover;
      overflow: hidden;
      cursor: pointer;
    }
  }
  .nav {
    margin-top: 100px;
    width: 100%;
    li {
      width: 100%;
      height: 40px;
      line-height: 40px;
      cursor: pointer;
      &:hover {
        font-weight: 900;
        background-color: #fafafa;
      }
      &:focus {
        font-weight: 900;
        background-color: #fafafa;
        border-right: 2px solid black;
      }
    }
  }
}
.n-left-nav {
  width: 200px;
  height: 100vh;
  padding: 20px;
  text-align: center;
  color: @n_color;
  background-color: @n_bg_color;
  .logo {
    width: 150px;
    height: 70px;
    border-radius: 10px;
    text-align: center;
    line-height: 70px;
    font-size: 24px;
    font-weight: 900;
    color: @n_color;
    background-color: @n_bg_color_8;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  }
  .user {
    img {
      width: 80px;
      height: 80px;
      margin: 20px;
      border-radius: 10px;
      object-fit: cover;
      overflow: hidden;
      cursor: pointer;
    }
  }
  .nav {
    margin-top: 100px;
    width: 100%;
    li {
      width: 100%;
      height: 40px;
      line-height: 40px;
      cursor: pointer;
      &:hover {
        font-weight: 900;
      }
      &:focus {
        font-weight: 900;
        border-right: 2px solid @n_color;
      }
    }
  }
}
</style>