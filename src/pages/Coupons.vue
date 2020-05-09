<template>
  <div class="main">
    <THeader title="我的优惠卷">
      <span class="header_back" slot="left" @click="$router.back()">
        <img src="../assets/imgs/icon_back@2x.png" alt />
      </span>
    </THeader>
    <section>
      <van-tabs v-model="active" color="#fff" background="#ffa449" title-active-color="#fff">
        <van-tab title="未使用">
          <div class="content">
            <ul>
              <li :class="isUse ? 'noUse' : 'use'">
                <div class="left">
                  <div class="left-title">满68元可用</div>
                  <div class="left-main">
                    <img v-if="isUse" src="../assets/imgs/money.png" alt />
                    <img v-else src="../assets/imgs/money_2.png" alt />
                    <span class="left-num">8</span>
                    <span class="left-til">通用券</span>
                    <span class="left-jil">满减券</span>
                  </div>
                  <div class="useImg" v-if="isuse">
                    <img src="../assets/imgs/isuse.png" alt />
                  </div>
                  <div class="left-co">详细信息：满68可用 新用户专用 拼团不可用。</div>
                </div>
                <div class="ht"></div>
                <div class="right">
                  <div class="right-til">满68减8</div>
                  <div class="right-lt">新用户专享</div>
                  <div class="right-time">20/04/10-20/04/40</div>
                </div>
              </li>
              <li :class="isUse ? 'noUse' : 'use'">
                <div class="left">
                  <div class="left-title">满68元可用</div>
                  <div class="left-main">
                   <img v-if="isUse" src="../assets/imgs/money.png" alt />
                    <img v-else src="../assets/imgs/money_2.png" alt />
                    <span class="left-num">8</span>
                    <span class="left-til">通用券</span>
                    <span class="left-jil">满减券</span>
                  </div>
                  <div class="left-co">详细信息：满68可用 新用户专用 拼团不可用。</div>
                </div>
                <div class="ht"></div>
                <div class="right">
                  <div class="right-til">满68减8</div>
                  <div class="right-lt">新用户专享</div>
                  <div class="right-time">20/04/10-20/04/40</div>
                </div>
              </li>
              <li :class="isUse ? 'noUse' : 'use'">
                <div class="left">
                  <div class="left-title">满68元可用</div>
                  <div class="left-main">
                    <img v-if="isUse" src="../assets/imgs/money.png" alt />
                    <img v-else src="../assets/imgs/money_2.png" alt />
                    <span class="left-num">8</span>
                    <span class="left-til">通用券</span>
                    <span class="left-jil">满减券</span>
                  </div>
                  <div class="left-co">详细信息：满68可用 新用户专用 拼团不可用。</div>
                </div>
                <div class="ht"></div>
                <div class="right">
                  <div class="right-til">满68减8</div>
                  <div class="right-lt">新用户专享</div>
                  <div class="right-time">20/04/10-20/04/40</div>
                </div>
              </li>
            </ul>
          </div>
        </van-tab>
        <van-tab title="全部">
          <div class="content">
            <ul>
              <li :class="isUse ? 'noUse' : 'use'">
                <div class="left">
                  <div class="left-title">满68元可用</div>
                  <div class="left-main">
                    <img v-if="isUse" src="../assets/imgs/money.png" alt />
                    <img v-else src="../assets/imgs/money_2.png" alt />
                    <span class="left-num">8</span>
                    <span class="left-til">通用券</span>
                    <span class="left-jil">满减券</span>
                  </div>
                  <div class="left-co">详细信息：满68可用 新用户专用 拼团不可用。</div>
                </div>
                <div class="ht"></div>
                <div class="right">
                  <div class="right-til">满68减8</div>
                  <div class="right-lt">新用户专享</div>
                  <div class="right-time">20/04/10-20/04/40</div>
                </div>
              </li>
              <li :class="isUse ? 'noUse' : 'use'">
                <div class="left">
                  <div class="left-title">满68元可用</div>
                  <div class="left-main">
                    <img v-if="isUse" src="../assets/imgs/money.png" alt />
                    <img v-else src="../assets/imgs/money_2.png" alt />
                    <span class="left-num">8</span>
                    <span class="left-til">通用券</span>
                    <span class="left-jil">满减券</span>
                  </div>
                  <div class="left-co">详细信息：满68可用 新用户专用 拼团不可用。</div>
                </div>
                <div class="ht"></div>
                <div class="right">
                  <div class="right-til">满68减8</div>
                  <div class="right-lt">新用户专享</div>
                  <div class="right-time">20/04/10-20/04/40</div>
                </div>
              </li>
            </ul>
          </div>
        </van-tab>
      </van-tabs>
    </section>
  </div>
