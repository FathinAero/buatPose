<script setup lang="ts">

</script>

<template>
  <div class="min-h-screen bg-white text-[#1a1a1a] text-[14px] relative font-inter">
    <main class="px-6 py-6">
      <slot />
    </main>

    <div class="fixed left-1/2 bottom-[120px] -translate-x-1/2">
      <div
        class="w-[32px] h-[32px] rounded-full bg-[#5B21B6] text-white text-[13px] font-medium flex items-center justify-center shadow-[0_8px_16px_rgba(0,0,0,0.35)] border border-[#1F2937]/20"
      >
        R
      </div>
    </div>
  </div>
</template>
