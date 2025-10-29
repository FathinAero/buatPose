<script setup lang="ts">
import PlanCard from '~/components/pricing/PlanCard.vue'

const featuresLeft = [
  'Revenue share 10% from each branch',
  'Managing & monitoring up to 5 branch',
  '1 year subscription',
  'WhatsApp Message up to 1,000 message',
  'System update',
  'Training product'
]

const featuresRight = [
  'No revenue share',
  'Managing & monitoring up to 5 branch',
  '1 year subscription',
  'WhatsApp Message up to 1,000 message',
  'System update',
  'Training product'
]
</script>

<template>
  <section class="relative py-[56px]">
    <!-- BG gradien (SVG) di atas bg dasar, tanpa z-index negatif -->
    <div class="pointer-events-none absolute inset-0 z-0">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 h-[1600px] w-[140vw]">
        <img
          src="/img/gradation-pricing.svg"
          alt=""
          class="absolute left-1/2 -translate-x-1/2
                 h-full w-auto object-contain select-none"
        />
      </div>
    </div>

    <!-- Semua konten dinaikkan di atas gradien -->
    <div class="relative z-10 max-w-[1200px] mx-auto px-[16px] md:px-[24px]">
      <!-- title & desc -->
      <div class="text-center">
        <h2 class="text-[28px] md:text-[34px] font-bold leading-[1.25]">
          Dapatkan <span class="text-[#FF66C4]">Rencana Sempurna</span><br class="hidden md:block" />
          untuk Pertumbuhan Bisnismu
        </h2>
        <p class="mt-[10px] text-[13px] md:text-[14px] text-[#1F2937]">
          Mulai dari yang sederhana hingga yang skalanya besar. Semua paket
          Pose hadir dengan fitur yang memudahkan kamu menjalankan booth.
        </p>
      </div>

      <!-- cards -->
      <div
        class="mt-[24px] flex flex-col items-center gap-[16px]
               md:flex-row md:gap-[24px] md:justify-center md:items-end"
      >
        <PlanCard
          class="md:self-end"
          title="Subscribe Collaborate"
          price="Rp25.000.000"
          period="/year"
          :features="featuresLeft"
          addon="Rp1.500.000/branch"
          accent="#3D7BFF"
          :titleColor="'#101B87'"
          border="#BFD0FF"
          divider="#E6ECFF"
          bg="#EFF2FF"
          :width="380"
        />

        <PlanCard
          class="md:self-end"
          title="Subscribe Ultimate"
          price="Rp60.000.000"
          period="/year"
          :features="featuresRight"
          addon="Rp5.000.000/branch"
          accent="#FF66C4"
          :titleColor="'#EA018B'"
          border="#FFB4DF"
          divider="#FFE0F1"
          bg="#FFEFF9"
          :width="380"
          :highlight="true"
        />
      </div>

      <p class="mt-[16px] text-[12px] text-gray-500 max-w-[760px] mx-auto">
        *The price shown is the annual rate excluding tax. The total price to be paid at checkout is the annual price plus
        other charges such as VAT tax, service fees and bank fees.
      </p>
    </div>
  </section>
</template>
