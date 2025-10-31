<script setup lang="ts">
import { useDashboardSidebar } from '~/composables/useDashboardSidebar'

const { mode } = useDashboardSidebar()

const route = useRoute()

// params
const orgIdParam = computed(() => route.params.orgId as string | undefined)
const deviceIdParam = computed(() => route.params.deviceId as string | undefined)

// active flags
const isDevicesPage = computed(() => route.path.includes('/devices'))
const isBillingsPage = computed(() => route.path.includes('/billings'))
const isOrgAccountPage = computed(() => route.path.includes('/account') && !route.path.includes('/device/'))
const isSettingsPage = computed(() => route.path.includes('/settings'))
const isEventsPage = computed(() => route.path.includes('/events'))
const isDeviceAccountPage = computed(() => route.path.includes('/device/') && route.path.includes('/account'))

// dynamic links (org mode)
const linkOrgDevices = computed(() =>
  orgIdParam.value ? `/dashboard/org/${orgIdParam.value}/devices` : '#'
)
const linkOrgBillings = computed(() =>
  orgIdParam.value ? `/dashboard/org/${orgIdParam.value}/billings` : '#'
)
const linkOrgAccount = computed(() =>
  orgIdParam.value ? `/dashboard/org/${orgIdParam.value}/account` : '#'
)
const linkOrgSettings = computed(() =>
  orgIdParam.value ? `/dashboard/org/${orgIdParam.value}/settings` : '#'
)

// dynamic links (device mode)
const linkDeviceEvents = computed(() =>
  orgIdParam.value && deviceIdParam.value
    ? `/dashboard/org/${orgIdParam.value}/device/${deviceIdParam.value}/events`
    : '#'
)
const linkDeviceAccount = computed(() =>
  orgIdParam.value && deviceIdParam.value
    ? `/dashboard/org/${orgIdParam.value}/device/${deviceIdParam.value}/account`
    : '#'
)
</script>

<template>
  <aside class="w-[220px] border-r border-[#E5E7EB] flex flex-col bg-white">
    <nav class="flex-1 px-2 py-3 space-y-[4px]">
      <!-- ORG MODE -->
      <template v-if="mode === 'org'">
        <DashboardNavItem
          icon="💻"
          label="Devices"
          :to="linkOrgDevices"
          :active="isDevicesPage"
        />
        <DashboardNavItem
          icon="💳"
          label="Billings"
          :to="linkOrgBillings"
          :active="isBillingsPage"
        />
        <DashboardNavItem
          icon="👤"
          label="Account"
          :to="linkOrgAccount"
          :active="isOrgAccountPage"
        />
        <DashboardNavItem
          icon="⚙️"
          label="Settings"
          :to="linkOrgSettings"
          :active="isSettingsPage"
        />
      </template>

      <!-- DEVICE MODE -->
      <template v-else>
        <DashboardNavItem
          icon="📅"
          label="Events"
          :to="linkDeviceEvents"
          :active="isEventsPage"
        />
        <DashboardNavItem
          icon="🙍"
          label="Account"
          :to="linkDeviceAccount"
          :active="isDeviceAccountPage"
        />
      </template>
    </nav>

    <div class="p-4">
      <div
        class="w-[28px] h-[28px] rounded-full bg-[#5B21B6] text-white text-[12px] font-medium flex items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.25)]"
      >
        R
      </div>
    </div>
  </aside>
</template>
