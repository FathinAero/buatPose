<script setup lang="ts">
import ContactSection from '~/components/contact/ContactSection.vue'
import ContactCtaBanner from '~/components/contact/ContactCtaBanner.vue'
import SiteFooter from '~/components/SiteFooter.vue'
</script>

<template>
  <div>
    <ContactSection
      :patternWidth="100"
      :gradWidth="100"
      :offsetTop="-130"
      :patternOpacity="0.9"
    />
    <ContactCtaBanner class="mt-[28px]" />
    <SiteFooter />
  </div>
</template>
