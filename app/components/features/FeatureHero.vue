<script setup lang="ts">
</script>

<template>
  <section class="relative overflow-hidden bg-[#F5F7FD]" aria-label="Features Hero">
<div
  class="pointer-events-none absolute inset-0 z-10"
  style="
    background:
      radial-gradient(
        1500px 1000px at -4% 18%,
        rgba(255,173,223,0.4) 0%,
        rgba(255,173,223,0.22) 26%,
        rgba(255,229,168,0.10) 38%,
        rgba(255,229,168,0.0) 58%
      ),

      radial-gradient(
        1500px 1000px at 106% 60%,
        rgba(139,162,253,0.22) 0%,
        rgba(147,255,222,0.16) 32%,
        rgba(147,255,222,0) 56%
      );
  "
/>

    <div class="mx-auto w-full max-w-[1200px] px-[32px] md:px-[48px] lg:px-[64px]">
      <div class="grid grid-cols-1 items-center gap-x-[40px] gap-y-[40px] md:grid-cols-2 pt-[80px] pb-[72px] md:pt-[96px] md:pb-[96px]">
        <!-- TEKS -->
        <div>
          <h1 class="text-[36px] leading-[44px] md:text-[52px] md:leading-[62px] font-semibold tracking-[-0.02em] text-[#0F172A]">
            Kelola Semua Booth
            <br class="hidden md:block" />
            Tanpa Ribet, Semuanya
            <br class="hidden md:block" />
            dari Satu Tempat
          </h1>

          <p class="mt-[20px] text-[16px] leading-[26px] text-[#5F6B7A] max-w-[560px]">
            Ucapkan selamat tinggal pada pengelolaan manual dan operasional yang bikin stres.
            Kini, semua kendali ada di dashboard kamu.
          </p>

          <div class="mt-[28px]">
            <NuxtLink
              to="/get-started"
              class="inline-flex items-center gap-[10px] rounded-[999px] bg-[#FF66C4] px-[22px] h-[44px] md:h-[48px] md:px-[24px] text-white text-[14px] md:text-[15px] font-semibold shadow-[0_6px_24px_rgba(255,102,196,0.35)] hover:translate-y-[-1px] active:translate-y-0 transition-transform"
            >
              Get Started Today
              <img
                src="/img/blue-pink-arrow.svg"
                alt=""
                class="h-[16px] w-[16px]"
                loading="eager"
                decoding="async"
              />
            </NuxtLink>
          </div>
        </div>

        <!-- VISUAL -->
        <div class="relative">
          <!-- laptop/dashboard utama -->
          <img
            src="/img/complete-control.svg"
            alt="Tampilan PoSe dashboard"
            class="relative z-[2] mx-auto w-full max-w-[560px]"
            loading="eager"
            decoding="async"
          />

          <!-- stiker kamera (atas kiri) -->
          <img
            src="/img/pink-camera.svg"
            alt=""
            class="absolute z-[3] left-[20px] top-[-6px] md:left-[10px] md:top-[-10px] w-[62px] md:w-[72px]"
          />

          <!-- stiker share (bawah kanan) -->
          <img
            src="/img/green-star-arrow.svg"
            alt=""
            class="absolute z-[3] right-[6px] bottom-[-6px] md:right-[-6px] md:bottom-[-10px] w-[66px] md:w-[74px]"
          />
        </div>
      </div>
    </div>
  </section>
</template>