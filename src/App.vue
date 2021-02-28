<template>
  <div class="min-h-screen relative">
    <transition name="fade">
      <router-view class="min-h-screen flex flex-wrap" />
    </transition>
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>