<template>
  <div>
    <div class="home">
      <!-- logo -->
      <!-- <div class="title">拜家宠商城</div> -->
      <!-- 搜索条 -->
      <header class="home-header" :class="{'active' : headerActive}">
        <div class="header-search">
          <!-- <svg-icon class="search-icon" icon-class="search"></svg-icon> -->
          <div class="search-icon">
            <img src="../assets/imgs/search.png" alt />
          </div>
          <input :value="keywords" class="search-title" />
        </div>
        <!-- <svg-icon class="customer-service-icon" icon-class="customer-service"></svg-icon> -->
      </header>
      <!-- 首页轮播 -->
      <van-swipe class="swiper-carousel" :autoplay="3000" :show-indicators="false">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img class="lazy_img" @click="handleClick" v-lazy="image.imageUrl" />
        </van-swipe-item>
      </van-swipe>

      <div class="content">
        <!-- 推荐菜单 -->
        <div class="tag-menu">
          <ul>
            <li>
              <img src="../assets/imgs/2.png" alt />
              <span>营养主粮</span>
            </li>
            <li>
              <img src="../assets/imgs/2.png" alt />
              <span>美味猫粮</span>
            </li>
            <li>
              <img src="../assets/imgs/3.png" alt />
              <span>趣味玩具</span>
            </li>
            <li>
              <img src="../assets/imgs/4.png" alt />
              <span>健康护理</span>
            </li>
            <li>
              <img src="../assets/imgs/5.png" alt />
              <span>生活必备</span>
            </li>
          </ul>
        </div>
        <!-- 广告 -->
        <div class="ad">
          <van-swipe :autoplay="3000" class="ad-items">
            <van-swipe-item v-for="(image, index) in adImages" :key="index">
              <img v-lazy="image.imageUrl" />
            </van-swipe-item>
          </van-swipe>
        </div>
        <!-- 推荐商品 -->
        <div class="recommend">
          <ul>
            <li v-for="(item,index) in recommendList" :key="index">
              <img class="l1" src="../assets/imgs/1.png" alt />
              <img class="l2" :src="item.imgUrl" alt />
              <div class="good-content">
                <div class="good-title">{{item.name}}</div>
                <div class="Snapped">立即抢购</div>
              </div>
            </li>
          </ul>
        </div>
        <!-- 猜你喜欢 -->
        <div class="like"></div>
      </div>
      <!-- 商品列表 -->
      <div class="goodsList">
        <ul>
          <li v-for="(item,index) in goodsList" :key="index">
            <img src="../assets/imgs/shop.png" alt />
            <div class="list">
              <p class="name">{{item.name}}</p>
              <p class="present"><span>颗粒 | 卵磷脂</span></p>
              <p class="coupon"><span>店铺卷满99减5</span></p>
              <span class="price">￥ 68.00</span>
              <span class="choose">立即选购</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <Tabbar />
  </div>
