import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Navigation Guards
router.beforeEach((to, from, next) => {
  // Update document title
  document.title = `${to.meta.title} | TMovies`

  // Check for protected routes
  if (to.meta.requiresAuth) {
    // Add your authentication logic here
    const isAuthenticated = false // Replace with your auth check
    if (!isAuthenticated) {
      next({ name: 'home' })
      return
    }
  }

  next()
})

export default router
