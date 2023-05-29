<template>
  <div class="carousel">
    <img src="./img/20.jpg" alt="" />
    <ul class="pic">
      <li><img src="./img/20.jpg" alt="" /></li>
      <li><img src="./img/21.jpg" alt="" /></li>
      <li><img src="./img/22.jpg" alt="" /></li>
    </ul>
    <ul class="position">
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CarRousel",
  data() {
    return {
      imgArr: [
        {
          id: 1,
          src: "./img/20.jpg",
        },
        {
          id: 2,
          src: "./img/21.jpg",
        },
        {
          id: 3,
          src: "./img/22.jpg",
        },
        {
          id: 4,
          src: "./img/20.jpg",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.carousel {
  width: 100%;
  height: 100%;
  position: relative;
  .pic {
    position: absolute;
    width: 430px;
    height: 90px;
    display: flex;
    bottom: 40px;
    right: 40px;
    justify-content: space-around;
    li {
      width: 130px;
      border-radius: 10px;
      cursor: pointer;
    }
  }
  .position {
    position: absolute;
    bottom: 5px;
    left: 40%;
    display: flex;
    li {
      width: 20px;
      height: 5px;
      margin: 0 15px;
      background-color: white;
      border-radius: 3px;
      cursor: pointer;
    }
  }
}
</style>