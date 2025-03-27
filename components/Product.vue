<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
});

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
  const maxFade = 400; // Ennyi pixel görgetés után teljesen eltűnik
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
    class="bg-[#f0e2ce] h-screen flex flex-col items-center justify-center static transition-opacity duration-200"
  >
    <div
      class="text-center text-7xl font-bold text-amber-950 tracking-tight font-stretch-extra-condensed"
      :style="{ opacity }"
    >
      {{ title }}
    </div>
    <div class="relative">
      <img
        ref="imageRef"
        :src="src"
        :alt="title"
        class="w-72 contrast-120 brightness-110 -translate-y-6 transition-transform duration-200"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        :style="{ opacity }"
      />
    </div>
    <div
      class="rounded-full w-20 h-20 ring-4 text-amber-950 ring-amber-950 absolute -translate-x-34 translate-y-26 justify-center items-center hover:bg-amber-950 duration-200 transition-all group hover:text-[#f0e2ce] hover:size-28"
      :style="{ opacity }"
    >
      <NuxtLink
        to="/csokolade-lithofan"
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >Részletek
      </NuxtLink>
    </div>
  </div>
</template>
