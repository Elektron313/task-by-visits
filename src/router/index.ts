import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Auth from '@/pages/Auth.vue';
import Analytics from '@/pages/Analytics.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/auth',
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
  },
  {
    path: '/analytics',
    name: 'Analytics',
    component: Analytics,
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'Auth' && !localStorage.getItem('leadhit-site-id')) next({ name: 'Auth' });
  else next();
});

export default router;
