<script lang="ts" setup>
const menuStore = useMenuStore();
const borderRadius = computed(() =>
  menuStore.open
    ? "20% 80% 20% 80% / 20% 80% 20% 80%"
    : "80% 20% 80% 20% / 80% 20% 80% 20%"
);
const handleOnClick = () => {
  menuStore.change();
  console.log(menuStore.open);
};
</script>

<template>
  <div
    :animate="{
      scale: 2,
      transition: { duration: 2 },
    }"
    class="flex z-50 select-none justify-center items-center sticky h-20 w-20 mr-4 rounded-full cursor-pointer transition-all duration-200 group"
    :class="{
      'bg-[#f0e2ce] text-amber-950': menuStore.open,
      'bg-amber-950 text-[#f0e2ce]': !menuStore.open,
    }"
    :style="`border-radius: ${borderRadius}`"
    @click="handleOnClick"
  >
    <span class="text-xl group-hover:text-2xl duration-400">Menü</span>
  </div>

  <Menu v-if="menuStore.open" />
</template>
