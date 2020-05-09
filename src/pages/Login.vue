<template>
  <div class="main">
    <header>
      <Theader title="登录">
        <span class="header_back" slot="left" @click="$router.back()">
          <img src="../assets/imgs/icon_back@2x.png" alt />
        </span>
      </Theader>
    </header>
    <section>
      <div class="logo">
        <img src="../assets/imgs/wode@2x.png" width="94.5" height="99.5" alt />
        <span class="title">立即登录</span>
      </div>
      <router-view></router-view>
    </section>
  </div>
</template>
<script>
import Theader from "../components/header";
export default {
  name: "Login",
  components: {
    Theader
  },
  data() {
    return {
    };
  },
  methods: {
    // 登录
    login() {
      console.log("登录了");
      if (this.verifyPhone()) {
        this.$toast(this.verifyPhone());
      } else {
        let params = {
          phone: this.phone,
          code: this.verifycode
        };
        // 这里写登录的接口
      }
    },
    // 向后台要验证码方法
    async sendVerifycode() {
      if (this.verifyPhone()) {
        this.$toast(this.verifyPhone());
      } else {
        let res = await api.pp.sms.getVerifyCode(this.phone);
        //用手机号向后台换取验证码，发送成功则开始调用倒计时分方法
        if (res) {
          this.countDown(60);
        }
      }
    },
    // 倒计时方法
    countDown(time) {
      if (time === 0) {
        this.disabledCodeBtn = true;
        this.codeText = "发送验证码";
        return;
      } else {
        this.disabledCodeBtn = false;
        this.codeText = `重新发送${time}`;
        time--;
      }
      setTimeout(() => {
        this.countDown(time);
      }, 1000);
    },
    // 表单校验方法
    verifyPhone() {
      if (!this.phone) {
        return "请输入手机号";
      } else if (this.phone.length !== 11) {
        return "请输入11位手机号";
      } else {
        return false;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.main {
  width: 100%;
  height: 100vh;
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
      img {
        width: 17/2px;
        height: 27/2px;
      }
    }
  }
  section {
    position: relative;
    .logo {
      width: 100%;
      height: 100px;
      margin-top: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      flex-wrap: wrap;
      .title {
        width: 100%;
        text-align: center;
        font-size: 23/2px;
        color: #7e7e7e;
        font-weight: 600;
        margin-top: 38/2px;
      }
    }
  }
}
</style>
