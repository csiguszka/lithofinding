<script setup lang="ts">
const menuStore = useMenuStore();
const handleClick = () => {
  menuStore.close();
};
</script>

<template>
  <div class="bg-[#f0e2ce]" @click="handleClick">
    <slot />
  </div>
</template>
