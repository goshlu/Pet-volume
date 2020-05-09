<template>
  <div class="main">
    <header>
      <Theader title="每日精选">
        <span class="header_back" slot="left" @click="$router.back()">
          <img src="../assets/imgs/icon_back@2x.png" alt />
        </span>
      </Theader>
    </header>
    <section>
      <div class="bg"></div>
      <div class="suff">
        <img src="../assets/mrjx/1.jpg" width="355" height="145" alt />
      </div>
      <div class="content">
        <ul>
          <li>
            <div class="left">
              <img src="../assets/mrjx/shop.png" width="120" height="120" alt />
            </div>
            <div class="right">
              <div class="title">ROYA CANIN 皇家狗粮 小型犬</div>
              <div class="subtitle">MIJ31小型犬幼狗粮2-10个月龄全价粮2kg贵宾泰迪专用狗粮</div>
              <div class="center-item">
                <span class="item-price">￥<span>119</span>.00</span>
                <span class="item-like">120人喜爱</span>
              </div>
            </div>
          </li>
          <li>
            <div class="left">
              <img src="../assets/mrjx/shop.png" width="120" height="120" alt />
            </div>
            <div class="right">
              <div class="title">ROYA CANIN 皇家狗粮 小型犬</div>
              <div class="subtitle">MIJ31小型犬幼狗粮2-10个月龄全价粮2kg贵宾泰迪专用狗粮</div>
              <div class="center-item">
                <span class="item-price">￥<span>119</span>.00</span>
                <span class="item-like">120人喜爱</span>
              </div>
            </div>
          </li>
          <li>
            <div class="left">
              <img src="../assets/mrjx/shop.png" width="120" height="120" alt />
            </div>
            <div class="right">
              <div class="title">ROYA CANIN 皇家狗粮 小型犬</div>
              <div class="subtitle">MIJ31小型犬幼狗粮2-10个月龄全价粮2kg贵宾泰迪专用狗粮</div>
              <div class="center-item">
                <span class="item-price">￥<span>119</span>.00</span>
                <span class="item-like">120人喜爱</span>
              </div>
            </div>
          </li>
          <li>
            <div class="left">
              <img src="../assets/mrjx/shop.png" width="120" height="120" alt />
            </div>
            <div class="right">
              <div class="title">ROYA CANIN 皇家狗粮 小型犬</div>
              <div class="subtitle">MIJ31小型犬幼狗粮2-10个月龄全价粮2kg贵宾泰迪专用狗粮</div>
              <div class="center-item">
                <span class="item-price">￥<span>119</span>.00</span>
                <span class="item-like">120人喜爱</span>
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
  name: "Select",
  components: {
    Theader
  }
};
</script>
<style lang="less" scoped>
.main {
  width: 100%;
  header {
    width: 100%;
    height: 35px;
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
    .bg {
      width: 100%;
      height: 50px;
      background: #ffa449;
      border-radius: 10px;
    }
    .suff {
      text-align: center;
      margin-top: -30px;
      img {
        border-radius: 10px;
      }
    }
    .content{
      ul{
        li{
          overflow: hidden;
          .left{
            float: left;
            margin-left: 10px;
            margin-top: 15px;
          }
          .right{
            float: right;
            width: 60%;
            .title{
              font-size: 14px;
              color: #333;
              font-weight: 600;
              padding-top: 10px;
            }
            .subtitle{
              font-size: 12px;
              color: #666;
              padding-top: 10px;
            }
            .center-item{
              margin-top:30px;
              overflow: hidden;
              .item-price{
                font-size: 10px;
                color: #ea5655;
                float: left;
                span{
                  font-size: 15px;
                }
              }
              .item-like{
                font-size: 11px;
                color: #ea5655;
                float: right;
                margin-right: 30px;
                margin-top: 5px;
              }
            }
          }
          
        }
      }
    }
  }
}
</style>