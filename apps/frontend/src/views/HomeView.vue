<template>
  <main class="flex flex-col justify-start items-center gap-8 h-screen mt-10 px-4">
    <h1
      class="text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent h-[3rem]"
    >
      TMovies
    </h1>
    <h2
      class="text-2xl font-semibold text-center bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent h-fit"
    >
      Your Ultimate Streaming Destination
    </h2>
    <div
      class="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300"
    >
      <p class="text-gray-700 text-xl leading-relaxed text-center">
        Welcome to TMovies, where entertainment meets convenience. Stream your favorite:
      </p>
      <ul class="mt-6 space-y-3 text-center">
        <li class="text-red-600">🎬 Latest Blockbusters</li>
        <li class="text-blue-600">📺 Popular TV Shows</li>
        <li class="text-purple-600">🌟 Exclusive Originals</li>
        <li class="text-green-600">🎭 Award-Winning Documentaries</li>
      </ul>
      <p class="mt-6 text-gray-700 text-center text-lg">
        Start your cinematic journey today with our vast collection of movies and shows! 🍿
      </p>
      <div class="mt-8 flex justify-center gap-4">
        <button
          class="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
        >
          Start Watching
        </button>
        <button
          class="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
        >
          Browse Catalog
        </button>
      </div>
    </div>
  </main>
</template>
