<script setup lang="ts"></script>

<template>
  <section class="relative isolate">
    <!-- full-bleed white band -->
    <div aria-hidden="true" class="absolute inset-0 bg-white -z-10"></div>

    <!-- container: batas kiri/kanan -->
    <div class="mx-auto w-full max-w-[1200px] px-[24px] md:px-[40px] lg:px-[64px]">
      <div class="pt-[24px] pb-[56px] md:pt-[32px] md:pb-[72px]">
        <!-- Heading -->
        <h2 class="text-center text-[#0F172A] text-[24px] leading-[30px] md:text-[28px] md:leading-[34px] font-semibold">
          Here’s Your Current <span class="text-[#3D7BFF]">Struggle</span>
        </h2>

        <!-- Cards -->
        <div class="mt-[20px] md:mt-[28px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[12px] md:gap-[16px]">
          <!-- 1 -->
          <div class="rounded-[12px] border border-[#9DB9FF] bg-white px-[16px] py-[16px]">
            <div class="flex flex-col gap-[10px]">
              <div class="h-[32px] w-[32px] flex items-center justify-center">
                <img src="/img/symbol-wrench.svg" alt="" class="h-[24px] w-[24px]" />
              </div>
              <p class="text-[14px] leading-[20px] text-[#111827] font-semibold">
                Difficult to monitor booths in many locations in real-time?
              </p>
            </div>
          </div>

          <!-- 2 -->
          <div class="rounded-[12px] border border-[#9DB9FF] bg-white px-[16px] py-[16px]">
            <div class="flex flex-col gap-[10px]">
              <div class="h-[32px] w-[32px] rounded-[8px] flex items-center justify-center">
                <img src="/img/symbol-frame-2.svg" alt="" class="h-[24px] w-[24px]" />
              </div>
              <p class="text-[14px] leading-[20px] text-[#111827] font-semibold">
                Frame & filter design for each event must be made manually one by one?
              </p>
            </div>
          </div>

          <!-- 3 -->
          <div class="rounded-[12px] border border-[#9DB9FF] bg-white px-[16px] py-[16px]">
            <div class="flex flex-col gap-[10px]">
              <div class="h-[32px] w-[32px] rounded-[8px] flex items-center justify-center">
                <img src="/img/symbol-building.svg" alt="" class="h-[24px] w-[24px]" />
              </div>
              <p class="text-[14px] leading-[20px] text-[#111827] font-semibold">
                Adding new branch requires a lot of setup and extra cost?
              </p>
            </div>
          </div>

          <!-- 4 -->
          <div class="rounded-[12px] border border-[#9DB9FF] bg-white px-[16px] py-[16px]">
            <div class="flex flex-col gap-[10px]">
              <div class="h-[32px] w-[32px] rounded-[8px] flex items-center justify-center">
                <img src="/img/symbol-chat-error.svg" alt="" class="h-[24px] w-[24px]" />
              </div>
              <p class="text-[14px] leading-[20px] text-[#111827] font-semibold">
                No automated follow-ups so you missed opportunities to retain customers?
              </p>
            </div>
          </div>

          <!-- 5 -->
          <div class="rounded-[12px] border border-[#9DB9FF] bg-white px-[16px] py-[16px]">
            <div class="flex flex-col gap-[10px]">
              <div class="h-[32px] w-[32px] rounded-[8px] flex items-center justify-center">
                <img src="/img/symbol-pie-chart.svg" alt="" class="h-[24px] w-[24px]" />
              </div>
              <p class="text-[14px] leading-[20px] text-[#111827] font-semibold">
                Decision rely on guesswork instead of real performance metrics?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