</template>
<script>
import Tabbar from "../components/tabbar.vue";
export default {
  name: "Index",
  components: {
    Tabbar
  },
  data() {
    return {
      active: 0,
      keywords: "进口狗粮",
      catList: [],
      recommendList: [
        { imgUrl: require("../assets/imgs/goods.png"), name: "美国麦德氏钙片" },
        { imgUrl: require("../assets/imgs/goods.png"), name: "美国麦德氏钙片" },
        { imgUrl: require("../assets/imgs/goods.png"), name: "美国麦德氏钙片" }
      ],
      goodsList: [
        { name: "美国麦德氏 IN-PLUS日常" },
        { name: "美国麦德氏 IN-PLUS日常" },
        { name: "美国麦德氏 IN-PLUS日常" }
      ],
      adImages:[
        {imgUrl: 'https://img.yzcdn.cn/vant/apple-1.jpg',},
        {imgUrl: 'https://img.yzcdn.cn/vant/apple-2.jpg',}
      ],
      loading: true,
      headerActive: false,
      swiperOption: {
        loop: true,
        autoplay: false,
        width: 480,
        notNextTick: true,
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        direction: "horizontal", // 水平方向移动
        setWrapperSize: true, // Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
        height: window.innerHeight, // 高度设置，占满设备高度
        slidesPerView: 2 // 设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
      },
      images: [
        {
          imageUrl:
            "https://goodmaoning.oss-cn-hangzhou.aliyuncs.com/aljhtx/setting/20190905/1567620746323.png"
        },
        {
          imageUrl:
            "https://goodmaoning.oss-cn-hangzhou.aliyuncs.com/aljhtx/setting/20190905/1567620775137.png"
        }
      ]
    };
  },
  computed: {
    price: () => {
      return (this.price = "￥" + this.price);
    }
  },
  /* activated() {
    this.initData(); //初始数据
    this.handelTabChange();
  },
  watch: {
    active() {
      this.tabItemLists = [];
    }
  }, */
  mounted() {
    // this.$eventBus.$emit("changeTag", 0);
    // this.setHomeWrapperHeight();
  },

  methods: {
    onchange() {
      // this.$router.push('/Login')
    },
    /*     //当滑块滑动到底部的时候
    handelScorllToEnd() {
      this.pageNum++;
      this.handelTabChange();
    },
    //动态设置searc-wrap的高
    setHomeWrapperHeight() {
      let $screenHeight = document.documentElement.clientHeight;
      this.$refs.homeWrapper.style.height = $screenHeight - 100 + "px";
    }, */
    //initData
    /* initData() {
      this.$http.get("/").then(res => {
        let data = res.data.content;
        this.images = data.bannerList;
        this.adList = data.adList;
        this.catList = data.catList;
        this.iconList = data.iconList;
      });
    },
    handelTabChange() {
      this.loading = true;
      this.$http.get("/").then(res => {
        this.loading = true;
        if (res) this.tabItemLists.push(...res.data.content);
      });
    },*/
    handleClick(linkUrl) {
      this.$router.push("/");
    }
  }
};
</script>
<style lang="less" scoped>
@import url("./../styles/base.less");
.home {
  width: 100%;
  height: 100%;
  .title {
    width: 100%;
    height: 44px;
    text-align: center;
    line-height: 44px;
    font-size: 20px;
    background: rgba(255, 255, 255, 1);
  }
  .home-header {
    position: fixed;
    width: 100%;
    top: 5px;
    // background: ();
    background-size: 100% 100%;
    padding: 8px 8px 15px 8px;
    height: 55/2px;
    display: flex;
    justify-content: center;
    align-items: center;
    // @include boxSizing;
    font-size: 30/2px;
    color: #999;
    z-index: 10000;
    .header-search {
      border-radius: 20px;
      display: flex;
      margin-top: 5px;
      width: 539/2px;
      height: 60/2px;
      line-height: 60/2px;
      color: #232326;
      background: #fff;
      border: 1px solid #ccc;
      .search-icon {
        // border: 1px solid red;
        // line-height: 15px;
        // justify-items: center;
        img {
          width: 15px;
          height: 15px;
          padding: 5px;
        }
      }
      .app-name {
        padding: 0 10px;
        color: #f63515;
        font-size: 20px;
        font-weight: bold;
      }
      .icon-search {
        padding: 0 10px;
        font-size: 17px;
      }
      .search-title {
        font-size: 8px;
        color: #ccc;
        // width: 100%;
        padding-left: 10px;
      }
    }
    .customer-service-icon {
      margin-top: 5px;
    }
  }
  .swiper-carousel {
    padding-bottom: 5px;
    margin-top: 40px;
    // background: url('../../assets/image/home_big_rand.png') no-repeat center bottom;
    background-size: 100% 6%;
    .lazy_img {
      width: 100%;
      height: 210px;
    }
  }
  .swiper-cls {
    background-color: #efeff4;
    position: relative;
    .swiper-slide {
      padding-left: 16px;
      background-color: #efeff4;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .slide_img {
      width: 222px;
      height: 90px;
      border-radius: 5px;
    }
    .radian-img {
      position: absolute;
      bottom: -9px;
      margin-left: 40px;
    }
  }
  .home-tags {
    margin-top: 23px;
    .tags-content {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0 10px;
      .tags-item {
        display: felx;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .tags-icon {
          width: 43px;
          height: 43px;
        }
        .item-text {
          padding-top: 5px;
          font-size: 11px;
          color: #3a3a3a;
        }
      }
    }
  }
  .content {
    width: 715/2px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.3);
    .tag-menu {
      ul {
        width: 350px;
        height: 98.5px;
        padding: 5px;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        border: 0.5px solid rgba(190, 186, 186, 0.3);
        border-radius: 10px;
        box-shadow: 6px 5px 5px #eee;
        background: #fff;
        li {
          width: 60px;
          // border: 0.5px solid green;
          text-align: center;
          position: relative;
          // padding: 5px;
          img {
            width: 65px;
            height: 65px;
            // display: inline-block;
            // border: .5px solid firebrick;
          }
          span {
            // margin-bottom: -15px;
            position: absolute;
            bottom: 10px;
            left: 4px;
            // display: inline-block;
            width: 100%;
            // border: .5px solid firebrick;
            font-size: 12px;
            text-align: center;
          }
        }
      }
    }
    .ad {
      width: 690 / 2px;
      height: 170/2px;
      margin: 5px auto;
      // border: 1px solid gray;
      border-radius: 40px;
      background: #ffb18a;
      .ad-items {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
          border-radius: 40px;
        }
      }
    }
    .recommend {
      margin: 0 5px;
      ul {
        display: flex;
        flex: 1;
        justify-content: space-around;
        position: relative;
        li {
          // position: absolute;
          position: relative;
          width: 220/2px;
          height: 216/2px;

          .l1 {
            width: 47/2px;
            height: 55/2px;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 100;
          }
          .l2 {
            width: 176/2px;
            height: 140/2px;
            position: absolute;
            left: 27/2px;
            bottom: 25px;
            z-index: 99;
          }
          .good-content {
            width: 110px;
            height: 31px;
            display: flex;
            background: #ff7430;
            position: absolute;
            bottom: 0;
            border: 0.5px solid red;
            .good-title {
              font-size: 10px;
              color: #fff;

              position: absolute;
              left: 5px;
              top: 9px;
            }
            .Snapped {
              font-size: 4px;
              position: absolute;
              right: 1px;
              width: 30px;
              padding: 1px;
              color: #fff;
              border: 0.5px solid #fff;
              text-align: center;
              // margin-left: px;
            }
          }
        }
      }
    }
    .like {
      width: 556/2px;
      height: 102/2px;
      margin: 10px auto;
      // border-radius: 30px;
      background: url("../assets/imgs/like.png") no-repeat center;
      background-size: 100% 100%;
    }
  }
  .goodsList {
    display: flex;
    flex: 1;
    position: relative;
    ul {
      display: flex;
      flex-wrap: wrap;
      width: 710/2px;
      margin: 0 auto;
      justify-content: space-between;
      // border: 1px solid red;
      li {
        width: 320/2px;
        height: 430/2px;
        position: relative;
        img {
          width: 214/2px;
          height: 218/2px;
          position: absolute;
          left: 20px;
          top: 31/2px;
        }
        .list {
          position: absolute;
          top: 130px;
          left: 21/2px;
          .name {
            font-size: 12px;
            font-weight: bold;
            text-align: center;
          }
          .present {
            // display: block;
            font-size: 8px;
            color: #ffb945;
            padding: 5px 0;
            span{
              background: #FFEDCF;
            }
          }
          .coupon {
            font-size: 11px;
            // display: block;
            color: #ff7051;
            span{
              border: .5px solid #FF5325;
              padding: 2.5px;
            }
          }
          .price {
            font-size: 14px;
            color: #333333;
            font-weight: bold;
          }
          .choose {
            font-size: 19/2px;
            background: #ffa40e;
            border-radius: 7.5px;
            padding: 2px 10px 3px 7px;
          }
        }
      }
    }
  }
}
</style>