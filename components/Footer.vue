<template>
  <footer>
    <div
      class="flex justify-between text-amber-950"
      style="padding: 0rem 3rem 1rem 3rem !important"
    >
      <div>
        <h1 class="font-bold">Menü</h1>
        <div class="flex flex-col">
          <NuxtLink class="cursor-pointer" to="csokolade-lithofan"
            >Csokoládé litofán</NuxtLink
          >
          <NuxtLink class="cursor-pointer">Rólunk</NuxtLink>
          <NuxtLink class="cursor-pointer">Blabla</NuxtLink>
        </div>
      </div>
      <div>
        <h1 class="font-bold">Kapcsolat</h1>
        <div class="flex flex-col">
          <div class="flex gap-2 items-center">
            <IconsMail />
            <span class="cursor-pointer">lithofinding@gmail.com</span>
          </div>
          <div class="flex gap-2 items-center">
            <IconsPhone />
            <span class="cursor-pointer">+36 30 858 9745</span>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <span> &#169;Szabó Árpád EV. </span>
        <span>
          Weboldal:
          <a class="underline font-bold" href="https://github.com/csiguszka/"
            >csiguszka</a
          >
        </span>
      </div>
    </div>
  </footer>
</template>
