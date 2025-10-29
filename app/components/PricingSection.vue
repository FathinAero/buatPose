<script setup lang="ts">
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
  <!-- band lembut belakang (boleh hapus jika sudah pakai bg global) -->
  <section id="pricing" class="py-[56px]">
    <div class="max-w-[1200px] mx-auto px-[16px] md:px-[24px]">
      <!-- pill & heading -->
      <div class="text-center">
        <div
          class="inline-flex items-center gap-[6px] px-[12px] py-[6px] rounded-[999px]
                 bg-white ring-1 ring-[#D9D2FF] text-[#6A5AE0] text-[12px] font-semibold"
        >
          💲 Pricing
        </div>

        <h2 class="mt-[10px] text-[28px] md:text-[32px] font-bold leading-[1.25]">
          Find the
          <span class="bg-[#3D4CDF] bg-clip-text text-transparent">
            Flexible Plans
          </span>
          for<br/>Every Stage Growth
        </h2>
      </div>

      <!-- cards -->
      <div class="mt-[24px] flex flex-col items-center gap-[16px] md:flex-row md:gap-[24px] md:justify-center md:items-end">
        <!-- left (biru) -->
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

        <!-- right (pink) -->
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

      <!-- footnote -->
      <p class="mt-[16px] text-[12px] text-gray-500 max-w-[760px] mx-auto">
        *The price shown is the annual rate excluding tax. The total price to be paid at checkout is the annual price plus
        other charges such as VAT tax, service fees and bank fees.
      </p>
    </div>
  </section>
</template>

