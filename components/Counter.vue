<script lang="ts" setup>
const counter = useCounter();
</script>

<template>
  <div>
    <div>
      Counter: {{ counter }}
      <!-- Kiírjuk az aktuális értéket -->
      <v-btn @click="counter++">+</v-btn>
      <!-- A változó értékének növelése -->
      <v-btn @click="counter--">-</v-btn>
      <!-- A változó értékének csökkentése -->
    </div>
  </div>
</template>
