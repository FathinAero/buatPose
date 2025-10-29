<template>
  <div class="flex flex-wrap items-center gap-[4px] text-[14px] text-[#1F2937] font-medium relative">
    <!-- ORG SEGMENT -->
    <div class="relative">
      <!-- Case A: kita lagi di ORG PAGE (tidak ada deviceId) -->
      <button
        v-if="!devicePage"
        class="flex items-center gap-[6px] hover:text-black transition-colors"
        @click="toggleOrgMenu"
      >
        <span class="flex items-center justify-center w-[18px] h-[18px] rounded-[4px] border border-[#D1D5DB] bg-white text-[10px] text-[#4B5563]">
          🏢
        </span>
        <span class="truncate max-w-[200px]">
          {{ currentOrgName }}
        </span>
        <span class="text-[11px] leading-none text-[#6B7280]">▼</span>
      </button>

      <!-- Case B: kita lagi di DEVICE PAGE (ada deviceId) -->
      <button
        v-else
        class="flex items-center gap-[6px] hover:text-black transition-colors"
        @click="goOrgDevices"
      >
        <span class="flex items-center justify-center w-[18px] h-[18px] rounded-[4px] border border-[#D1D5DB] bg-white text-[10px] text-[#4B5563]">
          🏢
        </span>
        <span class="truncate max-w-[200px] text-left">
          {{ currentOrgName }}
        </span>
        <!-- no arrow on org when on device page -->
      </button>

      <!-- ORG DROPDOWN (hanya boleh muncul di org page) -->
      <div
        v-if="showOrgMenu && !devicePage"
        class="absolute z-20 mt-[4px] w-[220px] bg-white border border-[#E5E7EB] rounded-[6px] shadow-lg p-[4px]"
      >
        <div
          v-for="org in orgs"
          :key="org.id"
          class="px-[8px] py-[8px] text-[13px] text-[#1F2937] hover:bg-[#F3F4F6] rounded-[4px] cursor-pointer flex items-start gap-[6px]"
          @click="selectOrg(org)"
        >
          <div class="flex items-center justify-center w-[18px] h-[18px] rounded-[4px] border border-[#D1D5DB] bg-white text-[10px] text-[#4B5563]">
            🏢
          </div>
          <div class="flex flex-col">
            <span class="font-medium leading-[1.2] text-[#1F2937]">
              {{ org.name }}
            </span>
            <span class="text-[11px] text-[#6B7280] leading-[1.2]">
              {{ org.id }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Slash kalau kita di device page -->
    <span v-if="devicePage" class="text-[#9CA3AF]">/</span>

    <!-- DEVICE SEGMENT -->
    <div v-if="devicePage" class="relative">
      <button
        class="flex items-center gap-[6px] hover:text-black transition-colors"
        @click="toggleDeviceMenu"
      >
        <span class="flex items-center justify-center w-[18px] h-[18px] rounded-[4px] border border-[#D1D5DB] bg-white text-[10px] text-[#4B5563]">
          💻
        </span>
        <span class="truncate max-w-[200px] text-left">
          {{ currentDeviceName }}
        </span>
        <span class="text-[11px] leading-none text-[#6B7280]">▼</span>
      </button>

      <!-- DEVICE DROPDOWN -->
      <div
        v-if="showDeviceMenu"
        class="absolute z-20 mt-[4px] w-[220px] bg-white border border-[#E5E7EB] rounded-[6px] shadow-lg p-[4px]"
      >
        <div
          v-for="dev in deviceList"
          :key="dev.id"
          class="px-[8px] py-[8px] text-[13px] text-[#1F2937] hover:bg-[#F3F4F6] rounded-[4px] cursor-pointer flex flex-col"
          @click="selectDevice(dev)"
        >
          <span class="font-medium leading-[1.2] text-[#1F2937]">
            {{ dev.name }}
          </span>
          <span class="text-[11px] text-[#6B7280] leading-[1.2]">
            {{ dev.id }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// ambil route
const route = useRoute()
const router = useRouter()

// params
const orgId = computed(() => route.params.orgId as string | undefined)
const deviceId = computed(() => route.params.deviceId as string | undefined)

// Are we on device-level page?
const devicePage = computed(() => !!deviceId.value)

// ambil data mock dari composables yang udah kita bikin sebelumnya
// useOrgList(): semua org user
// useDeviceList(orgId): semua device di org tsb
const { orgs } = useOrgList()
const { devices: deviceList } = useDeviceList(orgId.value || '')

// resolve nama org saat ini
const currentOrgName = computed(() => {
  const match = orgs.value.find(o => o.id === orgId.value)
  return match ? match.name : (orgId.value ?? 'Unknown Org')
})

// resolve nama device saat ini
const currentDeviceName = computed(() => {
  const match = deviceList.value.find(d => d.id === deviceId.value)
  return match ? match.name : (deviceId.value ?? 'Device')
})

// dropdown state
const showOrgMenu = ref(false)
const showDeviceMenu = ref(false)

// toggles
function toggleOrgMenu() {
  if (devicePage.value) return // kalau lagi di device page, org segment bukan dropdown
  showOrgMenu.value = !showOrgMenu.value
}
function toggleDeviceMenu() {
  showDeviceMenu.value = !showDeviceMenu.value
}

// klik org di device mode → balik ke /devices
function goOrgDevices() {
  if (!orgId.value) return
  router.push(`/dashboard/org/${orgId.value}/devices`)
}

// pilih org dari dropdown
function selectOrg(org: { id: string }) {
  showOrgMenu.value = false
  router.push(`/dashboard/org/${org.id}/devices`)
}

// pilih device dari dropdown
function selectDevice(dev: { id: string }) {
  if (!orgId.value) return
  showDeviceMenu.value = false
  router.push(`/dashboard/org/${orgId.value}/device/${dev.id}/events`)
}
</script>
