<template>
  <div
    v-motion="{
      initial: {
        x: 100,
        opacity: 0,
      },
      enter: {
        x: 0,
        opacity: 1,
      },
    }"
    class="fixed right-0 top-0 w-80 h-screen bg-amber-950 z-10 text-[#f0e2ce]"
  >
    <div class="absolute top-[112px] text-3xl left-1 cursor-pointer">
      Kezdőlap
    </div>
    <NuxtLink
      to="csokolade-lithofan"
      class="absolute top-[152px] text-3xl left-1 cursor-pointer"
    >
      Csokoládé litofán
    </NuxtLink>
    <div class="absolute top-[192px] text-3xl left-1 cursor-pointer">
      Galéria
    </div>
  </div>
</template>
