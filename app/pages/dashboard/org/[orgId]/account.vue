<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
})

const { mode } = useDashboardSidebar()
mode.value = 'org'

const route = useRoute()
const orgId = route.params.orgId as string

// ambil data account dari composable
const { account, statusOptions, saveAccount } = useOrgAccount(orgId)

// action tombol submit
async function onSubmit() {
  await saveAccount()
  // nanti mungkin kasih toast sukses dsb
}
</script>

<template>
  <div class="flex flex-col w-full">
    <!-- Header -->
    <header class="flex items-start justify-between pb-4 flex-wrap gap-y-4">
      <h1 class="text-[20px] font-semibold text-[#1F2937] leading-[1.2]">
        Account
      </h1>
      <div class="flex items-center gap-[8px] flex-shrink-0" />
    </header>

    <!-- Card form -->
    <div class="pt-0">
      <div
        class="border border-[#E5E7EB] rounded-[6px] bg-white text-[14px] text-[#1F2937] p-[16px] md:p-[20px] max-w-[700px]"
      >
        <!-- Device Name -->
        <div class="flex flex-col gap-[6px] mb-[16px]">
          <label class="text-[13px] text-[#1F2937] font-medium leading-none">
            Device Name
          </label>
          <input
            v-model="account.deviceName"
            type="text"
            class="border border-[#D1D5DB] rounded-[4px] h-[36px] px-[8px] text-[13px] leading-none text-[#1F2937] bg-white w-full"
          />
        </div>

        <!-- Email (read-only / disabled) -->
        <div class="flex flex-col gap-[6px] mb-[16px]">
          <label class="text-[13px] text-[#1F2937] font-medium leading-none">
            Email
          </label>
          <input
            v-model="account.email"
            type="email"
            disabled
            class="border border-[#D1D5DB] rounded-[4px] h-[36px] px-[8px] text-[13px] leading-none text-[#1F2937] bg-[#F9FAFB] text-[#6B7280] w-full cursor-not-allowed"
          />
        </div>

        <!-- Status -->
        <div class="flex flex-col gap-[6px] mb-[16px]">
          <label class="text-[13px] text-[#1F2937] font-medium leading-none">
            Status
          </label>
          <div class="relative">
            <select
              v-model="account.status"
              class="appearance-none border border-[#D1D5DB] rounded-[4px] h-[36px] pl-[8px] pr-[28px] text-[13px] leading-none text-[#1F2937] bg-white w-full"
            >
              <option v-for="opt in statusOptions" :key="opt" :value="opt">
                {{ opt }}
              </option>
            </select>
            <span
              class="pointer-events-none absolute right-[8px] top-1/2 -translate-y-1/2 text-[10px] text-[#6B7280]"
            >
              ▼
            </span>
          </div>
        </div>

        <!-- New Password -->
        <div class="flex flex-col gap-[6px] mb-[16px]">
          <label class="text-[13px] text-[#1F2937] font-medium leading-none">
            New Password
          </label>
          <input
            v-model="account.newPassword"
            type="password"
            class="border border-[#D1D5DB] rounded-[4px] h-[36px] px-[8px] text-[13px] leading-none text-[#1F2937] bg-white w-full"
          />
        </div>

        <!-- Retype New Password -->
        <div class="flex flex-col gap-[6px] mb-[20px]">
          <label class="text-[13px] text-[#1F2937] font-medium leading-none">
            Retype New Password
          </label>
          <input
            v-model="account.confirmPassword"
            type="password"
            class="border border-[#D1D5DB] rounded-[4px] h-[36px] px-[8px] text-[13px] leading-none text-[#1F2937] bg-white w-full"
          />
        </div>

        <!-- Submit Button -->
        <button
          class="bg-[#111827] hover:bg-black text-white text-[13px] font-medium rounded-[4px] h-[32px] px-[12px] leading-none"
          @click="onSubmit"
        >
          Save changes
        </button>
      </div>
    </div>
  </div>
</template>
