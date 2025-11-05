<script setup lang="ts">
definePageMeta({ layout: 'dashboard' })

import { useRouter, useRoute } from 'vue-router'
import { useOrgDevices } from '~/composables/useOrgData'
import { useDashboardSidebar } from '~/composables/useDashboardSidebar'

const route = useRoute()
const router = useRouter()

const mobileOpen = ref(false)
const orgId = computed(() => String(route.params.orgId ?? ''))
const menuItems = computed(() => [
  { label: 'Devices',  icon: 'i-lucide-monitor', to: `/dashboard/org/${orgId.value}/devices` },
  { label: 'Billings', icon: 'i-lucide-banknote', to: `/dashboard/org/${orgId.value}/billings` },
])

const { mode } = useDashboardSidebar()
mode.value = 'org'


// dummy data dari composable
const { tableRows, pagination } = useOrgDevices(orgId.value)

// search
const q = ref('')
const rows = computed(() => {
  const kw = q.value.trim().toLowerCase()
  if (!kw) return tableRows.value
  return tableRows.value.filter(r =>
    r.deviceName.toLowerCase().includes(kw) ||
    r.email.toLowerCase().includes(kw)
  )
})

function addDevice() {

  alert('TODO: Add Device')
}

function goDevice(id: string) {
  router.push(`/dashboard/org/${orgId.value}/device/${id}/events`)
}
</script>

<template>
  <div class="space-y-4">
    
    <!-- header row: title + actions -->
    <div class="flex flex-wrap items-center justify-between gap-3">
      <h1 class="text-[20px] font-semibold text-[#1F2937]">Devices</h1>

      <div class="flex items-center gap-2">
        <div class="relative">
          <input
            v-model="q"
            type="text"
            placeholder="Search device..."
            class="h-[36px] w-[220px] rounded-[6px] border border-[#E5E7EB] px-3 text-[14px] outline-none focus:ring-[1.5px] focus:ring-[#111827]"
          />
          <span class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]">🔎</span>
        </div>

        <button
          class="h-[36px] rounded-[6px] bg-[#111827] px-3 text-[13px] font-medium text-white hover:bg-black"
          @click="addDevice"
        >
          Add Device
        </button>
      </div>
    </div>

    <!-- table card -->
    <div class="overflow-hidden rounded-[8px] border border-[#E5E7EB] bg-white">
      <table class="min-w-full table-fixed">
        <thead class="bg-[#F9FAFB] text-left text-[13px] text-[#111827]">
          <tr class="[&>th]:px-4 [&>th]:py-3">
            <th class="w-[40%]">Device Name</th>
            <th class="w-[28%]">Email</th>
            <th class="w-[16%]">Created At</th>
            <th class="w-[16%]">Revenue</th>
          </tr>
        </thead>

        <tbody class="text-[14px] text-[#1F2937]">
          <tr
            v-for="r in rows"
            :key="r.id"
            class="border-t border-[#F3F4F6] hover:bg-[#F9FAFB]"
          >
            <td class="px-4 py-3">
              <button class="text-left hover:underline" @click="goDevice(r.id)">
                {{ r.deviceName }}
              </button>
            </td>
            <td class="px-4 py-3">{{ r.email }}</td>
            <td class="px-4 py-3">{{ r.createdAt }}</td>
            <td class="px-4 py-3">{{ r.revenue }}</td>
          </tr>

          <tr v-if="rows.length === 0" class="border-t border-[#F3F4F6]">
            <td class="px-4 py-10 text-center text-[#6B7280]" colspan="4">No data</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- pagination text -->
    <p class="text-[12px] text-[#6B7280]">
      Showing {{ pagination.from }}-{{ rows.length }} of {{ pagination.total }} products
    </p>
  </div>
</template>
