<script setup lang="ts">
const menuStore = useMenuStore();
const handleOnClick = () => {
  menuStore.close();
  console.log(menuStore.open);
};
</script>

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
    class="fixed right-0 top-0 w-full sm:w-80 h-screen bg-amber-950 z-10 text-[#f0e2ce]"
  >
    <div @click="handleOnClick">
      <NuxtLink
        to="/"
        class="absolute top-[112px] text-3xl left-1 cursor-pointer"
      >
        Kezdőlap
      </NuxtLink>
    </div>
    <div @click="handleOnClick">
      <NuxtLink
        to="/csokolade-lithofan"
        class="absolute top-[152px] text-3xl left-1 cursor-pointer"
      >
        Csokoládé litofán
      </NuxtLink>
    </div>
    <div @click="handleOnClick">
      <NuxtLink
        to="/kapcsolat"
        class="absolute top-[192px] text-3xl left-1 cursor-pointer"
      >
        Kapcsolat
      </NuxtLink>
    </div>
  </div>
</template>
