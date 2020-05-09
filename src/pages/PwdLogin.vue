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
          v-model="password"
          center
          clearable
          clickable
          autocomplete
          maxlength="6"
          left-icon="lock"
          :type=" type_eye ? 'password' : 'text'"
          :right-icon=" type_eye ? 'closed-eye' : 'eye-o'"
          placeholder="密码"
          @click-right-icon="changeType"
        ></van-field>
        <div style="margin: 16px;">
          <van-button round block color="#FFCC00" native-type="submit">登录</van-button>
        </div>
      </van-form>
    </div>
    <div class="other">
      <span @click="$router.push('/Login/ForgotPwd')">忘记密码</span> |
      <span @click="$router.push('/Login/SmsLogin')">验证码登录</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "PwdLogin",
  data() {
    return {
      phone: "",
      password: "",
      type_eye: true
    };
  },
  methods: {
    changeType: function() {
      this.type_eye = !this.type_eye; //小眼睛的变化  //跟着小眼睛变化，密码框隐藏，显示文本框 内容就显示了
    },
    login(){}
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
  .other {
    font-size: 29/2px;
    color: #727272;
    float: right;
    margin-right: 30px;
  }
}
</style>