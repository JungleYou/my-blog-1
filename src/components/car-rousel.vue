<template>
  <div class="swiper" ref="content">
    <div class="swiper-item" ref="swiper">
      <img ref="img" v-for="i in imgArr" :key="i.id" :src="i.src" alt="" />
    </div>
    <div class="pic" @click="change">
      <img
        ref="pic"
        v-for="(i, index) in imgArr"
        :key="i.id"
        :src="i.src"
        :data-index="index"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "CarRousel",
  mounted() {
    // let swiper = this.$refs.swiper;
    // let content = this.$refs.content;
    // let img = this.$refs.img;

    // // console.log(swiper.style);

    const time = setInterval(() => {
      this.changeImg();
    }, 3000);
  },
  data() {
    return {
      imgArr: [
        { id: 0, src: "/img/1.jpg" },
        { id: 1, src: "/img/2.jpg" },
        { id: 2, src: "/img/3.jpg" },
        { id: 3, src: "/img/4.jpg" },
        { id: 4, src: "/img/5.jpg" },
      ],

      index: 1,
    };
  },
  methods: {
    changeImg() {
      const swiper = this.$refs.swiper;
      const pic = this.$refs.pic;
      const content = this.$refs.content;
      const img = this.$refs.img;
      swiper.style.width = this.imgArr.length * content.clientWidth + "px";
      swiper.style.height = content.clientHeight + "px";
      img.forEach((i) => {
        i.width = content.clientWidth;
        i.height = content.clientHeight;
      });
      pic.forEach((i) => {
        i.style.transform = "scale(1)";
      });
      if (this.index >= this.imgArr.length) {
        this.index = 0;
      }
      swiper.style.left = -content.clientWidth * this.index + "px";
      pic[this.index].style.transform = "scale(1.3)";
      this.index++;
    },
    change(e) {
      this.index = e.target.dataset.index * 1;
      this.changeImg();
    },
  },
  props: {},
  beforeDestroy() {
    clearInterval();
  },
};
</script>

<style lang="less" scoped>
// ul,
// li {
//   margin: 0;
//   padding: 0;
//   list-style: none;
// }
.swiper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  .swiper-item {
    position: relative;
    transition: all 0.5s;
    img {
      border-radius: 10px;
    }
  }
  .pic {
    position: absolute;
    right: 20px;
    bottom: 20px;
    transition: all 0.3s;
    img {
      width: 100px;
      height: 80px;
      border-radius: 10px;
      margin: 0 10px;
      object-fit: cover;
      cursor: pointer;
      transition: all 0.3s;
    }
  }
}
</style>