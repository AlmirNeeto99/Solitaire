<template>
  <div class="w-full justify-center items-center">
    <div
      class="h-44 flex w-32 bg-transparent border border-gray-700 rounded-lg p-1"
    >
      <div class="w-full rounded-md bg-red-500 h-full flex flex-wrap">
        <div class="upper w-full self-start flex p-1">
          <div class="w-1/2 text-left">
            <div class="number left">9</div>
            <div>
              <img
                src="@/assets/images/clubs.png"
                class="inline-block"
                width="16"
                alt="Clubs"
              />
            </div>
          </div>
          <div class="w-1/2 text-right">
            <div class="number right">9</div>
            <img
              src="@/assets/images/clubs.png"
              class="inline-block"
              width="16"
              alt="Clubs"
            />
          </div>
        </div>
        <div class="center w-full self-center text-center">9</div>
        <div class="lower w-full self-end flex p-1">
          <div class="w-1/2 text-left">
            <div class="number left">9</div>
            <img
              src="@/assets/images/clubs.png"
              class="inline-block"
              width="16"
              alt="Clubs"
            />
          </div>
          <div class="w-1/2 text-right">
            <div class="number right">9</div>
            <img
              src="@/assets/images/clubs.png"
              class="inline-block"
              width="16"
              alt="Clubs"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.number {
  &.right {
    margin-right: 3px;
  }
  &.left {
    margin-left: 3px;
  }
}
</style>