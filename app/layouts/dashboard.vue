<template>
  <div class="flex h-screen text-[14px] text-[#1a1a1a] bg-white">
    <DashboardSidebar />

    <section class="flex-1 flex flex-col min-w-0 bg-white">
      <main class="flex-1 overflow-y-auto px-6 py-6 bg-white">
        <slot />
      </main>
    </section>
  </div>
</template>

<script setup lang="ts">
// gak perlu logic khusus disini
</script>