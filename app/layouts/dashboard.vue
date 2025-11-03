<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import DashboardBreadcrumb from '~/components/dashboard/DashboardBreadcrumb.vue'

const route = useRoute()
const { p } = usePublicPath()

const orgId = computed(() => (route.params.orgId as string) || 'org')
const items = computed<NavigationMenuItem[]>(() => ([
  { label: 'Devices',  icon: 'i-lucide-monitor', to: `/dashboard/org/${orgId.value}/devices`,  active: route.path.endsWith('/devices') },
  { label: 'Billings', icon: 'i-lucide-receipt',  to: `/dashboard/org/${orgId.value}/billings`, active: route.path.endsWith('/billings') }
]))
</script>

<template>
  <div class="min-h-screen bg-white text-[#111827]">
    <!-- HEADER: fixed, full-bleed -->
    <header class="fixed inset-x-0 top-0 z-50 border-b border-[#E5E7EB] bg-white">
      <!-- Desktop -->
      <div class="hidden lg:flex h-12 items-center justify-between px-4">
        <div class="flex items-center gap-2 min-w-0">
          <NuxtLink to="/dashboard" class="shrink-0">
            <img :src="p('/img/logo-pose.svg')" alt="Pose" class="h-6 w-auto" />
          </NuxtLink>
          <span class="text-[#9CA3AF] select-none">/</span>
          <DashboardBreadcrumb class="inline-flex items-center min-w-0" />
        </div>

        <NuxtLink to="/my-account" class="inline-flex h-9 w-9 items-center justify-center" aria-label="My Account">
          <img :src="p('/img/dashboard-symbol-account.svg')" alt="Account" class="h-5 w-5" />
        </NuxtLink>
      </div>

      <!-- Mobile (2 baris) -->
      <div class="lg:hidden">
        <div class="h-12 flex items-center justify-between px-4">
          <NuxtLink to="/dashboard" class="shrink-0">
            <img :src="p('/img/logo-pose.svg')" alt="Pose" class="h-6 w-auto" />
          </NuxtLink>
          <NuxtLink to="/my-account" class="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#E5E7EB]" aria-label="My Account">
            <img :src="p('/img/dashboard-symbol-account.svg')" alt="Account" class="h-5 w-5" />
          </NuxtLink>
        </div>
        <div class="h-12 flex items-center px-4 border-t border-[#F3F4F6]">
          <span class="text-[#9CA3AF] select-none">/</span>
          <DashboardBreadcrumb class="ms-2 inline-flex items-center min-w-0" />
        </div>
      </div>
    </header>

    <!-- KONTEN: offset header (96px mobile, 48px desktop) -->
    <main>
      <UDashboardGroup class="min-h-0">
        <UDashboardSidebar resizable collapsible :ui="{ base: 'bg-white' }">
          <template #header="{ collapsed }">
            <NuxtLink to="/dashboard" class="flex items-center gap-2">
              <img :src="p('/img/logo-pose.svg')" alt="Pose" class="h-5 w-auto" />
              <span v-if="!collapsed" class="text-sm font-medium">Pose</span>
            </NuxtLink>
          </template>
          <UNavigationMenu :items="items" orientation="vertical" class="mt-2" />
        </UDashboardSidebar>

        <!-- scroller dikasih offset + scroll-pt -->
        <div class="flex-1 min-w-0 overflow-auto pt-[96px] lg:pt-12 scroll-pt-[96px] lg:scroll-pt-12">
          <div class="p-4 md:p-6">
            <slot />
          </div>
        </div>
      </UDashboardGroup>
    </main>

  </div>
</template>
