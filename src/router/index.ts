import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: () => {
        document.body.classList.add('start')
      }
    },
    {
      path: '/quiz',
      name: 'quiz',
      // route level code-splitting
      // this generates a separate chunk (Quiz.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/QuizView.vue'),
      beforeEnter: () => {
        document.body.classList.add('start')
      }
    },
    {
      path: '/fantasy-quiz',
      name: 'fantasy-quiz',
      // route level code-splitting
      // this generates a separate chunk (Quiz.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/FantasyQuiz.vue'),
      beforeEnter: () => {
        document.body.classList.remove('start')
      }
    },
    {
      path: '/final-riddle',
      name: 'final-riddle',
      // route level code-splitting
      // this generates a separate chunk (Quiz.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/FinalRiddle.vue'),
      beforeEnter: () => {
        document.body.classList.remove('start')
      }
    }
  ]
})

export default router