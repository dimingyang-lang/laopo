<template>
  <div class="ExInfo">
    <div class="tit">
      <img src="../assets/ExInfo/tit.png" alt="">
    </div>
    <div class="swipper">
      <swiper
          :modules="modules"
          :slides-per-view="3"
          :space-between="50"
          navigation
          ref="mySwiper"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
      >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
      </swiper>
    </div>


<!--    <div class="swipper">-->
<!--      <div class="swipperContent">-->
<!--        <img src="../assets/ExInfo/a.png" alt="">-->
<!--        <img src="../assets/ExInfo/b.png" alt="">-->
<!--        <img src="../assets/ExInfo/c.png" alt="">-->
<!--        <img src="../assets/ExInfo/d.png" alt="">-->
<!--        <img src="../assets/ExInfo/e.png" alt="">-->
<!--      </div>-->
<!--      <div class="info">-->
<!--        <img src="../assets/ExInfo/info.png" alt="">-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>
<script setup>
import {Swiper} from 'swiper/vue/swiper'
import {SwiperSlide} from 'swiper/vue/swiper-slide'
import { Navigation, A11y } from 'swiper';
import 'swiper/swiper-bundle.css'
import {ref} from 'vue'
const mySwiper = ref(null)
const modules = ref([Navigation, A11y])
const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};
</script>

<style scoped lang="less">
.ExInfo {
  background-image: url("../assets/ExInfo/exbac.png");
  width: 100vw;
  height: 100vh;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .tit {
    position: absolute;
    top: 10vh;
    height: 20vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 12vw;
    }
  }

  .swipper {
    position: absolute;
    top: 30vh;
    height: 39.6vh;
    width: 80vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: red;
    .swipperContent {
      width: 80vw;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 20vw;
        height: 100%;
      }
    }

    .info {
      position: absolute;
      height: 23vh;
      width: 100%;
      bottom: -23vh;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 73.5vw;
        height: 11vh;
      }
    }
  }
}
</style>
