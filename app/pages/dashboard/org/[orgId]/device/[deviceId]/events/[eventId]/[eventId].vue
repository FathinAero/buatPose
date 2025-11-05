<script setup lang="ts">
definePageMeta({ layout: 'dashboard' })
try {
  const { useDashboardSidebar } = await import('~/composables/useDashboardSidebar')
  useDashboardSidebar().mode.value = 'event'
} catch {}
</script>

<template>
  <NuxtPage />
</template>
