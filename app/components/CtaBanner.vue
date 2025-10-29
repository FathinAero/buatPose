<script setup lang="ts">
const blue = '#14239B' // warna strip biru
</script>

<template>
  <section class="w-full mt-[50px]" :style="{ background: blue }">
    <div class="relative max-w-[1200px] mx-auto px-[16px] md:px-[24px] py-[60px] md:py-[86px] text-center">

      <!-- Dekor (pakai assets dari /public/img) -->
      <div class="pointer-events-none select-none hidden md:block">
        <!-- kamera pink kiri-atas -->
        <img
          src="/img/pink-camera.svg"
          alt="camera"
          class="absolute left-[0px] -top[0px] w-[64px] h-auto"
        />
        <!-- spiral kanan-atas -->
        <img
          src="/img/spiral.svg"
          alt="spiral"
          class="absolute right-[4px] -top-[6px] w-[44px] h-auto opacity-90"
        />
        <!-- spiral kecil kiri (aksen) -->
        <img
          src="/img/spiral.svg"
          alt="spiral"
          class="absolute left-[200px] top-[72px] w-[40px] h-auto opacity-80"
        />
        <!-- star-arrow hijau kanan-bawah -->
        <img
          src="/img/green-star-arrow.svg"
          alt="star arrow"
          class="absolute right-[24px] bottom-[10px] w-[56px] h-auto"
        />
      </div>

      <h2 class="text-white text-[24px] md:text-[30px] font-bold">
        Ready to Elevate Your Photo Booth Business?
      </h2>
      <p class="text-white/80 text-[14px] md:text-[15px] mt-[8px]">
        We believe every photobooth has great potential and we are ready to help you develop it with Pose.
      </p>

      <a
        href="#get-started"
        class="inline-flex items-center gap-[8px] mt-[16px] px-[22px] py-[12px] rounded-[999px]
               text-white text-[14px] font-semibold"
        style="background:#FF66C4"
      >
        Get Started
        <svg class="w-[16px] h-[16px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  </section>
</template>
