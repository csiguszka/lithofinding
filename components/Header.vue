<script lang="ts" setup>
import { useRoute } from "vue-router";

const route = useRoute();

const getClass = (path: string) => {
  return route.path === path ? "bg-amber-950" : "";
};
</script>

<template>
  <header class="flex md:flex-row justify-between p-5 items-center h-24 sticky">
    <img src="/logo.png" alt="lithofinding logo" class="h-full" />
    <div
      v-if="
        route.path === '/sutemeny' ||
        route.path === '/' ||
        route.path === '/muveszet'
      "
      class="md:flex md:gap-16 fixed md:static left-1/2 -translate-x-1/2 md:translate-0"
    >
      <NuxtLink
        to="sutemeny"
        active-class="text-amber-950"
        class="flex items-center gap-3"
      >
        <div
          :class="[
            'rounded-full w-3 h-3 ring-amber-950 ring-2',
            getClass('/sutemeny'),
          ]"
        />
        <span>Sütemény</span>
      </NuxtLink>
      <NuxtLink
        to="/"
        active-class="text-amber-950"
        class="flex items-center gap-3"
      >
        <div
          :class="['rounded-full w-3 h-3 ring-amber-950 ring-2', getClass('/')]"
        />
        <span>Torta</span>
      </NuxtLink>
      <NuxtLink
        to="/muveszet"
        active-class="text-amber-950"
        class="flex items-center gap-3"
      >
        <div
          :class="[
            'rounded-full w-3 h-3 ring-amber-950 ring-2',
            getClass('/muveszet'),
          ]"
        />
        <span>Művészet</span>
      </NuxtLink>
    </div>
    <div>
      <MenuTrigger />
    </div>
  </header>
</template>
