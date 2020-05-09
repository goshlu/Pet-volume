<template>
  <div class="main" v-cloak>
    <header>
      <Theader title="领劵购买">
        <span class="header_back" slot="left" @click="$router.back()">
          <img src="../assets/imgs/icon_back@2x.png" alt />
        </span>
      </Theader>
    </header>
    <section>
      <div class="title">超大额劵</div>
      <div class="content">
        <ul>
          <li>
            <div class="left">
              <img src="../assets/juan/3.png" width="146.5" height="146.5" alt />
            </div>
            <div class="right">
              <div class="right-title">伯纳天纯小型犬通用狗粮</div>
              <div>
                <span class="old-price">原价199</span>
                <span class="new-price">劵后价</span>
                <span class="new-price-number">99</span>
              </div>
              <div class="sumbit">
                <span>立即抢购</span>
              </div>
            </div>
          </li>
          <li>
            <div class="left">
              <img src="../assets/juan/3.png" width="146.5" height="146.5" alt />
            </div>
            <div class="right">
              <div class="right-title">伯纳天纯小型犬通用狗粮</div>
              <div>
                <span class="old-price">原价199</span>
                <span class="new-price">劵后价</span>
                <span class="new-price-number">99</span>
              </div>
              <div class="sumbit">
                <span>立即抢购</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section>
      <div class="title-more">更多优惠</div>
      <div class="list">
        <ul>
          <li>
            <div class="list-title">伯纳天纯小型犬通用狗粮</div>
            <img src="../assets/juan/3.png" width="86" height="102.5" alt />
            <div class="list-item">
              <div class="item-left">
                <span class="item-lod-price">原价199</span>
                <span class="item-new-price">劵后价</span>
                <span class="item-new-price-number">99</span>
              </div>
              <div class="item-right">
                <span>立即抢购</span>
              </div>
            </div>
          </li>
          <li>
            <div class="list-title">伯纳天纯小型犬通用狗粮</div>
            <img src="../assets/juan/3.png" width="86" height="102.5" alt />
            <div class="list-item">
              <div class="item-left">
                <span class="item-lod-price">原价199</span>
                <span class="item-new-price">劵后价</span>
                <span class="item-new-price-number">99</span>
              </div>
              <div class="item-right">
                <span>立即抢购</span>
              </div>
            </div>
          </li>
          <li>
            <div class="list-title">伯纳天纯小型犬通用狗粮</div>
            <img src="../assets/juan/3.png" width="86" height="102.5" alt />
            <div class="list-item">
              <div class="item-left">
                <span class="item-lod-price">原价199</span>
                <span class="item-new-price">劵后价</span>
                <span class="item-new-price-number">99</span>
              </div>
              <div class="item-right">
                <span>立即抢购</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
import Theader from "../components/header";
export default {
  name: "BigTicket",
  components: {
    Theader
  }
};
</script>
<style lang="less" scoped>
.main {
  width: 100%;
  background: url("../assets/juan/0f0c0d44f2847d70484862d4ea6ae87.jpg")
    no-repeat top;
  background-size: 100% auto;
  header {
    width: 100%;
    height: 44px;
    position: relative;
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
  }
  section {
    .title {
      padding: 13/2px 85/2px 28/2px 82/2px;
      background: url("../assets/juan/1.png") no-repeat center;
      background-size: auto 100%;
      text-align: center;
      color: #fff;
      margin-top: 625/2px;
    }
    .content {
      ul {
        li {
          width: 680/2px;
          position: relative;
          margin: 20px auto;
          display: flex;
          flex: 1;
          //   flex-wrap: wrap;
          border: 2.5px dashed #000;
          background: #fffece;
          overflow: hidden;
          .left {
            float: left;
            padding: 15px 14px 11px 14px;
          }
          .right {
            float: right;
            .right-title {
              font-size: 15px;
              font-weight: 600;
              padding: 15px 8px 0 11px;
            }
            .old-price {
              font-size: 8px;
              text-decoration: line-through;
              font-weight: bold;
              padding-left: 11px;
            }
            .new-price {
              display: block;
              font-size: 8px;
              font-weight: bold;
              padding-left: 11px;
            }
            .new-price-number {
              position: absolute;
              right: 60px;
              color: #f5372b;
              top: 60px;
              font-size: 35px;
              font-weight: bold;
            }
          }
          .sumbit {
            font-size: 16px;
            padding-left: 20px;
            padding-top: 20px;
            span {
              background: url("../assets/juan/2.png") no-repeat center;
              background-size: 100% 100%;
              padding: 4.5px 27/2px 10px 13px;
              color: #fff;
            }
          }
        }
      }
    }
  }
  section {
    .title-more {
      padding: 13/2px 85/2px 28/2px 82/2px;
      background: url("../assets/juan/1.png") no-repeat center;
      background-size: auto 100%;
      text-align: center;
      color: #fff;
    }
    .list {
      ul {
        display: flex;
        flex-wrap: wrap;
        margin: 20px auto;
        width: 90%;
        justify-content: space-between;
        li {
          border: 2.5px dashed #000;
          background: #fffece;
          text-align: center;
          position: relative;
          margin: 10px 0;
          .list-title {
            font-size: 10px;
            font-weight: 600;
            padding: 13/2px 15px 5px 33/2px;
          }
          .list-item {
            background: url("../assets/juan/2.png") no-repeat center;
            background-size: 100% 100%;
            overflow: hidden;
            // width: 226/2px;
            width: 90%;
            margin: 10px auto;
            color: #fff;
            .item-left {
              float: left;
              font-size: 5.5px;
              padding: 8px 5px;
              .item-lod-price {
                text-decoration: line-through;
              }
              .item-new-price {
                display: block;
                padding-bottom: 3px;
              }
              .item-new-price-number {
                font-size: 23px;
                position: absolute;
                bottom: 20px;
                left: 51px;
                // color: #f5372b;
              }
            }
            .item-right {
              font-size: 8.5px;
              float: right;
              margin-top: 11px;
              margin-right: 3px;
              background: #f5372b;
              border-radius: 10px;
              color: #fff;
              padding: 2px 6.5px 1px 5.5px;
            }
          }
        }
      }
    }
  }
}
</style>