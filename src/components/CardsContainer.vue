<template>
  <div
    class="h-44 cards-container w-32 bg-transparent shadow-lg border border-gray-300 flex rounded-md items-center flex-col"
    :class="{ 'justify-center': this.cards.length == 0 }"
  >
    <i
      class="mdi mdi-circle-outline text-5xl text-gray-200 absolute"
      v-if="this.cards.length == 0"
    ></i>
    <card
      v-for="(card, index) in this.cards"
      :suit="card.suit"
      :rank="card.rank"
      :key="index"
      :index="index"
      :down="card.down"
      :pile="shouldPile"
    />
  </div>
</template>

<script>
import Card from '@/components/Card'
export default {
  props: ['cards', 'pile'],
  components: {
    Card,
  },
  computed: {
    shouldPile() {
      return this.pile !== undefined ? this.pile : false
    },
  },
}
</script>