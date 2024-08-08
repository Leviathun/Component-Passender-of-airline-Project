import { createRouter, createWebHistory } from 'vue-router'
import ListView from '@/views/ListView.vue'
import AboutView from '@/views/AboutView.vue'

import DetailAirlineView from '@/views/event/DetailAirlineView.vue'
import DetailPassView from '@/views/event/DetailPassView.vue'
import LayoutView from '@/views/event/LayoutView.vue'

import PageNotFoundView from '@/views/PageNotFound.vue'
import ResourceNotFound from '@/views/ResourceNotFound.vue'
import nProgress from 'nprogress'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list-view',
      component: ListView,
      props: (route) => ({ 
        page: parseInt(route.query.page?.toString() || '1'),
        pageSize: parseInt(route.query.pageSize?.toString() || '100')
      })
    },
    {
      path: '/event/:id',
      name: 'event-layout-view',
      component: LayoutView,
      props: true,
      children: [
        {
          path: '',
          name: 'event-detail-view',
          component: DetailPassView,
          props: true
        },
        {
          path: 'airline',
          name: 'event-airline-view',
          component: DetailAirlineView,
          props: true
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/404/:resource',
      name: '404-resource-view',
      component: ResourceNotFound,
      props: true
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: PageNotFoundView 
    },
  ]
})
router.beforeEach (() => {
  nProgress.start()
})
  
router.afterEach ( () => {
  nProgress.done()
})

export default router
