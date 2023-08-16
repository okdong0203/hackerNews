import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';

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
      path: '/jobs',
      name: 'JobsView',
      component: () => import('@/views/JobsView.vue'),
    },
    {
      path: '/item/:id',
      name: 'CommentList',
      component: () => import('@/views/CommentList.vue'),
    },
  ],
});
router.beforeEach((to, from, next) => {
  store.commit('startSpinner');
  setTimeout(() => {
    next();
  }, 1);
});

router.afterEach((to, from) => {
  store.commit('endSpinner');
});

export default router;
