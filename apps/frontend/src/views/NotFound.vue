<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold mb-4">404</h1>
      <p class="text-xl mb-4">Page not found</p>
      <RouterLink to="/" class="text-blue-500 hover:text-blue-700"> Go back home </RouterLink>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'NotFound',
  components: {
    RouterLink,
  },
}
</script>
