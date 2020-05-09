<template>
  <div class="main">
    <header>
      <Theader title="我的收藏">
        <span class="header_back" slot="left" @click="$router.back()">
          <img src="../assets/imgs/icon_back@2x.png" width="8.5" height="13.5" alt />
        </span>
      </Theader>
    </header>
    <section>
      <div class="content">
        <ul>
          <li>
            <div class="left">
              <img src="../assets/classfiy/shop.png" alt />
            </div>
            <div class="right">
              <div class="title">{{product.name | ellipsis}}</div>
              <div class="right-tab">
                <span>泰迪</span>
                <span>幼犬</span>
              </div>
              <div class="price">¥119.00</div>
              <div class="full">
                <span>满68减8</span>
              </div>
              <div class="bottom">
                <span>98%好评率</span> |
                <span>30天售出：2085</span>
              </div>
            </div>
          </li>
          <li>
            <div class="left">
              <img src="../assets/classfiy/shop.png" alt />
            </div>
            <div class="right">
              <div class="title">{{product.name | ellipsis}}</div>
              <div class="right-tab">
                <span>泰迪</span>
                <span>幼犬</span>
              </div>
              <div class="price">¥119.00</div>
              <div class="full">
                <span>满68减8</span>
              </div>
              <div class="bottom">
                <span>98%好评率</span> |
                <span>30天售出：2085</span>
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
  name: "Collection",
  filters: {
    ellipsis(value) {
      if (!value) return "";
      if (value.length > 40) {
        return value.slice(0, 40) + "...";
      }
      return value;
    }
  },
  components: {
    Theader
  },
  data() {
    return {
      product: {
        name:
          "ROYA CANIN 皇家狗粮 MIJ31小型犬幼 犬狗粮 2-10月龄 全价粮 2kg 贵宾泰迪"
      }
    };
  }
};
</script>
<style lang="less" scoped>
.main {
  width: 100%;
  //   height: 100vh;
  header {
    width: 100%;
    height: 43px;
    position: relative;
    .header_back {
      position: absolute;
      left: 10px;
      z-index: 300;
      top: 42%;
      transform: translateY(-50%);
    }
  }
  section {

    ul {
      li {
        overflow: hidden;
        .left {
          float: left;
          width: 120px;
          height: 120px;
          padding: 10px;
          img {
            width: 100%;
            height: 100%;
            padding-top: 10px;
          }
        }
        .right {
          float: right;
          width: 216px;
          padding: 10px 10px 10px 5px;
          .title {
            font-size: 12px;
            font-weight: 500;
            &:hover {
              color: #ff5656;
            }
          }
          .right-tab {
            display: flex;
            flex: 1;
            font-size: 9px;
            span {
              padding: 3px;
              margin-top: 5px;
              margin-right: 5px;
              background: #f2f2f2;
              border-radius: 15px;
            }
          }
          .price {
            margin-top: 5px;
            font-size: 23/2px;
            color: #ff5656;
          }
          .full {
            margin: 5px 0;
            display: block;
            font-size: 8px;
            color: #ff8c8c;
            span {
              padding: .5px;
              border: 1px solid #ff5656;
            }
          }
          .bottom {
            margin: 5px 0;
            font-size: 9px;
            color: #959595;
          }
        }
      }
    }
  }
}
</style>