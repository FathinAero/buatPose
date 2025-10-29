<script setup lang="ts">
definePageMeta({
  layout: 'dashboard-root',
})

// dummy data org
const orgs = ref([
  { id: 'testorg', name: 'POSE POST', devicesCount: 2 },
  { id: 'org-2', name: 'Organization Name', devicesCount: 2 },
  { id: 'org-3', name: 'Organization With Long Name Wi..', devicesCount: 2 },
])

const router = useRouter()

function goOrg(org: { id: string }) {
  router.push(`/dashboard/org/${org.id}/devices`)
}

function addOrg() {
  // nanti ini bisa buka modal / route create org
  alert('TODO: Add Organization')
}
</script>

<template>
  <div class="flex flex-col gap-6">
    <!-- Header row -->
    <div class="flex items-start justify-between flex-wrap gap-y-4">
      <h1 class="text-[20px] font-semibold text-[#1F2937] leading-[1.2]">
        Organizations
      </h1>

      <button
        class="flex items-center gap-[6px] bg-[#111827] hover:bg-black text-white text-[13px] font-medium rounded-[6px] h-[32px] px-[10px] leading-none"
        @click="addOrg"
      >
        <span
          class="text-[12px] bg-white text-[#111827] rounded-[4px] w-[18px] h-[18px] flex items-center justify-center font-medium"
        >
          ＋
        </span>
        <span>Add Organization</span>
      </button>
    </div>

    <!-- Cards grid -->
    <div class="flex flex-wrap gap-4">
      <button
        v-for="org in orgs"
        :key="org.id"
        class="text-left border border-[#E5E7EB] rounded-[6px] bg-white hover:bg-[#F9FAFB] w-[260px] p-4 shadow-[0_1px_2px_rgba(0,0,0,0.03)] cursor-pointer"
        @click="goOrg(org)"
      >
        <div class="flex flex-col gap-[8px]">
          <div class="flex items-start gap-[8px] text-[#1F2937]">
            <!-- icon kotak kantor -->
            <div
              class="flex items-center justify-center w-[20px] h-[20px] rounded-[4px] border border-[#D1D5DB] bg-white text-[12px] text-[#4B5563]"
            >
              🏢
            </div>

            <div class="flex flex-col min-w-0">
              <div class="text-[14px] font-medium leading-[1.3] text-[#1F2937] truncate">
                {{ org.name }}
              </div>
              <div class="text-[12px] text-[#6B7280] leading-[1.3]">
                {{ org.devicesCount }} Devices
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  </div>
</template>
