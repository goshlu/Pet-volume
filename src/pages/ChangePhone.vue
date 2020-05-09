<template>
  <div class="main">
    <header>
      <Theader title="设置">
        <span class="header_back" slot="left" @click="$router.back()">
          <img src="../assets/imgs/icon_back@2x.png" alt/>
        </span>
      </Theader>
    </header>
    <section>
      <div class="from">
        <van-form @submit="onSubmit">
          <van-field
            v-model="newPhone"
            name="昵称"
            placeholder="输入新手机号"
            :rules="[{ required: true, message: '输入新昵称' }]"
          />
          <van-field
            v-model="sms"
            center
            clearable
            clickable
            maxlength="4"
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
            <van-button round block color="#ffa449" native-type="submit">
              确认修改
            </van-button>
          </div>
        </van-form>
      </div>
    </section>
  </div>
</template>

<script>
  import Theader from '../components/header'

  export default {
    name: "Set",
    components: {
      Theader
    },
    data(){
      return{
        newPhone:"",
        sms:"",
        codeText:'获取验证码',
        disabledCodeBtn:true,

      }
    },
    methods:{
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
      onSubmit(){

      }
    }
  }
</script>

<style scoped lang="less">
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
    }
  }
</style>
