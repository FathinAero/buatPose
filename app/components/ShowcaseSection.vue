<script setup lang="ts">
const imgA = '/img/user-friendly.svg'
const imgB = '/img/complete-control.svg'
</script>

<template>
  <section id="showcases" class="relative space-y-[56px] overflow-hidden mt-[100px] mb-[100px]">
    <!-- Layer gradient (tidak di-crop) -->
    <img
      src="/img/gradation-home-2.svg"
      alt=""
      class="pointer-events-none absolute inset-x-0 top-0 h-1000 w-full z-0 object-cover"
    />

    <!-- ===== Blok 1 ===== -->
    <div class="relative z-10 py-[40px] md:py-[56px]">
      <div
        class="max-w-[1200px] mx-auto px-[16px] md:px-[24px]
               grid grid-cols-1 md:grid-cols-2 items-center
               gap-[24px] md:gap-[40px]"
      >
        <!-- teks kiri (mobile turun ke bawah) -->
        <div
          class="order-2 md:order-1
                 w-full md:w-[520px]
                 text-center md:text-left mx-auto md:mx-0"
        >
          <div class="pill bg-white text-[#3D4CDF] ring-1 ring-[#3D4CDF] w-[fit-content] mx-auto md:mx-0">
            Application
          </div>

          <h3 class="mt-[12px] text-[24px] sm:text-[28px] md:text-[36px] leading-[1.2] font-bold">
            User Friendly Interface<br />with Powerful<br />Automation
          </h3>

          <p class="mt-[10px] text-[15px] md:text-[16px] leading-[24px] md:leading-[26px] text-gray-700">
            The touch interface is simple, has clear instructions and minimal
            buttons to prevent confusion. The system automatically handles
            frames, filters and timings. And the best part is easy payment
            from various banks via QRIS.
          </p>

          <a
            href="#demo"
            class="mt-[16px] inline-flex items-center gap-[8px]
                   px-[16px] py-[10px] rounded-[24px] text-white bg-[#3D7BFF]"
          >
            Lihat Demo
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                 class="w-[16px] h-[16px]" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        <!-- gambar kanan (mobile di atas, center) -->
        <div class="order-1 md:order-2 flex justify-center md:justify-end">
          <img
            :src="imgA"
            alt="User Friendly"
            class="block w-[280px] sm:w-[360px] md:w-[540px] h-auto drop-soft select-none"
            loading="lazy" decoding="async"
          />
        </div>
      </div>
    </div>

    <!-- ===== Blok 2 ===== -->
    <div class="relative z-10 py-[40px] md:py-[56px]">
      <div
        class="max-w-[1200px] mx-auto px-[16px] md:px-[24px]
               grid grid-cols-1 md:grid-cols-2 items-center
               gap-[24px] md:gap-[40px]"
      >
        <!-- gambar kiri (mobile di atas, center) -->
        <div class="order-1 md:order-1 flex justify-center md:justify-start">
          <img
            :src="imgB"
            alt="Complete Control"
            class="block w-[280px] sm:w-[360px] md:w-[540px] h-auto drop-soft select-none"
            loading="lazy" decoding="async"
          />
        </div>

        <!-- teks kanan -->
        <div
          class="order-2 md:order-2
                 w-full md:w-[520px] md:justify-self-end
                 text-center md:text-left mx-auto md:mx-0"
        >
          <div class="pill bg-white text-[#FF66C4] ring-1 ring-[#FF66C4] w-[fit-content] mx-auto md:mx-0">
            Dashboard
          </div>

          <h3 class="mt-[12px] text-[24px] sm:text-[28px] md:text-[36px] leading-[1.2] font-bold">
            Complete Control<br />for Photobooth<br />Operators
          </h3>

          <p class="mt-[10px] text-[15px] md:text-[16px] leading-[24px] md:leading-[26px] text-gray-700">
            There is a complete dashboard for managing your photobooth.
            Its features are designed for everything you need to efficiently
            manage and grow your business.
          </p>

          <a
            href="#features"
            class="mt-[16px] inline-flex items-center gap-[8px]
                   px-[16px] py-[10px] rounded-[24px] text-white bg-[#FF66C4]"
          >
            Lihat Fitur
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                 class="w-[16px] h-[16px]" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
