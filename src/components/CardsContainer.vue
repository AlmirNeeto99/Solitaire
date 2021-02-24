<template>
  <div
    class="h-44 cards-container w-32 bg-transparent shadow-lg border border-gray-300 flex rounded-md relative items-center flex-col"
    :class="{ 'justify-center': !this.$slots.default }"
  >
    <i
      class="mdi mdi-circle-outline text-5xl text-gray-200 absolute"
      v-if="!this.$slots.default"
    ></i>
    <slot></slot>
  </div>
</template>