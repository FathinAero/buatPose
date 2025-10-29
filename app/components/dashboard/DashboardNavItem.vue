<template>
  <NuxtLink
    :to="to"
    class="block rounded-[6px] border border-transparent"
    :class="[wrapperClass, active ? 'cursor-default' : 'cursor-pointer']"
  >
    <div class="flex items-center gap-[8px] h-[40px] px-[12px] text-[14px] text-[#1F2937]">
      <!-- ICON AREA -->
      <span class="flex items-center justify-center w-[20px] h-[20px]">
        <!-- 1. kalau kita punya iconName (svg custom), pakai itu -->
        <img
          v-if="iconSrc"
          :src="iconSrc"
          alt=""
          class="w-[20px] h-[20px] object-contain"
        />

        <!-- 2. fallback ke emoji kalau belum ada svg -->
        <span
          v-else
          class="text-[16px] leading-none"
        >
          {{ icon }}
        </span>
      </span>

      <!-- LABEL -->
      <span class="leading-none text-[#1F2937]">
        {{ label }}
      </span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  icon?: string                // fallback emoji
  iconName?: string            // nama icon custom tanpa .svg
  label: string
  to: string | Record<string, any>
  active?: boolean
}>()

// Hitung path icon svg berdasarkan iconName
// Asumsi: file svg kamu ada di /public/img/
const iconSrc = computed(() => {
  if (!props.iconName) return null
  return `/img/${props.iconName}.svg`
})

const wrapperClass = computed(() => {
  if (props.active) {
    return [
      'bg-[#F4F4F5]',
      'border-[#E4E4E7]',
      'text-[#1F2937]',
    ]
  }

  return [
    'hover:bg-[#F4F4F5]',
    'hover:border-[#E4E4E7]',
    'text-[#1F2937]',
    'transition-colors'
  ]
})
</script>
