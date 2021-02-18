<template>
  <div class="min-h-screen">
    <router-view class="min-h-screen flex flex-wrap" />
  </div>
</template>

<style>
@import url('assets/tailwind.css');
html {
  @apply h-full;
}
body {
  @apply min-h-screen;
}
</style>

<style lang="scss">
$mdi-font-path: '~@mdi/font/fonts';
@import '~@mdi/font/scss/materialdesignicons';
</style>