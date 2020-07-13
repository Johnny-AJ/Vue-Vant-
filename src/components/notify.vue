<template>
  <div class="notify">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: "notifyFnBtn",
  data() {
    return {
      msg: "已更新"
    };
  }
};
</script>

<style scope>
.notify {
  width: 100%;
  height: 50px;
  background-color: #14c1bb;
  text-align: center;
  font-size: 10px;
  position: absolute;
  top: 50px;
  z-index: 10;

  animation: notify_show 0.5s;
  animation-delay: .5s;
  animation-fill-mode: forwards;
}

@keyframes notify_show {
  from {
    height: 5rem;
  }
  to {
    height: 0;
  }
}
</style>