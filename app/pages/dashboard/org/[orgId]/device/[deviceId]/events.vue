<script setup lang="ts">
definePageMeta({ layout: 'dashboard' })

const route = useRoute()
const orgId = route.params.orgId as string
const deviceId = route.params.deviceId as string

const { mode } = useDashboardSidebar()
mode.value = 'device'

// dummy rows dulu biar keliatan UI
const rows = ref([
  { id: '1', event: 'Perbasi',      createdAt: '2023-06-23', revenue: 'Rp200.000.000' },
  { id: '2', event: 'Tangerang 1',  createdAt: '2023-06-24', revenue: 'Rp200.000.000' },
  { id: '3', event: 'Cibis Park',   createdAt: '2023-06-25', revenue: 'Rp200.000.000' },
  { id: '4', event: 'Emma Brown',   createdAt: '2023-06-26', revenue: 'Rp200.000.000' },
  { id: '5', event: 'Liam Johnson', createdAt: '2023-06-23', revenue: 'Rp200.000.000' },
  { id: '6', event: 'Liam Johnson', createdAt: '2023-06-23', revenue: 'Rp200.000.000' },
])

// pagination dummy
const pagination = reactive({ from: 1, to: 10, total: 32 })
</script>

<template>
  <div class="space-y-4">
    <h1 class="text-[20px] font-semibold text-[#1F2937]">Events</h1>

    <div class="rounded-[10px] border border-[#E5E7EB] bg-white overflow-hidden">
      <table class="w-full table-fixed">
        <thead class="bg-[#F9FAFB] text-left text-[13px] text-[#4B5563] border-b border-[#E5E7EB]">
          <tr class="[&>th]:py-[10px] [&>th]:px-[16px] font-medium">
            <th class="w-[50%]">Event</th>
            <th class="w-[25%]">Created At</th>
            <th class="w-[25%]">Revenue</th>
          </tr>
        </thead>
        <tbody class="text-[14px] text-[#1F2937]">
          <tr v-for="r in rows" :key="r.id" class="border-b border-[#E5E7EB] last:border-b-0 hover:bg-[#F9FAFB]">
            <td class="py-[12px] px-[16px]">{{ r.event }}</td>
            <td class="py-[12px] px-[16px]">{{ r.createdAt }}</td>
            <td class="py-[12px] px-[16px]">{{ r.revenue }}</td>
          </tr>
        </tbody>
      </table>

      <!-- footer / pagination (dummy biar mirip mock) -->
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-[12px] text-[12px] text-[#4B5563] px-[16px] py-[12px] bg-white">
        <div class="leading-none">
          Showing
          <span class="font-medium text-[#1F2937]">{{ pagination.from }}-{{ pagination.to }}</span>
          of
          <span class="font-medium text-[#1F2937]">{{ pagination.total }}</span>
          products
        </div>

        <div class="flex items-center gap-[8px] flex-wrap">
          <div class="relative">
            <select class="appearance-none border border-[#D1D5DB] rounded-[6px] py-[6px] pl-[10px] pr-[28px] text-[13px] leading-none text-[#1F2937] bg-white">
              <option>Show 20</option>
              <option>Show 50</option>
              <option>Show 100</option>
            </select>
            <span class="pointer-events-none absolute right-[8px] top-1/2 -translate-y-1/2 text-[10px] text-[#6B7280]">▼</span>
          </div>
          <div class="flex items-center gap-[4px]">
            <button class="border border-[#D1D5DB] rounded-[6px] w-[32px] h-[32px] flex items-center justify-center text-[13px] text-[#1F2937] hover:bg-[#F3F4F6]">‹</button>
            <button class="border border-[#D1D5DB] rounded-[6px] w-[32px] h-[32px] flex items-center justify-center text-[13px] text-[#1F2937] hover:bg-[#F3F4F6]">›</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
