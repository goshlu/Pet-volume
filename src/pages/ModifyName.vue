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
            v-model="oldPwd"
            name="昵称"
            placeholder="输入新昵称"
            :rules="[{ required: true, message: '输入新昵称' }]"
          />
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
        oldPwd:"",
        newPwd:""
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
