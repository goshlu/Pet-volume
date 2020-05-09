<template>
  <div class="main">
    <div class="from">
      <van-form @submit="login">
        <van-field
          v-model="phone"
          name="手机号"
          autocomplete
          left-icon="manager"
          placeholder="手机号"
          maxlength="11"
          type="number"
          clearable
          clickable
          :rules="[{ required: true, message: '请填写手机号' }]"
        />
        <van-field
          v-model="sms"
          center
          clearable
          clickable
          maxlength="6"
          left-icon="lock"
          placeholder="请输入短信验证码"
        >
          <template #button>
            <van-button
              size="small"
              type="primary"
              :disabled="!disabledCodeBtn"
              @click="sendVerifycode"
            >{{codeText}}</van-button>
          </template>
        </van-field>
        <div style="margin: 16px;">
          <van-button round block color="#FFCC00" native-type="submit">登录</van-button>
        </div>
      </van-form>
    </div>
    <div class="other" @click="$router.push('/Login/PwdLogin')">密码登录</div>
  </div>
</template>
<script>
export default {
  name: "smsLogin",
  data() {
    return {
      phone: "",
      sms: "",
      codeText: "发送验证码",
      disabledCodeBtn: true
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
  .from {
    width: 710/2px;
    margin: auto;
    margin-top: 50px;
  }
  .other {
    font-size: 29/2px;
    color: #727272;
    float: right;
    margin-right: 30px;
  }
}
</style>