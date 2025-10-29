<script setup lang="ts">
import { ref } from 'vue'

type Step = { title: string; desc: string; img: string }
const steps = ref<Step[]>([
  { title: 'Step 1', desc: 'Just tap anywhere in the Welcome screen to start.',           img: '/img/welcome.svg' },
  { title: 'Step 2', desc: 'There will be the instructions for using the photo booth.',       img: '/img/how-to.svg' },
  { title: 'Step 3', desc: 'Customers will scan the QR code to make payment.',                    img: '/img/payment.svg' },
  { title: 'Step 4', desc: 'Validate payments quickly once payment is complete.',                         img: '/img/payment-success.svg' },
  { title: 'Step 5', desc: 'Customers can choose which frame to use.',                img: '/img/choose-frame.svg' },
  { title: 'Step 6', desc: 'After that take a photo and do a retake if necessary.',             img: '/img/retake.svg' },
  { title: 'Step 7', desc: 'Customers can also add filters to their photos.',                  img: '/img/choose-filter.svg' },
  { title: 'Step 8', desc: 'Print will be processed. Customer can also reprint or send digital images via WhatAapp..',                        img: '/img/print-again.svg' },
])

const scroller = ref<HTMLDivElement | null>(null)
const scrollByCards = (dir: 1 | -1) => {
  const el = scroller.value
  if (!el) return
  const card = el.querySelector<HTMLElement>('[data-card]')
  const w = card ? card.offsetWidth + 16 : 320
  el.scrollBy({ left: dir * w * 1.25, behavior: 'smooth' })
}
</script>

<template>
  <section class="relative">
    <div class="mx-auto w-full max-w-[1200px] px-[24px] md:px-[40px] lg:px-[64px] mb-[100px]">
      <div class="pt-[8px] pb-[30px] flex items-center justify-center">
        <div class="inline-flex h-[28px] items-center justify-center rounded-[999px] px-[10px] text-[12px] font-semibold text-[#FF66C4] ring-1 ring-[#FF66C4]">
          Process
        </div>
      </div>

      <h2 class="text-center text-[24px] leading-[32px] md:text-[32px] md:leading-[40px] font-semibold text-[#0F172A]">
          <span class="inline-flex align-baseline">
            <span class="text-[#3D4CDF]">P</span>
            <span class="-ml-[2px] text-[#FD78CB]">o</span>
            <span class="-ml-[2px] text-[#3D4CDF]">s</span>
            <span class="-ml-[2px] text-[#3D4CDF]">e</span>
          </span>
        Photo Booth Usage Process Flow
      </h2>
      <p class="mt-[8px] text-center text-[14px] md:text-[15px]">
        An intuitive scree, fun experience from first tap to printed photo, designed to delight your costumers!.
      </p>

      <div class="relative mt-[24px] md:mt-[10px]">
        <div class="flex items-center justify-end gap-2 mb-2">
          <button class="hidden md:inline-flex h-[36px] px-3 rounded-lg ring-1 ring-gray-200 hover:bg-gray-50" @click="scrollByCards(-1)">‹</button>
          <button class="hidden md:inline-flex h-[36px] px-3 rounded-lg ring-1 ring-gray-200 hover:bg-gray-50" @click="scrollByCards(1)">›</button>
        </div>

        <div
          ref="scroller"
          class="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2"
        >
          <div
            v-for="(s, i) in steps"
            :key="i"
            data-card
            class="snap-start shrink-0 w-[280px] sm:w-[300px] md:w-[320px] rounded-2xl border border-[#E7EDFF] bg-[#E1E7FF]"
          >
            <div class="px-4 pt-4 pb-3">
              <div class="flex items-center gap-2 text-[12px] font-semibold text-[#3D4CDF]">
                <span class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#FF66C4] text-white">{{ i + 1 }}</span>
                {{ s.title }}
              </div>
              <p class="mt-2 text-[13px] leading-[20px]">
                {{ s.desc }}
              </p>
            </div>

            <div class="mx-4 mb-4 h-[150px] sm:h-[160px] md:h-[170px] rounded-xl ring-1 ring-[#EEF1F6] overflow-hidden bg-[#F5F7FB]">
              <img
                :src="s.img"
                :alt="s.title"
                class="h-full w-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
