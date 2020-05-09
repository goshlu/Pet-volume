<template>
  <div class="main">
    <header>
      <Theader title="商品详情">
        <span class="header_back" slot="left" @click="$router.back()">
          <img src="../assets/imgs/icon_back@2x.png" alt />
        </span>
      </Theader>
    </header>
    <div class="goodSwipe">
      <van-swipe>
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image.imageUrl" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 商品介绍 -->
    <div class="normal">
      <div class="name">伯纳天纯Pure&Natural 生鲜系列 全价全期犬粮12kg</div>
      <div class="price">
        <div class="price-now">¥569.00</div>
        <div class="price-old">
          <span class="price-old--price">¥669.00</span>
        </div>
      </div>
      <div class="introduce">
        <span>增强体质 保肠助消化 益生护毛</span>
      </div>
      <div class="title-wrap">
        <img src="../assets/imgs/zp.png" alt />
        <span>正品保障</span>
      </div>
    </div>
    <!-- 选择规格 -->
    <div class="component-moresku m-b-t-20">
      <div class="ls1">
        选择
        <span>规格，1.5kg</span>
        <img src="../assets/imgs/icon_back_1.png" alt />
      </div>
      <div class="ls2">
        批次
        <span>预计保质期为 2021.07.17</span>
        <span class="right">剩余15月</span>
      </div>
    </div>
    <!-- 优惠卷 -->
    <div class="item-center">
      <div class="left">
        <div class="left-main">
          <img src="../assets/imgs/money_2.png" width="15" height="15" alt />
          <span class="left-price">8</span>
        </div>
        <div class="left-title">使用期限：20/04/10-20/04/40</div>
      </div>
      <div class="ht"></div>
      <div class="right-title">立即领劵</div>
    </div>
    <!-- 店铺推荐 -->
    <div class="shop-rc">
      <span>店铺推荐</span>
    </div>
    <!-- 商品列表 -->
    <div class="goodList">
      <ul>
        <li>
          <img src="../assets/imgs/shop.png" alt />
          <div class="list">
            <div class="name">美国麦德氏 IN-PLUS日常</div>
            <span class="price">￥ 68.00</span>
            <span class="choose">立即选购</span>
          </div>
        </li>
      </ul>
    </div>
    <!-- 加入购物车 -->
    <div class="shopCart">
      <van-goods-action>
        <van-goods-action-icon icon="star" color="#ff5000" text="收藏" @click="onClickIcon" />
        <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
        <!-- <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" /> -->
        <van-goods-action-button type="danger" text="领劵购买" @click="onClickButton" />
      </van-goods-action>
    </div>
  </div>
</template>
<script>
import Theader from "../components/header";

