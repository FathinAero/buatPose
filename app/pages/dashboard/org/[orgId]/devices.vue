<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
})

const { mode } = useDashboardSidebar()
mode.value = 'org'

const route = useRoute()
const router = useRouter()

const orgId = route.params.orgId as string

// ambil data dummy pake composable (kalau kamu udah bikin useOrgDevices)
const { tableRows, pagination } = useOrgDevices(orgId)

function goRow(row: any) {
  router.push(`/dashboard/org/${orgId}/device/${row.id}/events`)
}
</script>

<template>
  <div class="flex flex-col w-full">
    <!-- Page header (tanpa border-bottom sekarang) -->
    <header class="flex items-start justify-between pb-4 flex-wrap gap-y-4">
      <h1 class="text-[20px] font-semibold text-[#1F2937] leading-[1.2]">
        Devices
      </h1>

      <div class="flex items-center gap-[8px] flex-shrink-0">
        <!-- search -->
        <div class="relative">
          <input
            type="text"
            placeholder="Search device..."
            class="border border-[#D1D5DB] rounded-[6px] h-[36px] pl-[28px] pr-[8px] text-[13px] leading-none text-[#1F2937] placeholder-[#9CA3AF] w-[200px] bg-white"
          />
          <span
            class="absolute left-[8px] top-1/2 -translate-y-1/2 text-[12px] text-[#9CA3AF]"
          >
            🔍
          </span>
        </div>

        <!-- Add Device -->
        <button
          class="flex items-center gap-[6px] bg-[#111827] hover:bg-black text-white text-[13px] font-medium rounded-[6px] h-[36px] px-[10px] leading-none"
        >
          <span
            class="text-[12px] bg-white text-[#111827] rounded-[4px] w-[18px] h-[18px] flex items-center justify-center font-medium"
          >
            ＋
          </span>
          <span>Add Device</span>
        </button>
      </div>
    </header>

    <!-- Table block -->
    <div class="pt-0">
      <div
        class="border border-[#E5E7EB] rounded-[6px] bg-white overflow-hidden text-[14px] text-[#1F2937]"
      >
        <table class="w-full border-collapse">
          <thead
            class="bg-[#F9FAFB] text-left text-[13px] text-[#4B5563] font-medium border-b border-[#E5E7EB]"
          >
            <tr>
              <th class="py-[10px] px-[16px] font-medium">
                <div class="flex items-center gap-[4px]">
                  <span>Device Name</span>
                  <span
                    class="text-[10px] text-[#9CA3AF] leading-none"
                  >▲▼</span>
                </div>
              </th>
              <th class="py-[10px] px-[16px] font-medium">
                <div class="flex items-center gap-[4px]">
                  <span>Email</span>
                  <span
                    class="text-[10px] text-[#9CA3AF] leading-none"
                  >▲▼</span>
                </div>
              </th>
              <th class="py-[10px] px-[16px] font-medium">
                <div class="flex items-center gap-[4px]">
                  <span>Created At</span>
                  <span
                    class="text-[10px] text-[#9CA3AF] leading-none"
                  >▲▼</span>
                </div>
              </th>
              <th class="py-[10px] px-[16px] font-medium">
                <div class="flex items-center gap-[4px]">
                  <span>Revenue</span>
                  <span
                    class="text-[10px] text-[#9CA3AF] leading-none"
                  >▲▼</span>
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="row in tableRows"
              :key="row.id"
              class="border-b border-[#E5E7EB] last:border-b-0 hover:bg-[#F9FAFB] cursor-pointer"
              @click="goRow(row)"
            >
              <td class="py-[12px] px-[16px] text-[14px] text-[#1F2937]">
                {{ row.deviceName }}
              </td>
              <td class="py-[12px] px-[16px] text-[14px] text-[#1F2937]">
                {{ row.email }}
              </td>
              <td class="py-[12px] px-[16px] text-[14px] text-[#1F2937]">
                {{ row.createdAt }}
              </td>
              <td class="py-[12px] px-[16px] text-[14px] text-[#1F2937]">
                {{ row.revenue }}
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Pagination footer -->
        <div
          class="flex flex-col md:flex-row md:items-center justify-between gap-[12px] text-[12px] text-[#4B5563] px-[16px] py-[12px] bg-white"
        >
          <div class="leading-none">
            Showing
            <span
              class="font-medium text-[#1F2937]"
            >{{ pagination.from }}-{{ pagination.to }}</span>
            of
            <span
              class="font-medium text-[#1F2937]"
            >{{ pagination.total }}</span>
            products
          </div>

          <div class="flex items-center gap-[8px] flex-wrap">
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
              >
                ▼
              </span>
            </div>

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
    </div>
  </div>
</template>
