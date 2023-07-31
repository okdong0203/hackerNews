import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      path: '/news',
      name: 'ListItem',
      component: () => import('@/views/ListItemView.vue'),
    },
    {
      path: '/users/:id',
      name: 'UserInfoView',
      component: () => import('@/views/UserInfoView.vue'),
    },
    {
      path: '/ask',
      name: 'AskView',
      component: () => import('@/views/AskView.vue'),
    },
    {
      path: '/jbos',
      name: 'JobsView',
      component: () => import('@/views/JobsView.vue'),
    },
  ],
});

export default router;
