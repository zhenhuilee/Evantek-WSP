import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },

  {
    path: '/wsp',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/WSPPage.vue') }],
  },

  {
    path: '/enquiry',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/EnquiryPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
