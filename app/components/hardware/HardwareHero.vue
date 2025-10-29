<script setup lang="ts">

interface Props {
  offsetTop?: number
  patternWidth?: number
  patternOpacity?: number
  gradWidth?: number
}

const props = withDefaults(defineProps<Props>(), {
  offsetTop: 0,
  patternWidth: 180,
  patternOpacity: 0.6,
  gradWidth: 180,
})
</script>

<template>
  <section class="relative w-full overflow-hidden bg-[#F5F7FD]">
    <div
      class="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <!-- pattern -->
      <div
        class="absolute left-1/2 -translate-x-1/2 h-full"
        :style="{
          top: props.offsetTop + 'px',
          width: props.patternWidth + 'vw'
        }"
      >
        <img
          src="/img/pattern-square.svg"
          alt=""
          class="w-full h-full object-cover max-w-none"
          :style="{ opacity: props.patternOpacity.toString() }"
        />
      </div>

      <!-- gradation -->
      <div
        class="absolute left-1/2 -translate-x-1/2 h-full"
        :style="{
          top: props.offsetTop + 'px',
          width: props.gradWidth + 'vw'
        }"
      >
        <img
          src="/img/gradation-hardware.svg"
          alt=""
          class="w-full h-full object-cover max-w-none"
        />
      </div>
    </div>

    <!-- === hero content === -->
    <div
      class="relative z-10 max-w-[1200px] mx-auto px-[16px] md:px-[24px] py-[80px] md:py-[120px]"
    >
      <div class="flex flex-col gap-[16px] relative">
        <!-- top row: pill + arrows -->
        <div class="flex items-start justify-between gap-[16px]">
          <div
            class="pill text-[#3D7BFF] ring-1 ring-[#3D7BFF] w-fit"
          >
            Equipments
          </div>

          <!-- dekor panah di kanan -->
          <img
            src="/img/blue-pink-arrow.svg"
            alt=""
            class="hidden md:block w-[200px] h-auto select-none pointer-events-none"
          />
        </div>

        <!-- heading + desc -->
        <div class="max-w-[560px]">
          <h1
            class="text-[24px] sm:text-[28px] md:text-[44px] font-bold leading-[1.25]"
          >
            Hardware and Booth
          </h1>

          <p
            class="mt-[10px] text-[16px] leading-[20px]"
          >
            Gunakan perangkat yang kamu punya, atau ikuti rekomendasi kami
            untuk hasil terbaik. Pose fleksibel dan siap dipakai.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pill {
  @apply inline-flex items-center justify-center
         h-[28px] px-[10px]
         rounded-[999px]
         text-[12px] font-semibold;
}
</style>
