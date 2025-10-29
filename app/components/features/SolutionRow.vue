<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  img: string
  tag: string
  title: string
  desc: string
  direction?: 'left' | 'right'
  bg?: string
  tagBg?: string
  shapeRadius?: number
  shapeHeight?: number
  shapeWidth?: number | string
  imgOffsetLeft?: number
  imgOffsetTop?: number
  textMaxWidth?: number
  textPullLeft?: number
}

const props = withDefaults(defineProps<Props>(), {
  direction: 'left',
  tagBg: '#3D7BFF',
  shapeRadius: 24,
  shapeHeight: 320,
  shapeWidth: '80%',
  imgOffsetLeft: 12,
  imgOffsetTop: 12,
  textMaxWidth: 640,
  textPullLeft: 0,
})

const isRight = computed(() => props.direction === 'right')
const shapeW = computed(() =>
  typeof props.shapeWidth === 'number' ? `${props.shapeWidth}px` : props.shapeWidth
)
</script>

<template>
  <!-- tambahkan class 'solution-row' untuk scoping CSS -->
  <div class="solution-row grid w-full items-center gap-[24px] md:gap-[32px] lg:gap-[48px] md:grid-cols-2">
    <!-- BLOK SHAPE + IMG -->
    <div :class="isRight ? 'md:order-2' : ''">
      <div
        class="relative overflow-hidden"
        :style="{
          height: 'min(' + shapeHeight + 'px, 60vw)',
          width: shapeW,
          background: bg,
          borderRadius: shapeRadius + 'px'
        }"
      >
        <div
          class="absolute"
          :style="{
            top: imgOffsetTop + 'px',
            left: imgOffsetLeft + 'px',
            right: '0px',
            bottom: '0px'
          }"
        >
          <img
            :src="img"
            alt=""
            class="absolute inset-0 w-full h-full select-none object-contain"
            style="object-position: right bottom;"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </div>

    <!-- BLOK TEKS -->
    <div
      :class="[isRight ? 'md:order-1' : '', 'min-w-0', 'text-col', 'justify-self-end']"
      :style="{
        '--tmax': props.textMaxWidth + 'px',
        '--pull': '-' + props.textPullLeft + 'px'
      }"
    >
      <div
        class="inline-flex h-[36px] items-center justify-center rounded-[10px] px-[12px] text-[12px] font-semibold text-white"
        :style="{ background: tagBg }"
      >
        {{ tag }}
      </div>

      <h3 class="mt-[12px] text-[22px] leading-[28px] md:text-[28px] md:leading-[36px] font-semibold text-[#0F172A] break-words">
        {{ title }}
      </h3>

      <p class="mt-[10px] text-[15px] leading-[24px] max-w-[560px] text-[#5F6B7A] break-words">
        {{ desc }}
      </p>
    </div>
  </div>
</template>

<style scoped>
/* kolom teks dikontrol lewat CSS var */
.text-col {
  max-width: var(--tmax);
  position: relative;
  left: var(--pull);   /* <<< pakai left, bukan margin-left */
}

/* MOBILE: nolkan pull supaya tidak nyeret layout ke kiri */
@media (max-width: 767px) {
  .text-col { left: 0 !important; }
}

/* safety jika ada kata/URL super panjang */
.solution-row { overflow-wrap: anywhere; }
</style>

