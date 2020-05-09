<template>
  <div>
    <div class="main">
      <!-- logo -->
      <!-- <div class="title">拜家宠商城</div> -->
      <!-- 搜索条 -->
      <header class="home-header" :class="{'active' : headerActive}">
        <!-- <div class="header-search">
          <div class="search-icon">
            <van-icon name="chat-o" />
          </div>
          <router-link tag="span" class="search-title" :to="{name:'search'}">进口狗粮</router-link>
        </div>-->
        <van-search v-model="keyword" @focus="onSearch" placeholder="进口狗粮" />
      </header>
      <!-- 首页轮播 -->
      <van-swipe class="swiper-carousel" :autoplay="3000" :show-indicators="false">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img
            class="lazy_img"
            @click="handleClick"
            v-lazy="image.imageUrl"
            width="100%"
            height="210"
          />
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
        <!-- 每日精选 -->
        <div class="daily">
          <ul class="spike-center">
            <router-link class="center-item" to="/Select" tag="li">
              <span class="center-title">每日精选 <span class="select-1">精选</span></span>
              <span class="center-descr">全民推荐</span>
              <div>
                <img src="../assets/index/1.png" />
                <img src="../assets/index/1.png" />
              </div>
            </router-link>
            <router-link class="center-item center-border" to="/BigTicket" tag="li">
              <span class="center-title">领大额券 <span class="select-2">券</span></span>
              <span class="center-descr" style="color:#DD3749">领券购买</span>
              <div>
                <img src="../assets/index/2.png" />
                <img src="../assets/index/2.png" />
              </div>
            </router-link>
          </ul>
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
          <li v-for="(item,index) in goodsList" :key="index" @click="$router.push('/ShopDetails')">
            <img class="topImg" src="https://img2.epetbar.com/nowater/2020-05/06/22/254fab3ea084fdf6596f6b71a47a7d22.jpg@!200w-c" alt />
            <div class="list">
              <p class="name">{{item.name}}</p>
              <p class="present">
                <span>颗粒 | 卵磷脂</span>
              </p>
              <p class="coupon">
                <span>店铺卷满99减5</span>
              </p>
              <span class="price">￥ 68.00</span>
              <span class="choose">
                <span>立即选购</span>
                <img class="shopCart" src="../assets/imgs/shopcart.png" alt />
              </span>
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
import { getData } from "../api/http";
export default {
  name: "Home",
  components: {
    Tabbar
  },
  data() {
    return {
      active: 0,
      keyword: "",
      catList: [],
      recommendList: [
        { imgUrl: "https://img1.epetbar.com/2018-03/30/09/8d0ff6fe8e2c6f1368006534686488ed.png@!200w-c", name: "美国麦德氏钙片" },
        { imgUrl: "https://img1.epetbar.com/2016-03/25/16/267f57bfdd34167fd4d993d8d6d21afb.jpg@!200w-c", name: "美国麦德氏钙片" },
        { imgUrl: "https://img1.epetbar.com/2018-03/30/09/94ae6410d1578468833d787611bc7fa8.png@!200w-c", name: "美国麦德氏钙片" }
      ],
      goodsList: [
        { name: "美国麦德氏 IN-PLUS日常" },
        { name: "美国麦德氏 IN-PLUS日常" },
        { name: "美国麦德氏 IN-PLUS日常" }
      ],
      adImages: [
        { imgUrl: "https://img.yzcdn.cn/vant/apple-1.jpg" },
        { imgUrl: "https://img.yzcdn.cn/vant/apple-2.jpg" }
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
          imageUrl: "https://img2.epetbar.com/2020-04/30/14/fba34d955ff7890ed8b668e6012a48fc.jpg?x-oss-process=style/water"
        },
        {
          imageUrl: "https://img2.epetbar.com/2020-05/06/19/9877dfc2811cac1bdb4ae37e02fd6be6.jpg?x-oss-process=style/water"
        },
        {
          imageUrl: "https://img2.epetbar.com/nowater/2020-05/06/18/1f184e846bb036cec125369889823057.jpg?x-oss-process=style/water"
        },
        {
          imageUrl: "https://img2.epetbar.com/2020-04/28/15/203bc422fe94549e19bdd3b31c8ab88e.jpg?x-oss-process=style/water"
        }
      ]
    };
  },
  computed: {},
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
    this.getDatas();
    // this.$eventBus.$emit("changeTag", 0);
    // this.setHomeWrapperHeight();
  },

  methods: {
    //测试数据
    async getDatas() {
      await getData()
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    onchange() {
      // this.$router.push('/Login')
    },
    //搜索跳转
    onSearch() {
      this.$router.push("/Search");
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
    },
    //获取微信openID
    getCode(){ //非默认授权,第一次有弹窗
      const code = GetUrlParam('code'); // 截取路径中的code,如果没有就去微信授权，如果已经获取了就直接code给后台获取openId
      const local = window.location.href;
      if(code == null || code === ''){
        window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid='+window.APPID + '&redirect_url='+encodeURIComponent(local)+'&response_type=code=snsap'

      }else{
        this.getOpenId(code) //把code传给后台获取用户信息
      }
    },
    getOpenId(){ //通过code获取openId等用户信息，/api/user/wechat/login为后台接口
    let _this = this;
    this.$http.post('/api/user/wechat/login',{code:code}).then(res=>{
      let datas = res.data
      if(datas.code === 0){
        console.log('成功')
      }
    }).catch(err=>{
      console.log(err);
      
    })

    }
  }
};
</script>
<style lang="less" scoped>
@import url("./../styles/base.less");

