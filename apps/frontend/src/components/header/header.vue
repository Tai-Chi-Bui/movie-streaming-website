<template>
  <header
    class="flex justify-between items-center h-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 shadow-lg"
  >
    <nav class="flex items-center gap-6">
      <RouterLink
        v-for="route in navigationRoutes"
        :key="route.path"
        :to="route.path"
        class="flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-200 hover:bg-gray-700 hover:text-blue-300"
      >
        <component v-if="route.icon" :is="route.icon" class="h-5 w-5" />
        <span v-if="route.name" class="font-medium">{{ route.name }}</span>
      </RouterLink>
    </nav>
  </header>
</template>

<script lang="ts">
import { HomeIcon } from '@heroicons/vue/24/solid'

export default {
  data() {
    return {
      navigationRoutes: [
        {
          path: '/',
          icon: HomeIcon,
          name: '',
        },
      ],
    }
  },
}
</script>
