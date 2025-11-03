<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const orgId = computed(() => (route.params.orgId as string) || 'org-1')

// bikin links sederhana dulu (tanpa icon biar gak ada dependency aneh)
const links = computed(() => ([
  { label: 'Devices',  to: `/dashboard/org/${orgId.value}/devices` },
  { label: 'Billings', to: `/dashboard/org/${orgId.value}/billings` }
]))
</script>

<template>
  <!-- Container resmi Nuxt UI dashboard -->
  <UDashboardLayout>
    <!-- SIDEBAR -->
    <template #sidebar>
      <UVerticalNavigation
        :links="links"
        :ui="{
          wrapper: 'p-2 space-y-1',
          base: 'flex items-center gap-2 rounded-[6px] px-3 py-2 text-[14px] leading-none',
          active: 'bg-[#F4F4F5] font-medium shadow-[0_0_0_1px_rgba(0,0,0,0.05)] text-[#111827]',
          inactive: 'hover:bg-[#F4F4F5] text-[#111827]'
        }"
      />
    </template>

    <!-- HEADER (top bar) -->
    <template #header>
      <div class="flex items-center justify-between h-12 border-b border-[#E5E7EB] bg-white px-4 lg:px-6">
        <div class="flex items-center gap-2 min-w-0">
          <NuxtLink to="/dashboard" class="shrink-0">
            <img src="/img/logo-pose.svg" alt="Pose" class="h-6 w-auto" />
          </NuxtLink>
          <span class="text-[#9CA3AF] select-none">/</span>
          <div class="truncate text-[14px] text-[#111827]">{{ orgId }}</div>
        </div>

        <NuxtLink
          to="/my-account"
          class="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#E5E7EB] hover:bg-[#F4F4F5]"
          aria-label="My Account"
        >
          <img src="/img/dashboard-symbol-account.svg" alt="Account" class="h-5 w-5" />
        </NuxtLink>
      </div>
    </template>

    <!-- CONTENT -->
    <div class="min-w-0 px-4 lg:px-6 py-6">
      <slot />
    </div>
  </UDashboardLayout>
</template>
