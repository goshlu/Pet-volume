<template>
  <div class="main">
    <van-popup
      v-model="myshow"
      position="right"
      :style="{ width: '88%',height: '100%' ,bottom:'0',}"
    >
      <div class="content">
        <div class="list">
          <van-collapse v-model="activeNames" safe-area-inset-bottom="true" click-overlay="handelClose">
            <van-collapse-item title="热门筛选" name="1">
              <ul>
                <li>促销</li>
                <li>优惠卷</li>
                <li>罐头</li>
              </ul>
            </van-collapse-item>
            <van-collapse-item title="猫猫狗狗" name="2">
              <ul>
                <li>猫猫</li>
                <li>狗狗</li>
              </ul>
            </van-collapse-item>
            <van-collapse-item title="品牌" name="3">
              <ul>
                <li>海洋之心</li>
                <li>伯纳天纯</li>
              </ul>
            </van-collapse-item>
            <van-collapse-item title="适用年龄" name="4">
              <ul>
                <li :class=" index = 1 ? 'active' : ''">成猫</li>
                <li>成犬</li>
                <li>幼猫</li>
                <li>幼犬</li>
              </ul>
            </van-collapse-item>
            <van-collapse-item title="主要配方" name="4">
              <ul>
                <li :class=" index = 1 ? 'active' : ''">虾肉</li>
                <li>鱼肉</li>
                <li>鸡肉</li>
                <li>牛肉</li>
                <li>羊肉</li>
              </ul>
            </van-collapse-item>
            <van-collapse-item title="适合体型" name="4">
              <ul>
                <li :class=" index = 1 ? 'active' : ''">小型犬</li>
                <li>中型犬</li>
                <li>全体型犬</li>
              </ul>
            </van-collapse-item>
          </van-collapse>
        </div>
      </div>
      <!-- <div class="content">
        <div class="left">
          <span>适用年龄</span>
        </div>
        <div class="right">
          <span>更多</span>
          <van-icon name="arrow-down" size="5px" />
        </div>
        <div class="list"></div>
      </div>-->
      <div class="submit">
        <van-button type="default" size="normal">重置</van-button>
        <van-button type="warning" size="normal">确定</van-button>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "shopListT",
  data() {
    return {
      props: ["arr"], //父组件传来的值
      myshow: true, //popup的显示，在组件中，默认是显示，不用父组件传值
      dataarr: this.arr,
      index: 1,
      activeNames: ["1", "2", "3", "4"]
    };
  },
  methods: {
    close() {
      this.$emit("closeTip", false); //把关闭信息传递给父组件
    },
    changeActive(){
      this.$emit('change-active',console.log(111)) 
    }
  }
};
</script>

<style scoped lang="less">
.main {
  .content {
    width: 100%;
    overflow: auto;
    max-height: 80%;
    zoom: 1;

    .left {
      float: left;

      span {
        padding: 29/2px 0 0 39/2px;
        font-size: 13px;
      }
    }

    .right {
      float: right;
      font-size: 19/2px;
      color: #999;
      padding: 20px 15px 0 0;
    }

    .list {
      width: 100%;

      ul {
        width: 100%;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        flex: 1;

        li {
          margin-left: 5px;
          font-size: 21/2px;
          padding: 5px 10.5px;
          border-radius: 25px;
          text-align: center;
          background: #f2f2f2;
        }

        li.active {
          border: 1px solid #ffa449;
          color: #ffa449;
        }
      }
    }
  }

  .submit {
    width: 100%;
    position: fixed;
    background: #fff;
    bottom: 60px;
    left: 0;
    z-index: 2222;
    display: flex;
    justify-content: space-around;
  }
}

/deep/ .van-popup--right {
  top: 59.5%;
  transform: translate3d(0, -53%, 0);
}
/deep/ .van-button--warning,
.van-button--default {
  width: 152px;
  border-radius: 25px;
}
</style>
