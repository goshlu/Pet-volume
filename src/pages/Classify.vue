<template>
  <div class="classify">
    <div class="title-text">商品分类</div>
    <van-loading class="home-loading" v-show="loading" color="#EC3924" size="25px" type="spinner" />
    <van-search v-model="keyworld" @focus="onSearch" placeholder="请输入搜索关键词" />
    <section class="search-wrap" ref="searchWrap">
      <!-- 侧边分类 -->
      <list-scroll :scroll-data="categoryData" class="nav-side-wrapper">
        <ul class="nav-side">
          <li
            v-for="(item,index) in categoryData"
            :key="index"
            :class="{'active' : currentIndex === index}"
            @click="selectMenu(index)"
          >
            <span>{{item.label}}</span>
            <!-- <span>{{item.label}}</span> -->
          </li>
        </ul>
      </list-scroll>
      <!-- 中间二级分类 -->
      <list-scroll class="search-content" :scroll-data="categoryData">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <template v-for="(category,index) in categoryData">
              <div class="swiper-slide" :key="index" v-if="currentIndex === index">
                <img
                  @click="selectProduct(category)"
                  class="category-main-img"
                  v-lazy="category.imageUrl"
                  v-if="category.imageUrl"
                />
                <div>
                  <div class="ls-title">
                    <p class="goods-title">狗狗主粮</p>
                    <span>
                      全部商品
                      <img src="../assets/imgs/icon_back_classfiy.png" alt />
                    </span>
                  </div>
                  <!-- 狗狗区域 -->
                  <div class="category-list">
                    <div
                      class="product-item"
                      @click="selectProduct()"
                      v-for="(product,index) in productImgs"
                      :key="index"
                    >
                      <img class="item-img" v-lazy="product.imgUrl" />
                      <div class="product-title">{{product.label}}</div>
                    </div>
                  
                  
                  
                  </div>
                  <!-- 猫猫区域 -->
                  <div class="ls-title">
                    <p class="goods-title">猫猫主粮</p>
                    <span>
                      全部商品
                      <img src="../assets/imgs/icon_back_classfiy.png" alt />
                    </span>
                  </div>
                  <div class="category-list">
                    <div
                      class="product-item"
                      @click="selectProduct()"
                      v-for="(product,index) in productImgs"
                      :key="index"
                    >
                      <img class="item-img" v-lazy="product.imgUrl" />
                      <div class="product-title">{{product.label}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </list-scroll>
    </section>
    <tabbar></tabbar>
  </div>
</template>

<script>
import ListScroll from "../components/ListScroll";
// import cmheader from "../components/header";
import tabbar from "../components/tabbar";

export default {
  components: {
    ListScroll,
    // cmheader,
    tabbar
  },
  name: "classify",
  data() {
    return {
      tags: [],
      currentIndex: 0,
      loading: false,
      keyworld:'',
      categoryData: [
        { label: "主粮",},
        { label: "零食" },
        { label: "玩具" },
        { label: "清洁" },
        { label: "保健" },
        { label: "美容" }
      ],
      productImgs: [
        {
          label: "进口狗粮",
          imgUrl: require("../assets/classfiy/p1 (1).jpg")
        },
        {
          label: "国产狗粮",
          imgUrl: require("../assets/classfiy/p1 (2).jpg")
        },
        {
          label: "功能狗粮",
          imgUrl: require("../assets/classfiy/p1 (3).jpg")
        },
        {
          label: "冻干狗粮",
          imgUrl: require("../assets/classfiy/p1 (4).jpg")
        }
      ],
      templateCategoryData: []
    };
  },
  // activated() {
  //   this.getGoodsList();
  // },
  created() {
    // this.getGoodsList();
  },
  methods: {
    //搜索跳转
    onSearch(){
      this.$router.push('/Search')
    },
    // 获取分类
    getGoodsList() {
      this.loading = true;
      this.$http.get(`/api/product/category`).then(response => {
        const categoryData = response.data.content;
        this.categoryData = categoryData;
        this.loading = false;
      });
    },
    handleSearch() {
      this.$router.push("/search");
    },
    // 左侧菜单和右侧区域联动
    selectMenu($index) {
      this.currentIndex = $index;
    },
    // 动态设置searc-wrap的高
    setSearchWrapHeight() {
      let $screenHeight = document.documentElement.clientHeight;
      this.$refs.searchWrap.style.height = $screenHeight - 100 + "px";
    },
    selectProduct(product) {
      this.$router.push({
        path: "/classify/classifySearch",
        query: { categoryId: product.value, product: product }
      });
    }
  },
  mounted() {
    if (!this.loading) {
      this.setSearchWrapHeight();
    }
    // this.$eventBus.$emit("changeTag", 1);
  }
};
</script>

<style scoped lang="less">
// @import "../../styles/mixin.scss";
.classify {
  height: 100%;
  background-color: #fff;
  .title-text {
    width: 100%;
    background: #ffa449;
    color: #fff;
    text-align: center;
    line-height: 24px;
    font-size: 14px;
    padding: 11px 0;
    font-weight: 600;
  }
  .home-header {
    font-size: 18px;
    color: #3a3a3a;
    font-weight: 600;
    text-align: center;
    line-height: 50px;
  }
  .home-loading {
    text-align: center;
  }
  .search-wrap {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background: #fff;
    .nav-side-wrapper {
      width: 88px;
      height: 100%;
      overflow: hidden;
      .nav-side {
        width: 100%;
        box-sizing: border-box;
        background: #f8f8f8;
        li {
          width: 100%;
          height: 77px;
          text-align: center;
          font-weight: 600;
          font-size: 14px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #949497;
          flex-direction: column;
          &.active {
            color: #ec3924;
            border-left: 3px solid transparent;
            border-color: #ec3924;
            background: #fff;
          }
        }
      }
    }
    .search-content {
      width: 80%;
      height: 100%;
      padding: 0 16px;
      background: #fff;
      padding-bottom: 30px;
      box-sizing: border-box;
      .swiper-container {
        width: 100%;
        .swiper-slide {
          width: 100%;
          padding-top: 20px;
          .ls-title {
            display: flex;
            position: relative;
            .goods-title {
              font-size: 12px;
              color: #333;
              font-weight: 600;
              padding-bottom: 10px;
            }
            span{
              font-size:11px;
              position: absolute;
              right: 20px;
              top: 15px;
            }
            img{
              position: absolute;
              left: 55px;
              top: 4px;
              width: 4.5px;
              height: 8px;
            }
          }
          .category-main-img {
            width: 100%;
            border-radius: 8px;
            height: 107px;
          }
          .category-main-img[lazy="loading"] {
            // background: #949497 url("../../assets/icons/pre-view.png") no-repeat
            //   center center;
            background-size: 100% 100%;
          }
          .category-list {
            display: flex;
            flex-wrap: wrap;
            flex-shrink: 0;
            width: 100%;
            .catogory-title {
              width: 100%;
              font-size: 34px;
              font-weight: 500;
              padding: 40px 0;
            }
            .product-item {
              width: 33%;
              margin-bottom: 20px;
              text-align: center;
              font-size: 30px;
              .item-img {
                width: 65px;
                height: 80px;
              }
              .item-img[lazy="loading"] {
                // background: #949497 url("../../assets/icons/pre-view.png")
                //   no-repeat center center;
                background-size: 100% 100%;
              }
              .product-title {
                color: #333;
                font-size: 13px;
                font-weight: 600;
                // width: 50%;
                white-space: nowrap;
              }
            }
          }
        }
      }
    }
  }
}
</style>
