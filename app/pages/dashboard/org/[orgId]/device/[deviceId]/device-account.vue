<script setup lang="ts">
definePageMeta({ layout: 'dashboard' })

// Kalau layout kamu pakai "mode" buat switch sidebar, set ke device.
try {
  const { useDashboardSidebar } = await import('~/composables/useDashboardSidebar')
  const { mode } = useDashboardSidebar()
  mode.value = 'device'
} catch {}
  
// dummy data dulu
const form = reactive({
  deviceName: 'Pedro Duarte',
  email: 'john@gmail.com',
  status: 'active',
  newPassword: '',
  retypeNewPassword: '',
  newPin: '',
  retypeNewPin: ''
})

function save() {
  // TODO: ganti dengan call API kamu
  console.log('saving', { ...form })
}
</script>

<template>
  <div class="space-y-4">
    <h1 class="text-[20px] font-semibold text-[#1F2937]">Device Account</h1>

    <div class="rounded-[10px] border border-[#E5E7EB] bg-white overflow-hidden">
      <!-- section: basic info -->
      <div class="p-4 md:p-6 space-y-4">
        <div class="space-y-[10px]">
          <label class="block text-[12px] text-[#6B7280]">Device Name</label>
          <input
            v-model="form.deviceName"
            type="text"
            class="w-full h-[38px] rounded-[8px] border border-[#D1D5DB] px-[12px] text-[14px] text-[#111827] placeholder-[#9CA3AF] outline-none focus:border-[#9CA3AF]"
            placeholder="Device Name"
          />
        </div>

        <div class="space-y-[10px]">
          <label class="block text-[12px] text-[#6B7280]">Email</label>
          <input
            v-model="form.email"
            type="email"
            disabled
            class="w-full h-[38px] rounded-[8px] border border-[#E5E7EB] bg-[#F9FAFB] px-[12px] text-[14px] text-[#6B7280] cursor-not-allowed"
          />
        </div>

        <div class="space-y-[10px]">
          <label class="block text-[12px] text-[#6B7280]">Status</label>
          <div class="relative">
            <select
              v-model="form.status"
              class="w-full h-[38px] appearance-none rounded-[8px] border border-[#D1D5DB] pl-[12px] pr-[32px] text-[14px] text-[#111827] outline-none focus:border-[#9CA3AF] bg-white"
            >
              <option value="active">Active</option>
              <option value="suspended">Suspended</option>
            </select>
            <span class="pointer-events-none absolute right-[10px] top-1/2 -translate-y-1/2 text-[10px] text-[#6B7280]">▼</span>
          </div>
        </div>
      </div>

      <!-- divider -->
      <div class="h-px bg-[#E5E7EB]" />

      <!-- section: change password -->
      <div class="p-4 md:p-6 space-y-4">
        <div class="rounded-[8px] bg-[#F3F4F6] px-[12px] py-[10px] text-[13px] font-medium text-[#1F2937]">
          Change Password
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="space-y-[10px]">
            <label class="block text-[12px] text-[#6B7280]">New Password</label>
            <div class="relative">
              <input
                v-model="form.newPassword"
                type="password"
                placeholder="******"
                class="w-full h-[38px] rounded-[8px] border border-[#D1D5DB] pl-[12px] pr-[38px] text-[14px] outline-none focus:border-[#9CA3AF]"
              />
              <button type="button" class="absolute right-[8px] top-1/2 -translate-y-1/2 w-[28px] h-[28px] grid place-items-center rounded-[6px] hover:bg-[#F3F4F6]">
                <i class="i-lucide-eye text-[16px] text-[#6B7280]" />
              </button>
            </div>
          </div>

          <div class="space-y-[10px]">
            <label class="block text-[12px] text-[#6B7280]">Retype New Password</label>
            <div class="relative">
              <input
                v-model="form.retypeNewPassword"
                type="password"
                placeholder="******"
                class="w-full h-[38px] rounded-[8px] border border-[#D1D5DB] pl-[12px] pr-[38px] text-[14px] outline-none focus:border-[#9CA3AF]"
              />
              <button type="button" class="absolute right-[8px] top-1/2 -translate-y-1/2 w-[28px] h-[28px] grid place-items-center rounded-[6px] hover:bg-[#F3F4F6]">
                <i class="i-lucide-eye text-[16px] text-[#6B7280]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- divider -->
      <div class="h-px bg-[#E5E7EB]" />

      <!-- section: change pin -->
      <div class="p-4 md:p-6 space-y-4">
        <div class="rounded-[8px] bg-[#F3F4F6] px-[12px] py-[10px] text-[13px] font-medium text-[#1F2937]">
          Change PIN
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="space-y-[10px]">
            <label class="block text-[12px] text-[#6B7280]">New PIN</label>
            <div class="relative">
              <input
                v-model="form.newPin"
                type="password"
                inputmode="numeric"
                placeholder="******"
                class="w-full h-[38px] rounded-[8px] border border-[#D1D5DB] pl-[12px] pr-[38px] text-[14px] outline-none focus:border-[#9CA3AF]"
              />
              <button type="button" class="absolute right-[8px] top-1/2 -translate-y-1/2 w-[28px] h-[28px] grid place-items-center rounded-[6px] hover:bg-[#F3F4F6]">
                <i class="i-lucide-eye text-[16px] text-[#6B7280]" />
              </button>
            </div>
          </div>

          <div class="space-y-[10px]">
            <label class="block text-[12px] text-[#6B7280]">Retype New PIN</label>
            <div class="relative">
              <input
                v-model="form.retypeNewPin"
                type="password"
                inputmode="numeric"
                placeholder="******"
                class="w-full h-[38px] rounded-[8px] border border-[#D1D5DB] pl-[12px] pr-[38px] text-[14px] outline-none focus:border-[#9CA3AF]"
              />
              <button type="button" class="absolute right-[8px] top-1/2 -translate-y-1/2 w-[28px] h-[28px] grid place-items-center rounded-[6px] hover:bg-[#F3F4F6]">
                <i class="i-lucide-eye text-[16px] text-[#6B7280]" />
              </button>
            </div>
          </div>
        </div>

        <!-- actions -->
        <div class="pt-2">
          <button
            class="inline-flex items-center justify-center rounded-[8px] bg-black px-[14px] h-[36px] text-white text-[14px] hover:opacity-90"
            @click="save"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
