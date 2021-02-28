<template>
  <div
    class="h-44 z-10 flex w-32 bg-gray-100 border border-gray-700 rounded-lg p-1 select-none" :class="{'absolute': pile}"
    ref="card"
    :style="calculateMargin"
  >
    <div
      v-if="!this.down"
      class="w-full rounded-md bg-white h-full flex flex-wrap"
    >
      <div class="upper w-full self-start flex p-1">
        <div class="w-1/2 text-left">
          <div :class="{ 'text-red-500': isRed }" class="number left">
            {{ rank }}
          </div>
          <div>
            <img :src="getSuit" class="inline-block" width="16" :alt="suit" />
          </div>
        </div>
        <div class="w-1/2 text-right">
          <div :class="{ 'text-red-500': isRed }" class="number right">
            {{ rank }}
          </div>
          <img :src="getSuit" class="inline-block" width="16" :alt="suit" />
        </div>
      </div>
      <div
        :class="{ 'text-red-500': isRed }"
        class="center w-full self-center text-center"
      >
        {{ rank }}
      </div>
      <div class="lower w-full self-end flex p-1">
        <div class="w-1/2 text-left">
          <div :class="{ 'text-red-500': isRed }" class="number left">
            {{ rank }}
          </div>
          <img :src="getSuit" class="inline-block" width="16" :alt="suit" />
        </div>
        <div class="w-1/2 text-right">
          <div :class="{ 'text-red-500': isRed }" class="number right">
            {{ rank }}
          </div>
          <img :src="getSuit" class="inline-block" width="16" :alt="suit" />
        </div>
      </div>
    </div>
    <div v-else class="bg-red-500 w-full h-full rounded-lg"></div>
  </div>
</template>

<script>
export default {
  props: ['suit', 'rank', 'index', 'down', 'pile'],
  computed: {
    getSuit() {
      return require(`@/assets/images/${this.suit}.png`)
    },
    isRed() {
      return this.suit == 'hearts' || this.suit == 'diamonds'
    },
    calculateMargin() {
      return this.index != 0 && !this.pile ? 'margin-top: -145px' : ''
    },
  },
}
</script>

<style lang="scss">
.number {
  &.right {
    margin-right: 3px;
  }
  &.left {
    margin-left: 3px;
  }
}
</style>