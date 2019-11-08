import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main/Main.vue'
import Smzdm from '@/views/Smzdm/Smzdm.vue'
import Treesays from '@/views/Treesays/Treesays.vue'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      meta: {
        isPublic: true
      },
      redirect: '/home',
      children: [{
        path: '/home',
        name: 'Treesays',
        component: Treesays,
        meta: {
          isPublic: true
        }
      },
      {
        path: '/Smzdm',
        name: 'Smzdm',
        component: Smzdm,
        meta: {
          isPublic: true
        }
      }
      ]
    },

  ]
})
export default router
