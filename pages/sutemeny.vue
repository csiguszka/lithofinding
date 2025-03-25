<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";

const imageRef = ref<HTMLElement | null>(null);
const containerRef = ref<HTMLElement | null>(null);
const isHovering = ref(false);
const opacity = ref(1);

const handleMouseMove = (event: MouseEvent) => {
  if (!imageRef.value || !isHovering.value) return;

  const { clientX, clientY } = event;
  const { innerWidth, innerHeight } = window;

  const moveX = (clientX - innerWidth / 2) * 0.2;
  const moveY = (clientY - innerHeight / 2) * 0.2;

  imageRef.value.style.transform = `translate(${moveX}px, ${moveY}px)`;
};

const handleMouseEnter = () => {
  isHovering.value = true;
};

const handleMouseLeave = () => {
  isHovering.value = false;
  if (imageRef.value) {
    imageRef.value.style.transform = "translate(0, 0)";
  }
};

const handleScroll = () => {
  if (!containerRef.value) return;
  const scrollY = window.scrollY;
  const maxFade = 200; // Ennyi pixel görgetés után teljesen eltűnik
  opacity.value = Math.max(1 - scrollY / maxFade, 0);
};

onMounted(() => {
  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", handleMouseMove);
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div
    ref="containerRef"
    class="bg-[#f0e2ce] h-screen relative flex flex-col items-center justify-center transition-opacity duration-200"
  >
    <div
      class="text-center text-7xl font-bold text-amber-950 tracking-tight font-stretch-extra-condensed"
      :style="{ opacity }"
    >
      Litofán sütemény
    </div>
    <div class="relative">
      <img
        ref="imageRef"
        src="/zselatinonMecses4HatterNelkul.png"
        alt="Lithofán mécses süteményen"
        class="w-96 contrast-120 brightness-110 -translate-y-32 transition-transform duration-200"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        :style="{ opacity }"
      />
    </div>
  </div>
</template>
