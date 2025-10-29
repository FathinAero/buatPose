<script setup lang="ts">
interface Props {
  title?: string
  desc?: string
  ctaLabel?: string
  ctaHref?: string
}
withDefaults(defineProps<Props>(), {
  title: 'Ready to Elevate Your Photo Booth Business?',
  desc:
    'We believe every photobooth has great potential and we are ready to help you develop it with Pose.',
  ctaLabel: 'Get Started',
  ctaHref: '#get-started',
})
</script>

<template>
  <section class="relative overflow-hidden">
    <!-- BG -->
    <div
      class="absolute inset-0 -z-10"
      style="
        background:
          #121F9D;
      "
    />

    <!-- dekor -->
    <img src="/img/pink-camera.svg"
         class="hidden sm:block pointer-events-none absolute left-[18px] top-[22px] w-[56px] h-[56px]" alt="" />
    <img src="/img/green-star-arrow.svg"
         class="hidden sm:block pointer-events-none absolute right-[24px] top-[30px] w-[56px] h-[56px]" alt="" />
    <!-- swirl kecil (pakai inline svg kalau nggak ada aset) -->
    <svg class="pointer-events-none absolute left-[160px] bottom-[22px] w-[32px] h-[32px] opacity-90"
         viewBox="0 0 24 24" fill="none">
      <path d="M4 12a8 8 0 1016 0A8 8 0 104 12zm4 0a4 4 0 108 0 4 4 0 10-8 0z" stroke="white" stroke-width="1.5"/>
    </svg>

    <div class="mx-auto max-w-[1200px] px-[16px] md:px-[24px] py-[34px] md:py-[44px]">
      <div class="text-center text-white">
        <h3 class="text-[22px] md:text-[28px] font-bold leading-tight">
          {{ title }}
        </h3>
        <p class="mt-[8px] text-[14px] opacity-90">
          {{ desc }}
        </p>

        <div class="mt-[16px]">
          <a :href="ctaHref"
             class="inline-flex items-center gap-[8px] rounded-full bg-[#FF66C4]
                    px-[18px] py-[10px] text-[14px] font-semibold text-white hover:brightness-95">
            {{ ctaLabel }}
            <svg class="h-[14px] w-[14px]" viewBox="0 0 24 24" fill="none">
              <path d="M7 17l7-7M14 17h-7V10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
