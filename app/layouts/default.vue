<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)

const links = [
  { label: 'Home',       to: '/' },
  { label: 'Pricing',    to: '/pricing' },
  { label: 'Features',   to: '/features' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Hardware',   to: '/hardware' },
]

const closeMenu = () => (open.value = false)
</script>

<template>
  <header class="sticky top-0 z-40 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-white/40">
    <div class="max-w-[1200px] mx-auto px-[16px]">
      <div class="h-[64px] flex items-center justify-between">
        <!-- LOGO ke Home -->
        <NuxtLink to="/" class="flex items-center gap-[12px]" aria-label="Pose Home">
          <img src="/img/logo-pose.svg" alt="PoSe" class="h-[36px] w-auto" />
        </NuxtLink>

        <!-- menu desktop -->
        <nav class="hidden md:flex items-center gap-[48px] xl:gap-[64px] text-[14px] font-medium text-gray-700">
          <NuxtLink
            v-for="l in links"
            :key="l.label"
            :to="l.to"
            class="hover:text-[#3D7BFF] transition"
            active-class="text-[#3D7BFF]"
            exact-active-class="text-[#3D7BFF]"
          >
            {{ l.label }}
          </NuxtLink>
        </nav>

        <!-- actions -->
        <div class="hidden md:flex items-center gap-[12px]">
          <NuxtLink to="/login" class="px-[16px] py-[10px] rounded-[12px] text-[14px] text-gray-700 hover:bg-gray-100">Log In</NuxtLink>
          <NuxtLink to="/get-started" class="px-[20px] py-[10px] rounded-[10px] text-[14px] text-white shadow-sm hover:shadow bg-[#FF66C4] hover:brightness-95">
            Get Started
          </NuxtLink>
        </div>

        <!-- toggle mobile -->
        <button class="md:hidden p-[8px] rounded-[12px] ring-[1px] ring-gray-200" @click="open = !open" aria-label="Toggle menu">
          <svg v-if="!open" xmlns="http://www.w3.org/2000/svg" class="h-[24px] w-[24px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-[24px] w-[24px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
    </div>

    <!-- menu mobile -->
    <div v-if="open" class="md:hidden border-t border-gray-100">
      <div class="px-[16px] py-[12px] space-y-[4px]">
        <NuxtLink
          v-for="l in links"
          :key="l.label"
          :to="l.to"
          class="block py-[8px] text-[15px] text-gray-700 hover:text-[#3D7BFF]"
          @click="closeMenu"
        >{{ l.label }}</NuxtLink>

        <div class="flex gap-[8px] pt-[8px]">
          <NuxtLink to="/login" class="flex-1 px-[16px] py-[10px] rounded-[12px] text-[14px] text-gray-700 ring-[1px] ring-gray-200" @click="closeMenu">Log In</NuxtLink>
          <NuxtLink to="/get-started" class="flex-1 px-[16px] py-[10px] rounded-[12px] text-[14px] text-white bg-[#FF66C4] hover:brightness-95" @click="closeMenu">Get Started</NuxtLink>
        </div>
      </div>
    </div>
  </header>

  <main>
    <slot />
  </main>
</template>
