<script setup lang="ts">
import { getCurrentInstance, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const orgId = computed(() => (route.params.orgId as string) || 'org')

// links dasar
const links = computed(() => ([
  { label: 'Devices',  to: `/dashboard/org/${orgId.value}/devices` },
  { label: 'Billings', to: `/dashboard/org/${orgId.value}/billings` }
]))

// deteksi apakah komponen Nuxt UI terdaftar
const app = getCurrentInstance()?.appContext
const hasNuxtUI = computed(() => !!app?.components?.UVerticalNavigation)
</script>

<template>
  <!-- Pakai Nuxt UI kalau ada -->
  <UVerticalNavigation
    v-if="hasNuxtUI"
    :links="links"
    :ui="{
      base: 'px-2 py-2',
      padding: 'px-3 py-2',
      size: 'text-[14px]',
      rounded: 'rounded-[6px]',
      active: 'bg-[#F4F4F5] font-medium shadow-[0_0_0_1px_rgba(0,0,0,0.05)]',
      inactive: 'hover:bg-[#F9FAFB]',
      icon: { base: 'h-5 w-5 text-[#111827]' }
    }"
  />

  <!-- Fallback plain HTML kalau @nuxt/ui belum kebaca -->
  <nav v-else class="p-2 space-y-[4px]">
    <NuxtLink
      v-for="l in links"
      :key="l.to"
      :to="l.to"
      class="block rounded-[6px] px-3 py-2 hover:bg-[#F9FAFB]"
      :class="$route.path === l.to ? 'bg-[#F4F4F5] font-medium shadow-[0_0_0_1px_rgba(0,0,0,0.05)]' : ''"
    >
      {{ l.label }}
    </NuxtLink>
  </nav>
</template>
