<template>
  <div class="header-box">
    <slot name="left"></slot>
    <span class="header_title">
      <span class="header_title_text ellipsis">{{ title }}</span>
    </span>
    <slot name="right"></slot>
  </div>
</template>
<script>
export default {
  name: "Header",
  props: {
    title: String
  },
  data() {
    return {};
  },
  created() {}
};
</script>
<style lang="less" scoped>
.header-box {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 12px 0;
  background: #ffa449;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 333;

  .header-left {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 8px;
    /*border: 1px solid red;*/
    z-index: 100;

    img {
      width: 17/2px;
      height: 27/2px;
    }

    span {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .header_title {
    z-index: 99;
    text-align: center;
    width: 118/2px;
    font-size: 14.5px;
    font-weight: 600;
    color: #fff;
    flex: 1;
  }

  .header-right {
    color: #ec3924;
    font-size: 6.5px;
  }
}
</style>
