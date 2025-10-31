<template>
  <div class="flex items-center flex-wrap gap-[4px] text-[13px] text-[#4B5563] mb-[8px]">
    <!-- ORG SEGMENT -->
    <div class="relative">
      <!-- Case A: we're on ORG page (no deviceId) -->
      <button
        v-if="!devicePage"
        class="flex items-center gap-[6px] hover:text-[#111827] transition-colors"
        @click="toggleOrgMenu"
      >
        <span class="flex items-center justify-center w-[16px] h-[16px] rounded-[4px] border border-[#D1D5DB] bg-white text-[9px] text-[#4B5563]">
          🏢
        </span>
        <span class="font-medium leading-none truncate max-w-[140px]">
          {{ currentOrgName }}
        </span>
        <span class="text-[11px] leading-none text-[#6B7280]">▼</span>
      </button>

      <!-- Case B: we're on DEVICE page (has deviceId) -->
      <button
        v-else
        class="flex items-center gap-[6px] hover:text-[#111827] transition-colors"
        @click="goOrgDevices"
      >
        <span class="flex items-center justify-center w-[16px] h-[16px] rounded-[4px] border border-[#D1D5DB] bg-white text-[9px] text-[#4B5563]">
          🏢
        </span>
        <span class="font-medium leading-none truncate max-w-[140px] text-left">
          {{ currentOrgName }}
        </span>

      </button>

      <!-- ORG DROPDOWN (only shows when !devicePage) -->
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
            <span class="font-medium leading-none">
              {{ org.name }}
            </span>
            <span class="text-[11px] text-[#6B7280] leading-none">
              {{ org.id }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Slash ONLY if we're on a device page -->
    <span v-if="devicePage" class="text-[#9CA3AF]">/</span>

    <!-- DEVICE SEGMENT -->
    <div v-if="devicePage" class="relative">
      <!-- Device breadcrumb is ALWAYS dropdown on device page -->
      <button
        class="flex items-center gap-[6px] hover:text-[#111827] transition-colors"
        @click="toggleDeviceMenu"
      >
        <span class="flex items-center justify-center w-[16px] h-[16px] rounded-[4px] border border-[#D1D5DB] bg-white text-[9px] text-[#4B5563]">
          💻
        </span>
        <span class="font-medium leading-none truncate max-w-[140px] text-left">
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
          <span class="font-medium leading-none">
            {{ dev.name }}
          </span>
          <span class="text-[11px] text-[#6B7280] leading-none">
            {{ dev.id }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const orgId = computed(() => route.params.orgId as string | undefined)
const deviceId = computed(() => route.params.deviceId as string | undefined)

const devicePage = computed(() => !!deviceId.value)

const { orgs } = useOrgList()

const { devices: deviceList } = useDeviceList(orgId.value || '')

const currentOrgName = computed(() => {
  const found = orgs.value.find(o => o.id === orgId.value)
  return found ? found.name : (orgId.value ?? 'Unknown Org')
})

const currentDeviceName = computed(() => {
  const found = deviceList.value.find(d => d.id === deviceId.value)
  return found ? found.name : (deviceId.value ?? 'Device Name')
})

// dropdown state
const showOrgMenu = ref(false)
const showDeviceMenu = ref(false)

function toggleOrgMenu() {
  if (devicePage.value) return
  showOrgMenu.value = !showOrgMenu.value
}
function toggleDeviceMenu() {
  showDeviceMenu.value = !showDeviceMenu.value
}

function goOrgDevices() {
  if (!orgId.value) return
  router.push(`/dashboard/org/${orgId.value}/devices`)
}

function selectOrg(org: { id: string }) {
  showOrgMenu.value = false
  router.push(`/dashboard/org/${org.id}/devices`)
}

function selectDevice(dev: { id: string }) {
  if (!orgId.value) return
  showDeviceMenu.value = false
  router.push(`/dashboard/org/${orgId.value}/device/${dev.id}/events`)
}
</script>
