<template>
  <div id="game" class="content-start bg-green-500">
    <div
      id="upper"
      class="w-full flex flex-wrap h-full px-3 flex-row justify-between"
    >
      <div id="stock" class="h-52 w-32"></div>
      <div id="foundations" class="h-52 w-3/5 flex justify-between">
        <div class="h-52 w-32"></div>
        <div class="h-52 w-32"></div>
        <div class="h-52 w-32"></div>
        <div class="h-52 w-32"></div>
      </div>
    </div>
    <div id="lower" class="w-full flex justify-between p-3">
      <div class="h-52 w-32"></div>
      <div class="h-52 w-32"></div>
      <div class="h-52 w-32"></div>
      <div class="h-52 w-32"></div>
      <div class="h-52 w-32"></div>
      <div class="h-52 w-32"></div>
      <div class="h-52 w-32"></div>
    </div>
  </div>
</template>

<style lang="scss">
#lower {
  height: calc(100vh - 13rem);
}
</style>