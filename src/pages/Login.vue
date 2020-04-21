<template>
  <div></div>
  <!--   <div class="head">
    <div class="title">
      <h3>用户登录</h3>
    </div>
    <div class="from">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>
    </div>
  </div>-->
</template>
<script>
import Vue from "vue";
import { Form, Field, Button } from "vant";

Vue.use(Form)
  .use(Field)
  .use(Button);
export default {
  data() {
    return {
      username: "",
      password: "",
      value: "" //搜索关键字
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    }
    /*     handelUserLogin(){
      this.$http.post('/').then(res=>{
        if(res.data.code === 0){  
          localStorage.setItem('token',res.data.content)
          this.$router.push('/index')
        }else this.$toast({
          mask:false,
          duration:1000,
          message:res.data.msg
        })
      })
    } */
  }
};
</script>
<style lang="less" scoped>
/* .head {
  width: 375px;
  height: 100%;
  .title {
    width: 30%;
    margin: 20px auto;
  }
  .from {
    width: 100%;
    margin: 10px auto;
  }
} */
</style>