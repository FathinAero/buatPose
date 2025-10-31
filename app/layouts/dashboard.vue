<script setup lang="ts">
import { useDashboardSidebar } from '~/composables/useDashboardSidebar'

const { mode } = useDashboardSidebar()
</script>

<template>
  <div class="h-screen flex flex-col bg-white text-[#1a1a1a] text-[14px] font-inter">
    <!-- Top bar -->
    <div
      class="h-[48px] flex items-center justify-between border-b border-[#E5E7EB] px-4 sm:px-6"
    >
      <DashboardContextSwitcher />
      <div></div>
    </div>

    <!-- Body: sidebar + main -->
    <div class="flex flex-1 min-h-0">

      <DashboardSidebarClassic />

      <section class="flex-1 flex flex-col min-w-0 bg-white">
        <main class="flex-1 overflow-y-auto px-6 py-6 bg-white">
          <slot />
        </main>
      </section>
    </div>
  </div>
</template>
