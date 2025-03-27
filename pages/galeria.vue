<template>
  <div class="flex flex-col items-center text-amber-950">
    <h1 class="text-3xl md:text-6xl font-bold mb-8">AI Galéria</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="relative group rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
      >
        <img
          :src="image.src"
          :alt="image.alt"
          class="w-full h-full object-cover"
        />
        <div
          class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-12"
        >
          <p class="text-white text-lg font-semibold">{{ image.caption }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          src: "/ai1.png",
          alt: "Csokoládé művészet 1",
          caption: "AI által elklépzelt torta",
        },
        {
          src: "/ai2.png",
          alt: "Csokoládé művészet 2",
          caption: "AI által elklépzelt torta",
        },
        {
          src: "/ai3.png",
          alt: "Csokoládé művészet 3",
          caption: "AI által elklépzelt torta",
        },
        {
          src: "/ai4.png",
          alt: "Csokoládé művészet 4",
          caption: "AI által elklépzelt torta",
        },
        {
          src: "/ai5.png",
          alt: "Csokoládé művészet 5",
          caption: "AI által elklépzelt torta",
        },
        {
          src: "/ai6.png",
          alt: "Csokoládé művészet 6",
          caption: "AI által elklépzelt torta",
        },
      ],
    };
  },
};
</script>

<style>
.grid img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
