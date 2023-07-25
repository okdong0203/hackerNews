import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'ListItem',
    component: () => import('@/views/ListItemView.vue'),
  },
  {
    path: '/users',
    name: 'userInfoView',
    component: () => import('@/views/UserInfoView.vue'),
    props: route => ({ data: route.params.data }),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
