<template>
  <div class="loginPage">
    <img class="tit" src="../assets/login/lettop.png" alt="">
    <div class="login">
      <div class="inputArea">
        <div class="user">
          <img src="../assets/login/user.png" alt="">
        <el-input type="text" v-model="user"></el-input>
        </div>
        <div class="password">
          <br>
          <img src="../assets/login/password.png" alt="">
          <el-input type="password" v-model="password"></el-input>
        </div>
        <div class="buttonArea">
          <el-button class="loginButton" @click="login">登录</el-button>
          <el-button class="resetButton" @click="reset">重置</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
let user=ref('admin')
let password=ref('1234565')
import { ElMessage } from 'element-plus'
const reset=()=>{
  user.value=""
  password.value=""
}
const login=()=>{
  ElMessage.success('登录成功')
}
</script>

<style lang="less" scoped>
.loginPage{
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/login/loginbac.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  .tit{
    position: absolute;
    width: 275px;
    height: 148px;
    left: 50px;
    top: 20px;
  }
  .login{
    transform: translateX(-45px);
    position: relative;
    display: flex;
    width: 762px;
    height: 465px;
    background-image: url("../assets/login/loginContent.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: left top;
    display: flex;
    justify-content: center;
    margin-top: 94px;
    .inputArea{
      width: 92%;
      height: 40%;
      margin-top: 21.5%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;

      .user,.password{
        width: 80%;
        height: 30%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        img{
          width: 31.7%;
          height: auto;
          size: auto;
          margin: 0 auto;
        }
        /deep/.el-input {
          margin-left: 10%;
          border-radius: 10px;
          width: 81%;
          background-color: transparent;
          border: none;
        }
        /deep/.el-input__wrapper:focus-visible{
          background-color: transparent;
          border: none;
          outline: 0;
          box-shadow: none;
        }
        /deep/.el-input__wrapper{
          background-color: transparent;
          border: none;
          outline: 0;
          box-shadow: none;
        }
        /deep/.el-input__wrapper:focus{
          background-color: transparent;
          border: none!important;
          outline: 0;
        }

        /deep/.el-input .el-input__wrapper .el-input__inner{
          width: 100%;
          height: 28px;
          border-radius: 10px;
          border: 0;
          border: 1px solid rgb(76, 73, 44);;
          background-color: rgb(202,198,170);
          padding-left: 20px;
        }

        /deep/.el-input .el-input__wrapper .el-input__inner:focus-visible{
          outline: none;

        }
      }
      .password{

      }
      .user{
        img{margin-bottom: 20px;  transform: translateX(-12px) translateY(5px);}
      }
      .password{
        img{
          margin-bottom: 15px;
          transform: translateX(-12px) translateY(5px);
        }
      }
    }
    .buttonArea{
      position: absolute;
      bottom: 43px;
      width: 50%;
      height: 40px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      /deep/.el-button:active,.el-button:hover,.el-button:focus{
        color: black;
      }
      .loginButton,.resetButton{
        width: 60px;
        height: 24px;
        border-radius: 10px;
        border:1px solid rgb(76, 73, 44) !important;
        background-color: rgb(202,198,170);
      }
      .loginButton:hover, .resetButton:hover{
        background-color: white;
      }
    }
  }
}
</style>