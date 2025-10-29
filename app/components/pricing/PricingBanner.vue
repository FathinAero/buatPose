<script setup lang="ts">
const props = withDefaults(defineProps<{
  title?: string
  desc?: string
  ctaLabel?: string
  ctaHref?: string
}>(), {
  title: 'Masih Bingung Pilih Paket yang Cocok?',
  desc: 'Kami siap bantu analisa kebutuhan booth kamu, dan merekomendasikan paket terbaik.',
  ctaLabel: 'Contact Us',
  ctaHref: '#contact'
})
</script>

<template>
  <section class="relative py-[36px] md:py-[48px] bg-[#121F9D] text-white">
    <div class="max-w-[1200px] mx-auto px-[16px] md:px-[24px]">
      <div>
        <h3 class="text-[22px] md:text-[28px] font-bold leading-tight">
          {{ title }}
        </h3>

        <p class="mt-[8px] text-[14px] opacity-90">
          {{ desc }}
        </p>

        <!-- tombol dipindah ke bawah teks -->
        <a
          :href="ctaHref"
          class="mt-[14px] inline-flex items-center gap-[6px] rounded-full bg-[#FAAE00] text-white
                 px-[16px] py-[10px] text-[14px] font-semibold hover:brightness-95"
        >
          {{ ctaLabel }}
          <svg class="h-[14px] w-[14px]" viewBox="0 0 24 24" fill="none">
            <path d="M7 17l7-7M14 17h-7V10"
                  stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
