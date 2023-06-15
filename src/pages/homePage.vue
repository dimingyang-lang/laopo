<template>
  <div class="homePage">
    <div class="poptit"></div>
    <div class="nav">
      <img src="../assets/homePage/buttons/a.png" alt="">
      <img @click="router.push('/ExInfo')" src="../assets/homePage/buttons/b.png" alt="">
      <img src="../assets/homePage/buttons/c.png" alt="">
      <img src="../assets/homePage/buttons/d.png" alt="">
      <img src="../assets/homePage/buttons/e.png" alt="">
      <img src="../assets/homePage/buttons/f.png" alt="">
    </div>
    <div class="code">
        <div class="content">
          <img src="../assets/homePage/buttons/a1.png" alt="">
          <img src="../assets/homePage/buttons/b1.png" alt="">
          <img src="../assets/homePage/buttons/c1.png" alt="">
        </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<style scoped lang="less">
  .homePage{
    width: 100vw;
    height: 100vh;
    background-image: url("../assets/homePage/homePageBac.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .poptit{
      width: 47.4vw;
      height:52.12vh;
      position: absolute;
      right: 8vw;
      top:7vh;
      background-repeat: no-repeat;
      background-size: contain;
      animation:spin3 .3s ease  infinite alternate;
    }
    @keyframes spin3{
      0%{
        background-image: url("../assets/homePage/poplight.png");
      }
      100%{
        background-image: url("../assets/homePage/popdump1.png");
      }
    }
    .nav{
      position: absolute;
      bottom: 0;
      width: 100vw;
      height: 7vh;
      background-image: url("../assets/homePage/nav.png");
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      img{
        margin:  0  1.2vw;
        width: 8.125vw;
        height: 5.5vh;
      }
    }
    .code{
      position: absolute;
      bottom:16vh;
      right: 10vw;
      width: 12vw;
      height: 25vh;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      overflow: hidden;
      .content{
        position: absolute;
        bottom:0vh;
        width: 12vw;
        height: 21vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        animation:spin4 3s linear infinite normal;
        animation-delay: 1s;
      }
      @keyframes spin4{
        0%{
          bottom:-29vh;
          opacity: .1;
        }
        50%{
          opacity: 1;
        }
        100%{
          bottom:26vh;
          opacity: .1
        }
      }
    }

  }
</style>
