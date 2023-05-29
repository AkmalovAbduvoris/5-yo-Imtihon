import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      children: [
        {
          path: '/',
          component: () => import('../components/Main/shopComponen.vue'),
        },
        {
          path: '/best',
          component: () => import('../components/Main/Best/BestComp.vue'),
        },
      ]
    },
    {
      path: '/about/:id',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('../views/AddView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/UserView.vue'),
      children: [
        {
          path: '/user',
          component: () => import('../components/User/Statistics/StatisticsComp.vue'),
        },
        {
          path: '/messages',
          component: () => import('../components/User/MessagesComp.vue'),
        },
        {
          path: '/payments',
          component: () => import('../components/User/PaymentsComp.vue'),
        },
        {
          path: '/settings',
          component: () => import('../components/User/SettingsComp.vue'),
        },
        {
          path: '/my',
          component: () => import('../components/User/MyComp.vue'),
        },
      ]
    }
  ]
})

export default router
