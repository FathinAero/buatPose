<script setup lang="ts">
import { useDashboardSidebar } from '~/composables/useDashboardSidebar'

const { mode } = useDashboardSidebar()
const route = useRoute()

const orgId = computed(() => route.params.orgId as string | undefined)
const deviceId = computed(() => route.params.deviceId as string | undefined)

// Sidebar items kalau lagi di context ORGANIZATION
const itemsOrg = computed(() => {
  return [
    {
      label: 'Devices',
      icon: 'i-heroicons-computer-desktop',
      to: orgId.value ? `/dashboard/org/${orgId.value}/devices` : '#',
      active: route.path.startsWith(`/dashboard/org/${orgId.value}/devices`)
    },
    {
      label: 'Billings',
      icon: 'i-heroicons-credit-card',
      to: orgId.value ? `/dashboard/org/${orgId.value}/billings` : '#',
      active: route.path.startsWith(`/dashboard/org/${orgId.value}/billings`)
    },
    {
      label: 'Account',
      icon: 'i-heroicons-user',
      to: orgId.value ? `/dashboard/org/${orgId.value}/account` : '#',
      active: route.path.startsWith(`/dashboard/org/${orgId.value}/account`)
    },
    {
      label: 'Settings',
      icon: 'i-heroicons-cog-6-tooth',
      to: orgId.value ? `/dashboard/org/${orgId.value}/settings` : '#',
      active: route.path.startsWith(`/dashboard/org/${orgId.value}/settings`)
    }
  ]
})

// Sidebar items kalau lagi di context DEVICE
const itemsDevice = computed(() => {
  return [
    {
      label: 'Events',
      icon: 'i-heroicons-calendar-days',
      to:
        orgId.value && deviceId.value
          ? `/dashboard/org/${orgId.value}/device/${deviceId.value}/events`
          : '#',
      active: route.path.startsWith(
        `/dashboard/org/${orgId.value}/device/${deviceId.value}/events`
      )
    },
    {
      label: 'Account',
      icon: 'i-heroicons-user',
      to:
        orgId.value && deviceId.value
          ? `/dashboard/org/${orgId.value}/device/${deviceId.value}/account`
          : '#',
      active: route.path.startsWith(
        `/dashboard/org/${orgId.value}/device/${deviceId.value}/account`
      )
    }
  ]
})

// Pilih list mana yang dipakai
const navItems = computed(() => {
  return mode.value === 'device' ? itemsDevice.value : itemsOrg.value
})

</script>

<template>
  <aside class="w-[220px] border-r border-[#E5E7EB] flex flex-col bg-white">
    <!-- NAV -->
    <UNavigationMenu
      :items="navItems"
      orientation="vertical"
      color="neutral"
      variant="link"
      class="flex-1 px-2 py-3 space-y-[4px]"
    >

      <template #item="{ item }">
        <NuxtLink
          :to="item.to"
          class="flex items-center gap-[8px] h-[40px] px-[12px] text-[14px] rounded-[6px] border transition-colors w-full"
          :class="item.active
            ? 'bg-[#F4F4F5] border-[#E4E4E7] cursor-default text-[#1F2937]'
            : 'border-transparent hover:bg-[#F4F4F5] hover:border-[#E4E4E7] cursor-pointer text-[#1F2937]'"
        >
          <!-- icon -->
          <span class="flex items-center justify-center w-[20px] h-[20px]">
            <UIcon
              :name="item.icon"
              class="w-[20px] h-[20px] text-[#1F2937]"
            />
          </span>

          <!-- label -->
          <span class="leading-none text-[#1F2937] truncate">
            {{ item.label }}
          </span>
        </NuxtLink>
      </template>
    </UNavigationMenu>

    <!-- USER AVATAR -->
    <div class="p-4">
      <UAvatar
        text="R"
        size="sm"
        class="shadow-[0_4px_8px_rgba(0,0,0,0.25)] bg-[#5B21B6] text-white font-medium"
      />
    </div>
  </aside>
</template>
    