<template>
  <div
    class="border border-[#E5E7EB] rounded-[6px] bg-white overflow-hidden text-[14px] text-[#1F2937]"
  >
    <!-- table -->
    <table class="w-full border-collapse">
      <thead class="bg-[#F9FAFB] text-left text-[13px] text-[#4B5563] font-medium border-b border-[#E5E7EB]">
        <tr>
          <th
            v-for="col in columns"
            :key="col.key"
            class="py-[10px] px-[16px] font-medium"
          >
            <div class="flex items-center gap-[4px]">
              <span>{{ col.label }}</span>
              <span class="text-[10px] text-[#9CA3AF] leading-none">▲▼</span>
            </div>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="(row, i) in rows"
          :key="i"
          class="border-b border-[#E5E7EB] last:border-b-0 hover:bg-[#F9FAFB]"
        >
          <td
            v-for="col in columns"
            :key="col.key"
            class="py-[12px] px-[16px] text-[14px] text-[#1F2937] align-top"
          >
            {{ row[col.key] }}
          </td>
        </tr>
      </tbody>
    </table>

    <!-- footer -->
    <div
      class="flex flex-col md:flex-row md:items-center justify-between gap-[12px] text-[12px] text-[#4B5563] px-[16px] py-[12px] bg-white"
    >
      <div class="leading-none">
        Showing <span class="font-medium text-[#1F2937]">{{ pagination.from }}-{{ pagination.to }}</span>
        of <span class="font-medium text-[#1F2937]">{{ pagination.total }}</span> products
      </div>

      <div class="flex items-center gap-[8px] flex-wrap">
        <!-- page size dropdown (static for now) -->
        <div class="relative">
          <select
            class="appearance-none border border-[#D1D5DB] rounded-[6px] py-[6px] pl-[10px] pr-[28px] text-[13px] leading-none text-[#1F2937] bg-white"
          >
            <option>Show 20</option>
            <option>Show 50</option>
            <option>Show 100</option>
          </select>
          <span
            class="pointer-events-none absolute right-[8px] top-1/2 -translate-y-1/2 text-[10px] text-[#6B7280]"
          >▼</span>
        </div>

        <!-- pagination arrows -->
        <div class="flex items-center gap-[4px]">
          <button
            class="border border-[#D1D5DB] rounded-[6px] w-[32px] h-[32px] flex items-center justify-center text-[13px] text-[#1F2937] hover:bg-[#F3F4F6]"
          >
            ‹
          </button>
          <button
            class="border border-[#D1D5DB] rounded-[6px] w-[32px] h-[32px] flex items-center justify-center text-[13px] text-[#1F2937] hover:bg-[#F3F4F6]"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * props:
 * columns: [{ key: 'deviceName', label: 'Device Name' }, ...]
 * rows: [{ deviceName: 'Windows 10 apa', email: '...', createdAt: '2023-06-23', revenue: 'Rp200.000.000' }, ...]
 * pagination: { from: 1, to: 10, total: 32 }
 */

const props = defineProps<{
  columns: { key: string; label: string }[]
  rows: Record<string, any>[]
  pagination: { from: number; to: number; total: number }
}>()
</script>
