<template>
  <div id="game" class="content-start bg-green-500">
    <div
      id="upper"
      class="w-full flex flex-wrap h-full py-3 px-3 flex-row justify-between"
    >
      <div id="stock" class="h-44 w-32">
        <cards-container :pile="true" :cards="this.stock" />
      </div>
      <div id="foundations" class="h-44 w-3/5 flex justify-between">
        <cards-container :cards="this.foundations.spades" />
        <cards-container :cards="this.foundations.diamonds" />
        <cards-container :cards="this.foundations.hearts" />
        <cards-container :cards="this.foundations.clubs" />
      </div>
    </div>
    <div
      id="lower"
      class="w-full flex justify-between p-3 border-t border-gray-200"
    >
      <cards-container :cards="this.tableau.firstPile" />
      <cards-container :cards="this.tableau.secondPile" />
      <cards-container :cards="this.tableau.thirdPile" />
      <cards-container :cards="this.tableau.forthPile" />
      <cards-container :cards="this.tableau.fifthPile" />
      <cards-container :cards="this.tableau.sixthPile" />
      <cards-container :cards="this.tableau.seventhPile" />
    </div>
  </div>
</template>

<script>
import CardsContainer from '@/components/CardsContainer'
export default {
  components: { CardsContainer },
  data() {
    return {
      foundations: {
        hearts: [],
        clubs: [],
        diamonds: [],
        spades: [],
      },
      tableau: {
        firstPile: [],
        secondPile: [],
        thirdPile: [],
        forthPile: [],
        fifthPile: [],
        sixthPile: [],
        seventhPile: [],
      },

      stock: [],
    }
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
          down: true,
        })
      })
    })
    cards = this._.shuffle(cards)
    this.$store.dispatch('setCards', cards)

    this.tableau.firstPile = this.turnLastCardUp(_.slice(cards, 0, 1))
    this.tableau.secondPile = this.turnLastCardUp(_.slice(cards, 1, 3))
    this.tableau.thirdPile = this.turnLastCardUp(_.slice(cards, 3, 6))
    this.tableau.forthPile = this.turnLastCardUp(_.slice(cards, 6, 10))
    this.tableau.fifthPile = this.turnLastCardUp(_.slice(cards, 10, 15))
    this.tableau.sixthPile = this.turnLastCardUp(_.slice(cards, 15, 21))
    this.tableau.seventhPile = this.turnLastCardUp(_.slice(cards, 21, 28))
    this.stock = this.turnAllCardsDown(_.slice(cards, 28, 52))
  },
  methods: {
    turnLastCardUp(pile) {
      return pile.map((el, idx) => {
        if (idx == pile.length - 1) {
          el.down = false
        }
        return el
      })
    },
    turnAllCardsDown(pile) {
      return pile.map((el, idx) => {
        el.down = true
        return el
      })
    },
  },
}
</script>

<style lang="scss">
#lower {
  height: calc(100vh - 14.5rem);
}
</style>