<template>
  <div>
    <van-sticky>
      <van-nav-bar class="bar_sty" left-text="Vue+Vant联名">
        <van-icon name="plus" slot="right" />
        <van-icon name="search" slot="right" />
      </van-nav-bar>

      <div class="title_meun">
        <van-button size="mini" @click="notifyFnBtn">推荐</van-button>
        <van-button size="mini" @click="notifyFnBtn">附近</van-button>
        <van-button size="mini" @click="notifyFnBtn">最新</van-button>
      </div>
    </van-sticky>

    <div>
      <job_Item v-for="(n ,inx) in jobData" :key="inx" :itemObj="n" />
    </div>

    <notify v-show="notifyShow" />

    <footer_bar />
  </div>
</template>

<script>
import job_Item from "./index.jobItem";
import footer_bar from "./footer_bar";
import notify from "./notify";

export default {
  name: "index_jobList",
  components: {
    job_Item,
    footer_bar,
    notify
  },
  data() {
    return {
      msg: "职位列表",
      jobData: [
        {
          title: "web前端",
          h2_text: "什么样 为融资",
          area: ["沈阳 和平区", "经验不限", "本科"],
          hr: {
            img_avatar: "",
            hr_text: "海峰-招聘者"
          },
          salary: "7-8k"
        },
        {
          title: "web前端",
          h2_text: "什么样 为融资",
          area: ["沈阳 和平区", "1-3年", "本科"],
          hr: {
            img_avatar: "",
            hr_text: "海峰-招聘者"
          },
          salary: "6-8k"
        },
        {
          title: "web前端",
          h2_text: "什么样 为融资",
          area: ["沈阳 和平区", "3-5年", "大专"],
          hr: {
            img_avatar: "",
            hr_text: "海峰-招聘者"
          },
          salary: "4-7k"
        },
        {
          title: "web前端",
          h2_text: "什么样 为融资",
          area: ["沈阳 和平区", "5-7", "大专"],
          hr: {
            img_avatar: "",
            hr_text: "海峰-招聘者"
          },
          salary: "9-10k"
        },
        {
          title: "web前端",
          h2_text: "什么样 为融资",
          area: ["沈阳 和平区", "4-5", "本科"],
          hr: {
            img_avatar: "",
            hr_text: "海峰-招聘者"
          },
          salary: "14-22k"
        },
        {
          title: "web前端",
          h2_text: "什么样 为融资",
          area: ["沈阳 和平区", "4-5", "本科"],
          hr: {
            img_avatar: "",
            hr_text: "海峰-招聘者"
          },
          salary: "25-30k"
        }
      ],
      notifyShow: false
    };
  },
  methods: {
    notifyFnBtn() {
      this.notifyShow = true;
      let _notify = document.querySelector(".notify");
      _notify.addEventListener("webkitAnimationEnd", () => {
        this.notifyShow = false;
      });
    }
  }
};
</script>

<style scope>
.bar_sty {
  background-color: #14c1bb;
}
.van-nav-bar__text {
  color: #fff;
  font-size: 1.2rem;
}
.van-icon {
  color: #fff;
  margin-left: 1rem;
}
.title_meun {
  background-color: #fff;
  margin-bottom: 10px;
}
.van-button {
  margin-right: 10px;
  margin-top: 10px;
  margin-left: 10px;
}
</style>