<script setup lang="ts">
definePageMeta({
  layout: 'dashboard-root',
})

const orgs = ref([
  { id: 'testorg', name: 'POSE POST', devicesCount: 2 },
  { id: 'org-2', name: 'Organization Name', devicesCount: 2 },
  { id: 'org-3', name: 'Organization With Long Name', devicesCount: 2 },
])

const router = useRouter()
const goOrg = (org: { id: string }) => router.push(`/dashboard/org/${org.id}/devices`)
const addOrg = () => {/* TODO: open modal / route create */}
</script>

<template>
  <div class="space-y-4">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <h1 class="text-[20px] font-semibold text-[#1F2937]">Organizations</h1>

      <!-- Desktop action -->
      <button
        class="hidden md:inline-flex items-center gap-2 h-[36px] rounded-[8px] px-[12px] bg-black text-white text-[13px]"
        @click="addOrg"
      >
        <i class="i-lucide-plus h-4 w-4" />
        Add Organization
      </button>
    </div>

    <!-- Mobile action -->
    <div class="md:hidden">
      <div class="h-[44px] flex items-center justify-end border-t border-[#F3F4F6]">
        <button
          class="inline-flex items-center gap-2 h-[36px] rounded-[8px] px-[12px] bg-black text-white text-[13px]"
          @click="addOrg"
        >
          <i class="i-lucide-plus h-4 w-4" />
          Add
        </button>
      </div>
    </div>

    <!-- Cards grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <button
        v-for="org in orgs"
        :key="org.id"
        class="text-left rounded-[10px] border border-[#E5E7EB] bg-white p-4 hover:bg-[#FAFAFA] hover:border-[#D1D5DB]"
        @click="goOrg(org)"
      >
        <div class="flex items-start gap-3">
          <div class="inline-grid place-items-center h-8 w-8 rounded-md border border-[#E5E7EB]">
            <i class="i-lucide-building-2 h-4 w-4 text-[#6B7280]" />
          </div>
          <div class="min-w-0">
            <div class="truncate text-[15px] font-medium text-[#111827]">
              {{ org.name }}
            </div>
            <div class="mt-0.5 text-[12px] text-[#6B7280]">
              {{ org.devicesCount }} Devices
            </div>
          </div>
        </div>
      </button>
    </div>
  </div>
</template>