.main {
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
    background: #fafafa;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
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
        font-size: 11px;
        color: #ccc;
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
        display: flex;
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
        box-shadow: 0 1px 0 0 #eee;
        background: #fff;

        li {
          width: 60px;
          text-align: center;
          position: relative;

          img {
            width: 65px;
            height: 65px;
          }

          span {
            position: absolute;
            bottom: 10px;
            left: 4px;
            width: 100%;
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
    .spike-center {
      padding-bottom: 15px;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .center-item.center-border {
        border-style: solid;
        border-color: transparent;
        border-right-color: #efefef;
        border-right-style: solid;
        border-right-width: 1px;
        padding-right: 20px;
      }
      .center-item {
        display: flex;
        justify-content: center;
        padding: 10px 0 0 10px;
        flex-direction: column;
        .center-title {
          font-size: 14px;
          color: #3a3a3a;
          font-weight: 600;
          margin-left: 5px;
          .select-1{
            font-size: 3px;
            padding: .5px 1px;
            color: #fff;
            background: #ffa449;
          }
          .select-2{
            font-size: 3px;
            padding: .5px 1px;
            color: #fff;
            background: red;
          }
        }
        .center-descr {
          font-size: 11px;
          color: #ff9351;
          margin-left: 5px;
        }
        img {
          padding: 5px;
          width: 95/2px;
          height: 62/2px;
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
            // width: 176/2px;
            height: 70px;
            position: absolute;
            left: 15px;
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
            border-radius: 5px;

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
            }
          }
        }
      }
    }

    .like {
      width: 556/2px;
      height: 102/2px;
      margin: 15px auto;
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
      width: 680/2px;
      margin: 0 auto;
      justify-content: space-between;

      li {
        width: 320/2px;
        height: 220px;
        position: relative;
        background: #eee;
        margin-top: 10px;

        .topImg {
          // width: 214/2px;
          height: 115px;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 15px;
        }

        .list {
          position: absolute;
          top: 130px;
          left: 21/2px;

          .name {
            padding-top: 5px;
            font-size: 12px;
            font-weight: 400;
            text-align: center;
          }

          .present {
            font-size: 8px;
            color: #ffb945;
            padding: 5px 0;

            span {
              background: #ffedcf;
            }
          }

          .coupon {
            font-size: 11px;
            color: #ff7051;

            span {
              border: 0.5px solid #ff5325;
              padding: 1px;
            }
          }

          .price {
            font-size: 14px;
            color: #333333;
            font-weight: bold;
          }

          .choose {
            font-size: 19/2px;
            position: relative;
            color: #ffffff;
            bottom: 3px;
            left: 5px;

            span {
              background: #ffa40e;
              border-radius: 7.5px;
              padding: 2px 7px;
            }

            .shopCart {
              width: 10px;
              height: 10px;
              position: absolute;
              right: 0;
              top: 0;
              z-index: 100;
            }
          }
        }
      }
    }
  }
}
</style>