</template>
<script>
import THeader from "../components/header";
export default {
  name: "coupons",
  components: {
    THeader
  },
  data() {
    return {
      active: 0,
      isUse: false,
      isuse: false
    };
  }
};
</script>
<style lang="less" scoped>
.main {
  width: 100%;
  background: #efefef;
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
  section {
    margin-top: 42px;
    .content {
      ul {
        .use {
          width: 710/2px;
          height: 110px;
          margin: 10px auto;
          position: relative;
          background: #fff;
          border-radius: 10px;
          background: url("../assets/imgs/right-bg (3).png") no-repeat;
          background-size: 100% 100%;
          .left {
            // width: ceil(100% - 210/2px);
            // border: 1px solid green;
            float: left;
            .left-title {
              font-size: 17/2px;
              padding: 27/2px 0 0 47/2px;
            }
            .left-main {
              padding: 30/2px 0 0 47/2px;
              position: relative;
              img {
                width: 15px;
                height: 15px;
                // background: #f03e3e;
              }
              .left-num {
                font-size: 55/2px;
                color: #f03e3e;
              }
              .left-til {
                position: absolute;
                top: 15px;
                left: 70px;
                font-size: 25/2px;
                color: #f03e3e;
              }
              .left-jil {
                position: absolute;
                top: 33px;
                left: 70px;
                font-size: 19/2px;
                color: #f26262;
              }
            }
            .useImg {
              position: absolute;
              right: 269/2px;
              top: 10px;
              img {
                width: 58/2px;
                height: 48/2px;
              }
            }
            .left-co {
              font-size: 9px;
              color: #999;
              padding: 10px 0 10px 47/2px;
            }
          }
          .ht {
            position: absolute;
            right: 115px;
            top: 5px;
            height: 100px;
            width: 0.5px;
            border-left: 1.2px dashed #f03e3e;
            z-index: 333;
          }
          .right {
            width: 210/2px;
            position: absolute;
            top: 50%;
            left: 84%;
            transform: translate(-50%, -50%);
            text-align: center;
            //   border: 1px solid red;
            float: right;
            color: #fff;
            background: url("../assets/imgs/right-bg.png") no-repeat;
            background-size: 100% 100%;
            .right-til {
              padding-top: 21px;
              // padding: 21px 56/2px 5px 56/2px;
              font-size: 25/2px;
            }
            .right-lt {
              font-size: 19/2px;
              margin-top: 5px;
            }
            .right-time {
              margin-top: 2px;
              font-size: 17/2px;
              padding-bottom: 31/2px;
            }
          }
        }
        // 使用后的状态
        .noUse {
          width: 710/2px;
          height: 110px;
          margin: 10px auto;
          position: relative;
          background: #fff;
          border-radius: 10px;
          background: url("../assets/imgs/right-bg (3).png") no-repeat;
          background-size: 100% 100%;

          .left-title {
            font-size: 17/2px;
            padding: 27/2px 0 0 47/2px;
          }
          .left-main {
            padding: 30/2px 0 0 47/2px;
            position: relative;
            img {
              width: 15px;
              height: 15px;
            }
            .left-num {
              font-size: 55/2px;
              color: #999;
            }
            .left-til {
              position: absolute;
              top: 15px;
              left: 70px;
              font-size: 25/2px;
              color: #999;
            }
            .left-jil {
              position: absolute;
              top: 33px;
              left: 70px;
              font-size: 19/2px;
              color: #cacaca;
            }
          }
          .left-co {
            font-size: 9px;
            color: #999;
            padding: 10px 0 10px 47/2px;
          }
        }
        .ht {
          position: absolute;
          right: 115px;
          top: 5px;
          height: 100px;
          width: 0.5px;
          border-left: 1.2px dashed #999;
          z-index: 333;
        }
        .right {
          width: 210/2px;
          position: absolute;
          top: 50%;
          left: 84%;
          transform: translate(-50%, -50%);
          text-align: center;
          float: right;
          color: #fff;
          background: url("../assets/imgs/isnoUse.png") no-repeat;
          background-size: 100% 100%;
          .right-til {
            padding-top: 21px;
            // padding: 21px 56/2px 5px 56/2px;
            font-size: 25/2px;
          }
          .right-lt {
            font-size: 19/2px;
            margin-top: 5px;
          }
          .right-time {
            margin-top: 2px;
            font-size: 17/2px;
            padding-bottom: 31/2px;
          }
        }
      }
    }
  }
}
</style>