<template>
  <div id="game" class="content-start bg-green-500">
    <div
      id="upper"
      class="w-full flex flex-wrap h-full py-3 px-3 flex-row justify-between"
    >
      <div id="stock" class="h-44 w-32">
        <cards-container><card rank="A" suit="hearts" /></cards-container>
      </div>
      <div id="foundations" class="h-44 w-3/5 flex justify-between">
        <cards-container><card rank="A" suit="hearts" /></cards-container>
        <cards-container><card rank="A" suit="clubs" /></cards-container>
        <cards-container><card rank="A" suit="diamonds" /></cards-container>
        <cards-container><card rank="A" suit="spades" /></cards-container>
      </div>
    </div>
    <div
      id="lower"
      class="w-full flex justify-between p-3 border-t border-gray-200"
    >
      <cards-container></cards-container>
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
}
</script>

<style lang="scss">
#lower {
  height: calc(100vh - 14.5rem);
}
</style>