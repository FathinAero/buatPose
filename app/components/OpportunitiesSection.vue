<script setup lang="ts">
const items = [
  { img: '/img/concert.svg',        title: 'Concert',         main: '#3F51F7', back: '#2E3DB3' },
  { img: '/img/birthday.svg',       title: 'Birthday Party',  main: '#20B486', back: '#148A66' },
  { img: '/img/wedding.svg',        title: 'Wedding',         main: '#F5B53F', back: '#D0952F' },
  { img: '/img/conference.svg',     title: 'Conference',      main: '#FF42A1', back: '#C51C7C' },
  { img: '/img/private-event.svg',  title: 'Private Event',   main: '#FF5353', back: '#D43A3A' },
  { img: '/img/graduation.svg',     title: 'Graduation',      main: '#9B47F3', back: '#6A2FD3' }
]
</script>

<template>
  <section id="opportunities" class="py-[56px]">
    <div class="max-w-[1200px] mx-auto px-[16px] md:px-[24px]">
      <!-- Heading + panah -->
      <div
        class="flex flex-wrap items-end gap-[10px] sm:gap-[12px] md:gap-[16px]
               justify-center md:justify-start mb-[28px] md:mb-[40px] lg:mb-[50px]"
      >
        <h2 class="text-center md:text-left text-[24px] sm:text-[28px] md:text-[36px] leading-[1.2] font-bold">
          Promising Photo Booth Business<br />
          <span class="bg-[#FF66C4] bg-clip-text text-transparent">Opportunities</span>
          <span class="text-[#111]"> for You</span>
        </h2>

        <img
          src="/img/blue-pink-arrow.svg"
          alt=""
          class="self-end translate-y-[6px] md:translate-y-[10px]
                 h-[40px] sm:h-[44px] md:h-[56px] w-auto
                 ml-[14px] sm:ml-[18px] md:ml-[26px] lg:ml-[32px] select-none"
          loading="lazy" decoding="async"
        />
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[16px] md:gap-[20px] lg:gap-[24px] mt-[12px] md:mt-[24px] justify-items-center">
        <OpportunityCard
          v-for="(it, i) in items"
          :key="i"
          :img="it.img"
          :title="it.title"
          :main="it.main"
          :back="it.back"
          :width="260"
        />
      </div>
    </div>
  </section>
</template>
