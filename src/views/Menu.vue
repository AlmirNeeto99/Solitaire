<template>
  <div class="bg-red-500 items-center justify-center">
    <div class="flex flex-row flex-wrap">
      <div class="w-full">
        <h3 class="text-6xl text-center text-white mb-12">
          {{ $appName }}
        </h3>
      </div>
      <div class="w-full text-center my-3">
        <router-link
          class="hover:bg-white bg-transparent border-white border transition-all py-2 px-6 rounded-md"
          :to="{ name: 'Game' }"
        >
          New Game
        </router-link>
      </div>
      <div class="w-full text-center my-3">
        <router-link
          class="hover:bg-white bg-transparent border-white border transition-all py-2 px-6 rounded-md"
          :to="{ name: 'Game' }"
        >
          Load Game
        </router-link>
      </div>
    </div>
  </div>
</template>