<template>
  <div
    class="h-44 w-32 bg-transparent shadow-lg border border-gray-200 flex justify-center items-center rounded-md relative"
  >
    <i class="mdi mdi-circle-outline text-5xl text-gray-200 absolute"></i>
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted(){
    this.$el.addEventListener("mouseup", function(e){
      console.log(e)
    })
  }
}
</script>