export default {
  name: "shopDetails",
  components: {
    Theader
  },
  data() {
    return {
      images: [
        { imageUrl: require("../assets/imgs/11236.jpg") },
        { imageUrl: require("../assets/imgs/11236.jpg") }
      ],
      goodsLists: []
    };
  },
  methods: {
    onClickIcon() {
      this.$toast("点击图标");
    },
    onClickButton() {
      this.$toast("点击按钮");
    }
  }
};
</script>
<style lang="less" scoped>
.main {
  margin-bottom: 60px;
  width: 100%;
  position: relative;

  .header-box {
    background: #ffa449;
  }

  .header_back {
    position: absolute;
    left: 10px;
    z-index: 300;
    top: 42%;
    transform: translateY(-50%);
    img {
      width: 17/2px;
      height: 27/2px;
    }
  }

  .goodSwipe {
    margin-top: 40px;

    img {
      width: 100%;
      height: 375px;
    }
  }

  .normal {
    width: 710/2px;
    background: #fff;
    margin: 10px auto;
    border-radius: 10px;
    box-shadow: 0 0 1px 0 #9c9c9c;

    .name {
      font-size: 13px;
      font-weight: 600;
      // text-align: center;
      padding-left: 20px;
      padding-top: 10px;
    }

    .price {
      display: flex;
      flex: 1;
      flex-wrap: wrap;

      .price-now {
        font-size: 14px;
        color: #ff5656;
        padding: 10px 0 0 20px;
      }

      .price-old {
        position: relative;

        .price-old--price {
          font-size: 7px;
          padding-left: 5px;
          margin-top: 5px;
          position: absolute;
          left: 0;
          bottom: 1.5px;
          text-decoration: line-through;
        }
      }
    }

    .introduce {
      font-size: 10.5px;
      padding: 20/2px 0 0 40/2px;
    }

    .title-wrap {
      padding: 20/2px 0 10px 40/2px;
      font-size: 10.5px;

      img {
        width: 12px;
        height: 14px;
      }
    }
  }

  .component-moresku {
    width: 710/2px;
    margin: 5px auto;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 0 1px 0px #9c9c9c;

    .ls1 {
      padding-top: 10px;
      padding-left: 20px;
      font-size: 10.5px;
      color: #999999;

      img {
        float: right;
        padding-right: 5px;
        // padding-top: 7px;
        width: 4.5px;
        height: 7px;
      }

      span {
        padding-left: 5px;
        color: #666;
      }
    }

    .ls2 {
      padding: 7px 0 7px 20px;
      color: #999999;
      font-size: 10.5px;

      span {
        padding-left: 5px;
        color: #666;
      }

      .right {
        padding-right: 5px;
        float: right;
      }
    }
  }
  .item-center {
    width: 100%;
    height: 90px;
    margin: 10px auto;
    position: relative;
    border-radius: 10px;
    background: url("../assets/info/7f246a888cf00bc002fdfb2962c93da.png")
      no-repeat center;
    background-size: 100% 100%;
    .left {
      position: absolute;
      left: 10px;
      top: 10px;
      .left-main {
        position: relative;
        .left-price {
          font-size: 55/2px;
          color: #f03e3e;
          padding-top: 10px;
        }
        img {
          margin-left: 15px;
        }
      }
      .left-title {
        color: #f03e3e;
        font-size: 11px;
        // padding: 10px 10px;
        padding-left: 10px;
      }
    }
    .ht {
      position: absolute;
      right: 127px;
      top: 10px;
      height: 56px;
      width: 0.5px;
      border-left: 1.2px dashed #f03e3e;
      z-index: 333;
    }
    .right-title {
      font-size: 12px;
      position: absolute;
      right: 40px;
      top: 30px;
      color: #fff;
    }
  }
  .shop-rc {
    // padding: 20px 0;
    font-size: 13px;
    color: #ff5656;
    text-align: center;
    position: relative;
    span::after,
    span::before {
      content: ""; /*CSS伪类用法*/
      position: absolute; /*定位背景横线的位置*/
      top: 52%;
      background: #ff5656; /*宽和高做出来的背景横线*/
      width: 9%;
      height: 2px;
    }

    span::after {
      left: 30%;
    }

    span::before {
      right: 30%;
    }
  }
  .goodList {
    display: flex;
    flex: 1;
    position: relative;

    ul {
      display: flex;
      flex-wrap: wrap;
      width: 650/2px;
      margin: 0 auto;
      justify-content: space-between;

      li {
        width: 320/2px;
        height: 389/2px;
        position: relative;
        background: #ffff;
        margin-top: 5px;

        img {
          width: 214/2px;
          height: 218/2px;
          position: absolute;
          left: 20px;
          top: 31/2px;
        }
      }
      .list {
        position: absolute;
        top: 130px;
        left: 21/2px;
        .name {
          font-size: 12px;
        }
        .price {
          font-size: 14px;
          color: #333333;
          font-weight: bold;
        }

        .choose {
          font-size: 19/2px;
          background: #ffa40e;
          color:#ffffff;
          border-radius: 7.5px;
          padding: 2px 10px 3px 7px;
        }
      }
    }
  }
}
</style>
