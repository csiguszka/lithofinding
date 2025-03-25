<script lang="ts" setup>
import { useCounterStore } from "~/stores/myStore";
const store = useCounterStore();

const counter = computed(() => store.count);
const increment = store.increment;
const decrement = store.decrement;
</script>

<template>
  <div>
    <div>
      Counter: {{ counter }}
      <v-btn @click="increment">+</v-btn>
      <v-btn @click="decrement">-</v-btn>
    </div>
  </div>
</template>
