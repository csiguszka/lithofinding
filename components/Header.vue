<script lang="ts" setup>
import { useRoute } from "vue-router";

const route = useRoute();

const getClass = (path: string) => {
  return route.path === path ? "bg-amber-950" : "";
};
</script>

<template>
  <header class="flex justify-between p-5 items-center h-24 sticky">
    <img src="/logo.png" alt="lithofinding logo" class="h-full" />
    <div class="flex gap-16">
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
        to="/torta"
        active-class="text-amber-950"
        class="flex items-center gap-3"
      >
        <div
          :class="[
            'rounded-full w-3 h-3 ring-amber-950 ring-2',
            getClass('/torta'),
          ]"
        />
        <span>Torta</span>
      </NuxtLink>
      <NuxtLink
        to="/egyeb"
        active-class="text-amber-950"
        class="flex items-center gap-3"
      >
        <div
          :class="[
            'rounded-full w-3 h-3 ring-amber-950 ring-2',
            getClass('/egyeb'),
          ]"
        />
        <span>Egyéb</span>
      </NuxtLink>
    </div>
    <div>
      <div class="h-20 w-20 mr-4 rounded-full bg-amber-950"></div>
    </div>
  </header>
</template>
