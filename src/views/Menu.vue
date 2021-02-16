<template>
  <div class="bg-red-500 items-center justify-center">
    <div class="flex flex-row flex-wrap">
      <div class="w-full">
        <h3 class="text-6xl text-center text-white mb-8">
          {{ $appName }}
        </h3>
      </div>
      <div class="w-full text-center my-1">
        <button
          class="bg-white transition-all shadow-md hover:bg-gray-300 py-3 px-6 rounded-md"
          @click="this.newGame"
        >
          New Game
        </button>
      </div>
      <div class="w-full text-center my-1">
        <button
          class="transition-all shadow-md py-3 px-6 rounded-md"
          :class="{
            'bg-white hover:bg-gray-300': this.hasSavedGame,
            'bg-gray-400 cursor-default': !this.hasSavedGame,
          }"
          @click="this.loadGame"
        >
          Load Game
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['hasSavedGame']),
  },
  methods: {
    loadGame() {
      if (!this.hasSavedGame) return false
      this.$router.replace({ name: 'Game' })
    },
    newGame() {
      this.$router.replace({ name: 'Game' })
    },
  },
}
</script>

<style scoped>
h3 {
  font-family: 'Luckiest Guy', cursive;
}
</style>