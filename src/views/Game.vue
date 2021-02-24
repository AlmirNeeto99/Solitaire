<template>
  <div id="game" class="content-start bg-green-500">
    <div
      id="upper"
      class="w-full flex flex-wrap h-full py-3 px-3 flex-row justify-between"
    >
      <div id="stock" class="h-44 w-32">
        <cards-container></cards-container>
      </div>
      <div id="foundations" class="h-44 w-3/5 flex justify-between">
        <cards-container></cards-container>
        <cards-container></cards-container>
        <cards-container></cards-container>
        <cards-container></cards-container>
      </div>
    </div>
    <div
      id="lower"
      class="w-full flex justify-between p-3 border-t border-gray-200"
    >
      <cards-container>
        <card
          v-for="(card, index) in cards"
          :suit="card.suit"
          :rank="card.rank"
          :key="index"
          :index="index"
        />
      </cards-container>
      <cards-container></cards-container>
      <cards-container></cards-container>
      <cards-container></cards-container>
      <cards-container></cards-container>
      <cards-container></cards-container>
      <cards-container></cards-container>
    </div>
  </div>
</template>

<script>
import CardsContainer from '@/components/CardsContainer'
import Card from '@/components/Card'
export default {
  components: { CardsContainer, Card },
  computed: {
    cards() {
      return this.$store.state.cards
    },
  },
  created() {
    const suits = ['diamonds', 'hearts', 'spades', 'clubs']
    const ranks = [
      'A',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'J',
      'Q',
      'K',
    ]
    let cards = []
    suits.forEach((suit) => {
      ranks.forEach((rank) => {
        cards.push({
          rank: rank,
          suit: suit,
        })
      })
    })
    cards = this._.shuffle(cards)
    this.$store.dispatch('setCards', cards)
  },
}
</script>

<style lang="scss">
#lower {
  height: calc(100vh - 14.5rem);
}
</style>