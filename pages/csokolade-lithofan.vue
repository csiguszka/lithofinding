<template>
  <div>
    <div class="flex flex-col items-center text-amber-950">
      <div class="text-6xl flex gap-9 mb-12 font-bold">
        <h1 class="">Csokoládé</h1>
        <h1>litofán</h1>
      </div>
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
      <h1 class="text-4xl">Az emlékezetes pillanatokhoz</h1>
      <div
        v-motion-slide-visible-bottom
        class="flex gap-10 items-center justify-center mt-12"
      >
        <div
          class="bg-[url(/eljenAzIfjuParTorta2.jpg)] rounded-2xl bg-center w-80 h-80 bg-cover hover:size-[330px] duration-200 transition-all origin-center"
        ></div>
        <div class="max-h-80 h-80 max-w-96 text-justify p-4">
          <p>
            A fényképes litofán-lámpa olyan egyedi, személyre szabott termék,
            mely minden szemet ámulatba ejt. A fényképes litofán többek között
            fehércsokoládéból készül, melyet átvilágítva egy hangulatos kis
            terméket kapunk. Különösen illik a finom ízléssel megszervezett
            esküvőkre, azon belül is az esküvői tortán díszeleghet. A
            fehércsokoládé fehér színe a tisztaság és ártatlanság jelképe,
            melyen az új technológia segítségével megjelenhetnek a személyes,
            illetve szimbolikus grafikák. Különösen jó ötlet lehet megjeleníteni
            rajta a házaspár közös fényképét, monogramját, esetleg hozzájuk
            köthető közös dalszöveget vagy dátumot.
          </p>
        </div>
      </div>
      <div
        v-motion-slide-visible-bottom
        class="flex gap-10 items-center justify-center mt-12"
      >
        <div class="max-h-80 h-80 max-w-96 text-justify p-4">
          <p>
            A fehércsokoládé litofán a torta különleges díszítése mellett az
            ízvilágot is pozitív irányba fordítja. Az esküvői vendégek biztosan
            lenyűgözőnek találják a világító édességet, melyen a házaspár által
            választott grafikák látványa emlékezetessé teszik az esküvőt.
            Napjainkban elterjedt a „fine dining” kifejezés, mely olyan étkezési
            forma, amelyről szinte már, mint művészeti alkotásról beszélhetünk,
            hiszen különleges fogások lenyűgöző tálalással jelennek meg az
            asztalokon. Az átvilágítható fényképes litofán egy nagyon kreatív és
            látványos módja annak, hogy egy étterem vagy bár felhívja magára a
            figyelmet.
          </p>
        </div>
        <div
          class="bg-[url(/varTorta2.jpg)] rounded-2xl bg-center w-80 h-80 bg-cover hover:size-[330px] duration-200 transition-all origin-center"
        ></div>
      </div>
      <blockquote
        v-motion-slide-visible-bottom
        class="text-xl italic font-semibold text-gray-900 dark:text-white w-[640px] mt-4 mb-7"
      >
        <p>
          "A fehércsokoládé rendkívül jó választás lehet édességek díszítésére.
          Különleges megjelenése mellett kellemesen édes íze is csábíthatja a
          vendégeinket. A megvilágított felület akár egy az édességre jellemző
          szöveg is lehet, vagy az étterem arculatát is ábrázolhatja.."
        </p>
      </blockquote>
      <div v-motion-slide-visible-once-right>
        <v-btn class="mb-14">Felveszem a kapcsolatot</v-btn>
      </div>
    </div>
  </div>
</template>
