<script setup lang="ts">
import HardwareHero from '~/components/hardware/HardwareHero.vue'
import HardwareAccordion from '~/components/hardware/HardwareAccordion.vue'
import SiteFooter from '~/components/SiteFooter.vue'
</script>

<template>
  <section class="relative bg-[#F5F7FD]">
    <!-- hero dengan bg pattern+gradient -->
    <HardwareHero
      :pattern-width="100"
      :grad-width="120"
      :pattern-opacity="1"
      :offset-top="0"
    />

    <HardwareAccordion />
    <SiteFooter />
  </section>
</template>
