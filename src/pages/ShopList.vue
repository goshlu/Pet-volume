<template>
  <div class="main">
    <header>
      <THeader title="商品列表">
        <span class="header_back" slot="left" @click="$router.back()">
          <img src="../assets/imgs/icon_back@2x.png" alt />
        </span>
      </THeader>
    </header>
    <section>
      <div class="search">
        <van-search v-model="keyword" @focus="$router.push('/Search')" placeholder="请输入搜索关键词" />
      </div>
      <div class="content">
        <van-tabs
          v-model="active"
          @click="onClick"
          swipeable
          title-active-color="#FFA449"
          color="#fff"
        >
          <van-tab>
            <template #title>
              综合推荐
              <!-- <van-icon name="arrow-down" /> -->
            </template>
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
          </van-tab>
          <van-tab>
            <template #title>销量</template>
          </van-tab>
          <van-tab>
            <template #title>价格</template>
          </van-tab>
          <van-tab>
            <template #title>筛选</template>
          </van-tab>
        </van-tabs>
      </div>
    </section>
    <showPopup v-if="popupShow" @closetip="show()" :change-active="handelClick" :arr="fathermsg" />
  </div>
</template>
<script>
import THeader from "../components/header";
import showPopup from "../components/showPopup";
export default {
  name: "shopList",
  components: {
    THeader,
    showPopup
  },
  filters: {
    ellipsis(value) {
      if (!value) return "";
      if (value.length > 40) {
        return value.slice(0, 40) + "...";
      }
      return value;
    }
  },
  data() {
    return {
      keyword: "",
      active: 0,
      popupShow: false, //显示筛选弹框
      fathermsg: "",
      product: {
        name:
          "ROYA CANIN 皇家狗粮 MIJ31小型犬幼 犬狗粮 2-10月龄 全价粮 2kg 贵宾泰迪"
      },
    };
  },
  methods: {
    onClick(name) {
      // console.log(name,title)
      if (name === 3) {this.popupShow = !this.popupShow;
      }
    },
    handelClick(msg){
      // console.log(msg,111)
      this.active = 0;
    }
  }
};
</script>
<style lang="less">
.main {
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
    .search {
      width: 690/2px;
      margin: auto;
    }
    .content {
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
}
</style>
