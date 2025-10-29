
<script setup lang="ts">
const props = withDefaults(defineProps<{
  title: string
  price: string
  period?: string
  features: string[]
  addon: string
  cta?: string

  accent: string
  border: string
  divider: string
  titleColor?: string

  highlight?: boolean
  width?: number
  bg?: string
}>(), {
  period: '/year',
  cta: 'Choose Plan',
  highlight: false,
  width: 520,
  bg: '#FFFFFF',
  titleColor: undefined
})
</script>

<template>
  <div class="relative w-full" :style="{ maxWidth: props.width + 'px' }">
    <div
      class="relative overflow-hidden rounded-[12px] border-[1.5px]
             shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
      :style="{ borderColor: props.border, background: props.bg }"
      :class="props.highlight
        ? 'pt-[64px] px-[22px] pb-[22px]'
        : 'p-[22px]'"
    >
      <div
        v-if="props.highlight"
        class="absolute left-0 top-0 w-full h-[36px]
               flex items-center justify-center
               text-white text-[12px] font-bold
               rounded-t-[12px]"
        :style="{ backgroundColor: props.accent }"
      >
        MOST POPULAR
      </div>

      <h4 class="text-[16px] font-semibold" :style="{ color: props.titleColor || props.accent }">
        {{ title }}
      </h4>

      <div class="mt-[12px]">
        <span class="text-[24px] sm:text-[26px] md:text-[28px] font-extrabold tracking-[0.2px]">
          {{ price }}
        </span>
        <span class="ml-[6px] text-[12px] text-gray-500 align-top">{{ period }}</span>
      </div>

      <div class="my-[14px] h-[1px]" :style="{ backgroundColor: props.divider }"></div>

      <p class="text-[12px] font-bold mb-[10px]" :style="{ color: props.accent }">
        WHAT WILL YOU GET:
      </p>
      <ul class="space-y-[10px]">
        <li v-for="(f, i) in features" :key="i" class="flex gap-[10px] items-start">
          <svg class="w-[16px] h-[16px]" viewBox="0 0 20 20" fill="currentColor"
               :style="{ color: props.accent }" aria-hidden="true">
            <path fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L8.5 11.586l6.543-6.543a1 1 0 011.414 0z"
                  clip-rule="evenodd"/>
          </svg>
          <span class="text-[14px] leading-[22px] text-[#111]">{{ f }}</span>
        </li>
      </ul>

      <div class="my-[14px] h-[1px]" :style="{ backgroundColor: props.divider }"></div>

      <div class="text-[13px]">
        <p class="font-semibold text-[#2B3A67]">Addon Branch Price</p>
        <p class="text-gray-600">{{ addon }}</p>
      </div>

      <button
        class="mt-[16px] w-full rounded-[10px] text-white text-[14px] font-semibold py-[12px]"
        :style="{ backgroundColor: props.accent }"
      >
        {{ cta }}
      </button>
    </div>
  </div>
</template>
