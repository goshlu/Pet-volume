<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="less">
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
  z-index: -2;
  /*background-color: #efeff4;*/
  background: #fafafa;
  -webkit-overflow-scrolling: touch;
}
</style>
