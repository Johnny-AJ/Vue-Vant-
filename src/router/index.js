import Vue from 'vue';
import VueRouter from 'vue-router';
import login from '../components/login.vue';
import index_jobList from '../components/index_jobList.vue';
import index_people from '../components/index_people.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: login,
  },
  {
    path: '/index_jobList',
    name: 'index_jobList',
    component: index_jobList
  },
  {
    path: '/index_people',
    name: 'index_people',
    component: index_people
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
