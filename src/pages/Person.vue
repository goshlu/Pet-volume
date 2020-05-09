<template>
  <div class="main">
    <div class="title-text">个人中心</div>
    <section>
      <div class="Head-portrait">
        <img src="../assets/imgs/login-pace.png" alt />
        <span class="login" @click="$router.push('/Login/PwdLogin')">立即登录</span>
      </div>
      <div class="order">
        <span class="name">我的订单</span>
        <img src="../assets/imgs/icon-back-order.png" alt class="order-right" />
        <div class="order-prs">
          <div class="prs-1">
            <img src="../assets/imgs/dfk.png" width="22" height="21" alt />
            <span>待付款</span>
          </div>|
          <div class="prs-2">
            <img src="../assets/imgs/sfh.png" width="22" height="20" alt />
            <span>代收款</span>
          </div>
        </div>
      </div>
      <div class="person-menu">
        <ul>
          <router-link tag="li" to="/Person/Collection">
            <img src="../assets/imgs/heart.png" width="25" height="21.5" alt />
            <span>我的收藏</span>
          </router-link>
          <router-link tag="li" to="/Person/Coupons">
            <img src="../assets/imgs/yhj.png" width="27" height="17" alt />
            <span class="li-title-3">&nbsp;&nbsp;优惠卷&nbsp;</span>
          </router-link>
          <router-link tag="li" to="/Person/Set">
            <img src="../assets/imgs/sz.png" width="24" height="24" alt />
            <span>&nbsp;&nbsp;设置</span>
          </router-link>
          <li @click="handelShowPopup">
            <img src="../assets/imgs/kf.png" width="24" height="24" alt />
            <span>联系客服</span>
          </li>
        </ul>
      </div>
    </section>
    <Tabbar />
  </div>
</template>
<script>
import CmHeader from "../components/header";
import Tabbar from "../components/tabbar.vue";
import Vue from 'vue';
import { Dialog } from 'vant';

// 全局注册
Vue.use(Dialog);
export default {
  name: "person",
  components: {
    CmHeader,
    Tabbar
  },
  data() {
    return {
      show: false
    };
  },

  methods: {
    handelShowPopup() {
      Dialog.alert({
        message: "客服电话 : 4008-777-818"
      });
    }
  }
};
</script>
<style lang="less" scoped>
.main {
  width: 100%;
  .title-text {
    width: 100%;
    text-align: center;
    line-height: 24px;
    font-size: 14px;
    padding: 11px 0;
    font-weight: 600;
  }
  section {
    margin-top: 40px;
    .Head-portrait {
      width: 100%;
      height: 387/2px;
      position: relative;
      background: url("../assets/imgs/bg-person.png") no-repeat center;
      img {
        width: 86px;
        height: 86px;
        border-radius: 50%;
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translateX(-50%);
      }
      .login {
        font-size: 34/2px;
        position: absolute;
        top: 58%;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    .order {
      width: 710/2px;
      margin: 0 auto;
      position: relative;
      top: -25px;
      background: #fff;
      border-radius: 10px;
      z-index: 333;
      box-shadow: 0 1px 1px 0 #9c9c9c;
      .name {
        padding: 65/2px 0 0 20px;
        font-size: 14.5px;
        // font-weight: 600;
      }
      .order-right {
        float: right;
        width: 14/2px;
        height: 25/2px;
        margin-top: 10px;
        margin-right: 22px;
      }
      .order-prs {
        font-size: 11px;
        display: flex;
        padding: 30px 0 33px 60px;
        .prs-1 {
          display: flex;
          margin-right: 50px;
          span {
            margin-top: 5px;
            margin-left: 3px;
          }
        }
        .prs-2 {
          display: flex;
          margin-left: 50px;
          span {
            margin-top: 5px;
            margin-left: 3px;
          }
        }
      }
    }
    .person-menu {
      width: 710/2px;
      margin: auto;
      position: relative;
      top: -10px;
      border-radius: 10px;
      background: #fff;
      box-shadow: 0 1px 1px 0 #9c9c9c;
      ul {
        display: flex;
        justify-content: space-around;
        justify-self: center;
        justify-items: center;
        li {
          padding: 15px 0;
          font-size: 11px;
          span {
            text-align: center;
            display: block;
          }
          .li-title-3 {
            margin-top: 6px;
          }
          img {
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>
