<script setup lang="ts">
const props = withDefaults(defineProps<{
  img: string
  title: string
  main: string
  back: string
  width?: number
}>(), {
  width: 460
})
</script>

<template>
  <div class="relative" :style="{ width: props.width + 'px' }">
    <div
      class="absolute inset-0 translate-x-[10px] translate-y-[10px] rounded-[20px]"
      :style="{ backgroundColor: back }"
    />
    <div
      class="relative rounded-[20px] overflow-hidden"
      :style="{ backgroundColor: main }"
    >
      <img
        :src="img"
        :alt="title"
        class="w-full h-[140px] object-cover rounded-t-[20px] select-none"
        loading="lazy" decoding="async"
      />
      <div class="px-[14px] py-[12px]">
        <p class="text-center text-white text-[15px] font-semibold leading-[22px]">
          {{ title }}
        </p>
      </div>
    </div>
  </div>
</template>
