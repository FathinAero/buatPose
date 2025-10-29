<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  desc: string
}>()
</script>

<template>
  <div class="relative">
    <div
      class="absolute inset-0 translate-x-[12px] translate-y-[12px]
             rounded-[20px] bg-[#2E3DB3]"
    />
    <div
      class="relative rounded-[20px] bg-[#3F51F7] text-white
             p-[24px] min-h-[240px]"
    >
      <div class="w-[64px] h-[64px] rounded-[16px] grid place-items-center">
        <img v-if="icon.startsWith('/')" :src="icon" alt="" class="w-[180px] h-[180xpx] object-contain" />
        <span v-else class="text-[28px] leading-none">{{ icon }}</span>
      </div>

      <h4 class="mt-[14px] text-[20px] leading-[26px] font-semibold">
        {{ title }}
      </h4>
      <p class="mt-[8px] text-white/85 text-[15px] leading-[24px]">
        {{ desc }}
      </p>
    </div>
  </div>
</template>
