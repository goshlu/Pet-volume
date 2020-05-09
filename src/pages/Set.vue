<template>
  <div class="main">
    <header>
      <Theader title="设置">
        <span class="header_back" slot="left" @click="$router.back()">
          <img src="../assets/imgs/icon_back@2x.png" width="8.5" height="13.5" alt/>
        </span>
      </Theader>
    </header>
    <section>
      <div class="logo">
        <img src="../assets/imgs/touxiang.png" width="94.5" height="99.5" alt/>
        <span class="title">拜加宠</span>
      </div>
      <div class="from">
        <ul class="setting-list">
          <router-link tag="li" class="setting-item" to="/ModifyName">
            <span class="setting-msg">昵称</span>
            <span class="setting-icon">拜加宠 <van-icon name="arrow" /></span>
          </router-link>
          <router-link tag="li" class="setting-item" to="/ChangePhone">
            <span class="setting-msg">绑定手机</span>
            <span class="setting-icon">13111858206 <van-icon name="arrow"/></span>
          </router-link>
          <router-link tag="li" class="setting-item" to="/ModifyPwd">
            <span class="setting-msg">修改密码</span>
            <span class="setting-icon">修改 <van-icon name="arrow" /></span>
          </router-link>
        </ul>
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
      .from{
        /*padding: 20px 20px 0 20px;*/
        margin: 25px 15px;
        background-color: #fff;
        border-radius: 8px;
        .setting-list {
          .setting-item {
            padding: 38/2px 0 20px 28/2px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            /*padding-bottom: 20px;*/
            .icon {
              color: #949497;
              opacity: 0.5;
              font-size: 25/2px;
            }
            .setting-msg {
              color: #3a3a3a;
              font-size: 25/2px;
            }
            .setting-icon{
              font-size: 25/2px;
              opacity: 0.7;
            }
          }
        }
      }
    }
  }
</style>
