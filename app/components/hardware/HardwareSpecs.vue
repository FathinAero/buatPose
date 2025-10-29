<script setup lang="ts">
import { ref } from 'vue'

type Item = {
  id: string
  title: string
  content: string
}

const items = ref<Item[]>([
  {
    id: 'hardware',
    title: 'Spesifikasi Hardware',
    content:
      'Detail spesifikasi hardware yang direkomendasikan (PC, lighting, display, dsb). Nanti kita isi.',
  },
  {
    id: 'printer',
    title: 'Printer Photobooth',
    content:
      'Rekomendasi printer yang cepat, konsisten, dan cost-efficient untuk event. Nanti kita isi.',
  },
  {
    id: 'camera',
    title: 'Rekomendasi Kamera',
    content:
      'Pilihan kamera yang cocok untuk kualitas bagus dan workflow cepat. Nanti kita isi.',
  },
])

const openId = ref<string | null>(null)

function toggle(id: string) {
  openId.value = openId.value === id ? null : id
}
</script>

<template>
  <section class="relative w-full bg-[#F5F7FD] pb-[40px] md:pb-[56px]">
    <div class="max-w-[1200px] mx-auto px-[16px] md:px-[24px]">
      <div class="mt-[24px] md:mt-[32px] grid gap-[12px] md:gap-[14px]">
        <div
          v-for="item in items"
          :key="item.id"
          class="rounded-[6px] border border-[#D8DDEB] bg-white/70 backdrop-blur
                 text-[#0F172A] shadow-sm"
        >
          <!-- header row -->
          <button
            type="button"
            class="w-full flex items-center justify-between text-left
                   px-[16px] py-[14px] md:px-[18px] md:py-[16px] focus:outline-none"
            @click="toggle(item.id)"
          >
            <span class="text-[14px] md:text-[14px] font-medium text-[#0F172A]">
              {{ item.title }}
            </span>

            <span
              class="flex h-[20px] w-[20px] items-center justify-center rounded-[4px]
                     border border-[#C9CDD8] text-[#0F172A] text-[16px]
                     leading-none"
            >
              <span v-if="openId !== item.id">+</span>
              <span v-else>−</span>
            </span>
          </button>

          <!-- content -->
          <div
            v-if="openId === item.id"
            class="px-[16px] pb-[16px] md:px-[18px] md:pb-[18px] text-[14px] leading-[20px] text-[#1F2937] border-t border-[#E5E7EF]"
          >
            {{ item.content }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
