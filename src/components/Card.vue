<template>
  <div
    class="h-44 z-10 flex w-32 bg-gray-200 border border-gray-700 rounded-lg p-1 select-none"
    ref="card"
  >
    <div class="w-full rounded-md bg-white h-full flex flex-wrap">
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
  </div>
</template>

<script>
export default {
  props: ['suit', 'rank'],
  computed: {
    getSuit() {
      return require(`@/assets/images/${this.suit}.png`)
    },
    isRed() {
      return this.suit == 'hearts' || this.suit == 'diamonds'
    },
  },
  mounted() {
    let card = this.$refs.card
    var initialX = 0,
      initialY = 0,
      afterX = 0,
      afterY = 0
    card.addEventListener('mousedown', function (e) {
      card.classList.add('absolute')
      initialX = e.clientX
      initialY = e.clientY
      document.onmousemove = function (e) {
        afterX = initialX - e.clientX
        afterY = initialY - e.clientY
        initialX = e.clientX
        initialY = e.clientY
        card.style.top = card.offsetTop - afterY + 'px'
        card.style.left = card.offsetLeft - afterX + 'px'
      }
      document.onmouseup = function (e) {
        console.log(e)
        card.classList.remove('absolute')
        document.onmousemove = null
        document.onmouseup = null
        card.style.top = '0px'
        card.style.left = '0px'
        e.qweqw = 'q'
      }
    })
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