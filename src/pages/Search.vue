<template>
  <div class="main">
    <div class="search-box">
      <form action="/">
        <van-search
          v-model="keyworld"
          show-action
          placeholder="猫罐头"
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
      <div class="search-content">
        <div class="hot-list">
          <span class="hot-words">热门搜索</span>
          <div>
            <span
              class="hot-detail hot"
              v-for="(item,index) in hotSerach"
              @click="handleHotSerach(item.productCategoryId)"
              :key="index"
            >
              {{item.productCategoryName}}
            </span>
          </div>
        </div>
        <!-- <div class="search-list history-list">
          <div class="history-search">
            <span>历史搜索</span>
            <span @click="deleteHistory(0)">
              <svg-icon icon-class="icon-delete"></svg-icon>
            </span>
          </div>
          <div class="histort-search">
            <span
              v-for="(item,index) in historySearch"
              @click="handleGoHistory(item)"
              :key="index"
            >{{item}}</span>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "search",
  data() {
    return {
      keyworld: "",
      searchText: "",
      // seclectActive: false,
      hotSerach: [
          {productCategoryName:'渴望'},
          {productCategoryName:'纽布丁'},
          {productCategoryName:'纽顿'},
          {productCategoryName:'益生菌'},
          {productCategoryName:'益生菌'}
      ],
      serarchResult: [],
      page: 1,
      historySearch: []
    };
  },
  methods: {
    onSearch(val) {
    //   this.$toast(val);
      this.$toast('搜索了')
    },
    onCancel() {
      this.$router.back();
    },
/*     handleGoHistory(item) {
      this.$router.push({
        path: `/search/searchReault`,
        query: {
          // categoryId: categoryId,
          searchWord: item
        }
      });
    }, */
    initData() {
      this.$http
        .get(
          `/api/product/hotAndHistorySearch?merchantShopId=${
            this.$route.query.merchantShopId
              ? this.$route.query.merchantShopId
              : ""
          }`
        )
        .then(response => {
          this.historySearch = response.data.content.historySearch;
          this.hotSerach = response.data.content.hotSerach;
        });
    },
    handleHotSerach(categoryId) {
      this.$router.push({
        path: `/search/searchReault`,
        query: {
          categoryId: categoryId,
          merchantShopId: this.$route.query.merchantShopId || ""
        }
      });
    },
    getSearch() {
      let keyword = this.searchText.replace(/^\s+|\s+$/g, ""); // 去除两头空格
      if (!keyword) {
        this.$toast({
          mask: false,
          duration: 1000,
          message: "请输入搜索内容"
        });
        return;
      }
      this.$router.push({
        path: `/search/searchReault`,
        query: {
          searchWord: keyword,
          merchantShopId: this.$route.query.merchantShopId
        }
      });
    },

    /* deleteHistory() {
      this.$dialog
        .confirm({
          title: "提示！",
          message: "确认删除所有历史搜索吗？"
        })
        .then(() => {
          this.$http
            .post(`/api/product/delHistorySearch?type=0`)
            .then(response => {
              this.$toast({
                mask: false,
                duration: 1000,
                message: "删除成功！"
              });
              this.initData();
            });
        });
    } */
  },
  directives: {
    focus: {
      // 指令的定义
      inserted: function(el) {
        el.focus();
      }
    }
  }
};
</script>
<style lang="less">
.main {
  width: 100%;
  height: 100vh;
  .search-box {
    width: 100%;
    height: 100vh;
    background-color: #fafafa;
    font-size: 30px;
    .search-content {
      width: 100%;
      padding: 0 16px;
      box-sizing: border-box;
      .hot-list {
        .hot-words {
          position: relative;
        //   color: #ec3924;
          font-size: 11.5px;
        }
        .hot-detail {
          font-size: 10.5px;
          color: #666;
          background: #f2f2f2;
        //   border: 1px solid #979797;
          padding: 2px 10px;
          margin-right: 10px;
          border-radius: 10.5px;
          display: inline-block;
        }
        .hot-detail.hot {
        //   border: 1px solid #ec3924;
          color: #666;
          .svg-icon {
            width: 12px;
            height: 14px;
          }
        }
      }
      .search-list {
        width: 100%;
        .histort-search {
          span {
            font-size: 14px;
            color: #686868;
            padding: 2px 10px;
            margin-right: 16px;
            margin-bottom: 10px;
            display: block;
          }
        }
        &.history-list {
          margin-bottom: 20px;
          .history-search {
            font-size: 14px;
            padding-top: 20px;
            display: flex;
            justify-content: space-between;
            color: #ec3924;
          }
          .icon-delete {
            width: 16px;
            height: 16px;
            float: right;
          }
        }
      }
    }
  }
}
</style>