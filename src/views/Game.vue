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
export default {
  components: { CardsContainer },
}
</script>

<style lang="scss">
#lower {
  height: calc(100vh - 14.5rem);
}
</style>