<template>
  <div class="main">
    <div class="from">
      <van-form @submit="submit">
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
          autocomplete 
          maxlength="4"
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
        <van-field
          v-model="password"
          center
          clearable
          clickable
          autocomplete 
          maxlength="4"
          left-icon="lock"
          :type=" type_eye ? 'password' : 'text'"
          :right-icon=" type_eye ? 'closed-eye' : 'eye-o'"
          placeholder="密码"
          @click-right-icon="changeType"
        ></van-field>
        <div style="margin: 16px;">
          <van-button round block color="#FFCC00" native-type="submit">提交</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "ForgotPwd",
  data() {
    return {
      phone: "",
      sms: "",
      password: "",
      disabledCodeBtn: true,
      codeText: "发送验证码",
      type_eye: true
    };
  },
  methods: {
    //提交修改密码
    submit() {},
    changeType: function() {
      this.type_eye = !this.type_eye; //小眼睛的变化  //跟着小眼睛变化，密码框隐藏，显示文本框 内容就显示了
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
<style lang="less">
.main {
  width: 100%;
  height: 100vh;
  .from {
    width: 710/2px;
    margin: auto;
    margin-top: 50px;
  }
}
</style>