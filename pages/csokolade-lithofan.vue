<template>
  <div>
    <div class="flex flex-col items-center text-amber-950">
      <h1 class="text-6xl">Csokoládé litofán</h1>
      <div
        v-motion="{
          initial: {
            y: 80,
            opacity: 0,
          },
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 400,
              type: 'keyframes',
              ease: 'easeIn',
            },
          },
        }"
        class="flex gap-10"
      >
        <div
          class="bg-[url(/csalad2Torta4.jpg)] bg-center w-80 h-80 bg-cover rounded-full hover:size-[330px] duration-200 transition-all origin-center"
        ></div>
        <div
          class="bg-[url(/kismecsesCsendelet.jpg)] bg-center w-80 h-80 bg-cover rounded-full hover:size-[330px] duration-200 transition-all origin-center"
        ></div>
      </div>
    </div>
  </div>
</template>
