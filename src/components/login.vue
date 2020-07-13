<template>
  <div class="body_sty">
    <van-swipe class="my-swipe" :autoplay="1500" :show-indicators="false">
      <van-swipe-item class="log_img1"></van-swipe-item>
      <van-swipe-item class="log_img2"></van-swipe-item>
      <van-swipe-item class="log_img3"></van-swipe-item>
    </van-swipe>
    <van-button type="info" class="log_btn1" to="/index_people">我要招人</van-button>
    <van-button type="info" class="log_btn2" to="/index_jobList">我要应聘</van-button>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// .sty_1 {
//   font-style: 0.4rem;
// }
.body_sty {
  height: 100%;
  position: relative;
}
.van-swipe-item {
  // width: 100%;
  height: 140px;
}
.my-swipe {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.log_img1 {
  width: 100%;
  height: 100%;
  background-image: url("../assets/img/军团.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 0;
}
.log_img2 {
  width: 100%;
  height: 100%;
  background-image: url("../assets/img/军团2.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 0;
}
.log_img3 {
  width: 100%;
  height: 100%;
  background-image: url("../assets/img/军团3.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 0;
}
.log_btn1 {
  position: absolute;
  bottom: 5rem;
  left: 3rem;
  z-index: 5;
}
.log_btn2 {
  position: absolute;
  bottom: 5rem;
  left: 13rem;
  z-index: 5;
}
</style>
