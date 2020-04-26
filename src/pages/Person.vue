<template>
  <div class="main">
    <div class="title-text">个人中心</div>
    <section>
      <div class="Head-portrait">
        <img src="../assets/imgs/login-pace.png" alt />
        <span class="login">立即登录</span>
      </div>
      <div class="order">
        <span class="name">我的订单</span>
        <img src="../assets/imgs/icon-back-order.png" alt class="order-right" />
        <div class="order-prs">
          <div class="prs-1">
            <img src="../assets/imgs/dfk.png" alt />
            <span>待付款</span>
          </div>|
          <div class="prs-2">
            <img src="../assets/imgs/sfh.png" alt />
            <span>代收款</span>
          </div>
        </div>
      </div>
      <div class="person-menu">
        <ul>
          <li>
            <img src="../assets/imgs/heart.png" alt />
            <span>我的收藏</span>
          </li>
          <li @click="$router.push('/Coupons')">
            <img src="../assets/imgs/yhj.png" alt />
            <span>&nbsp;&nbsp;优惠卷&nbsp;</span>
          </li>
          <li>
            <img src="../assets/imgs/sz.png" alt />
            <span>&nbsp;&nbsp;设&nbsp;&nbsp;置</span>
          </li>
          <li>
            <img src="../assets/imgs/kf.png" alt />
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
export default {
  name: "person",
  components: {
    CmHeader,
    Tabbar
  }
};
</script>
<style lang="less">
.main {
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
      box-shadow: 0px 1px 3px 0px #9c9c9c;
      .name {
        padding: 65/2px 0 0 20px;
        font-size: 14.5px;
        font-weight: 600;
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
        img {
          width: 22px;
          height: 21px;
        }
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
      box-shadow: 0px 1px 3px 0px #9c9c9c;
      ul {
        display: flex;
        justify-content: space-around;
        li {
          padding: 15px 0;
          font-size: 11px;

          span {
            text-align: center;
            display: block;
          }
          img {
            margin-left: 10px;
            width: 50/2px;
            height: 43/2px;
          }
        }
      }
    }
  }
}
</style>