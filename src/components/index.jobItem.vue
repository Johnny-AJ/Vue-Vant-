<template>
  <div class="jobItems">
    <h3>{{itemObj.title}}</h3>
    <p>{{itemObj.h2_text}}</p>
    <ul class="aread">
      <li v-for="(n ,inx) in itemObj.area" :key="inx">{{n}}</li>
    </ul>
    <label class="hr_text">{{itemObj.hr.hr_text}}</label>
    <span>{{itemObj.salary}}</span>
  </div>
</template>

<script>
export default {
  name: "index_jobItem",
  props: ["itemObj"],
  data() {
    return {
      msg: "具体岗位职位"
    };
  }
};
</script>

<style scope>
.jobItems {
  padding: 0.7rem;
  border: 0.1rem solid #eaeaea;
  position: relative;
}
.jobItems h3 {
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 0.1rem 0.2rem;
}
.jobItems p {
  font-size: 15px;
  color: #666;
  margin: 0 0 0.1rem 0.2rem;
}
.aread {
  font-size: 15px;
  display: flex;
  margin: 0 0 0.1rem 0.2rem;
}
.jobItems label {
  font-size: 17px;
  color: #666;
  margin: 0 0 0.1rem 0.2rem;
}
.jobItems span {
  font-size: 25px;
  color: #14c1bb;
  position: absolute;
  top: 15px;
  right: 15px;
}
</style>