<script lang="ts">
import YiLong from '@/assets/mythical-creatures/yi-long.png'
import ZhuLong from '@/assets/mythical-creatures/zhu-long.png'

export default {
  data() {
    return {
      YiLong,
      ZhuLong,
    }
  },
}
</script>

<template>
  <div class="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg">
    <!-- Yi Long -->
    <div class="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg">
      <img
        :src="YiLong"
        alt="Yi Long"
        class="w-64 h-64 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
      />
      <p class="text-gray-700 max-w-xl mt-6 leading-relaxed text-lg text-justify">
        Yi Long is a legendary dragon from Chinese mythology, known for its majestic appearance and
        divine powers. Unlike Western dragons, Yi Long is seen as a benevolent creature, symbolizing
        wisdom, strength, and good fortune. It is often depicted with a serpentine body, antlers,
        and the ability to control weather and water. In Chinese culture, Yi Long is considered one
        of the most revered mythical beings, representing imperial power and celestial connection.
      </p>
    </div>

    <!-- Zhu Long -->
    <div class="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg">
      <img
        :src="ZhuLong"
        alt="Zhu Long"
        class="w-64 h-64 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
      />
      <p class="text-gray-700 max-w-xl mt-6 leading-relaxed text-lg text-justify">
        Zhu Long, also known as the Torch Dragon, is a fascinating creature from Chinese mythology.
        This celestial dragon is said to be responsible for the cycle of day and night, carrying the
        sun in its mouth. According to legend, when Zhu Long opens its eyes, it brings daylight to
        the world, and when it closes them, darkness falls. The dragon is often depicted with
        brilliant red scales that glow like flames, reflecting its role as a bringer of light and
        warmth to the world.
      </p>
    </div>
  </div>
</template>
