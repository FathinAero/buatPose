  <script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useOrgList, useDeviceList } from '~/composables/useOrgData'

const route = useRoute()
const router = useRouter()

const orgId = computed(() => route.params.orgId as string | undefined)
const deviceId = computed(() => route.params.deviceId as string | undefined)

// kita di konteks device?
const inDeviceCtx = computed(() => !!deviceId.value || route.path.includes('/device/'))

const { orgs } = useOrgList()

// reactive device list per org
const devices = ref<{ id: string; name: string }[]>([])
watchEffect(() => {
  const { devices: list } = useDeviceList(orgId.value || '')
  devices.value = list.value
})

const pretty = (s?: string) =>
  (s || '').replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase())

const orgLabel = computed(() =>
  orgs.value.find(o => o.id === orgId.value)?.name || pretty(orgId.value) || 'Organizations'
)
const deviceLabel = computed(() => {
  const id = deviceId.value
  if (!id) return 'Device'
  return devices.value.find(d => d.id === id)?.name || pretty(id)
})

// dropdown state
const open = ref<{ org: boolean; device: boolean }>({ org: false, device: false })
const orgRef = ref<HTMLElement | null>(null)
const devRef = ref<HTMLElement | null>(null)

function closeAll() { open.value.org = false; open.value.device = false }
function toggle(which: 'org' | 'device') {
  // org dropdown hanya boleh di org-level page
  if (which === 'org' && inDeviceCtx.value) return
  open.value[which] = !open.value[which]
  if (which === 'org') open.value.device = false
  if (which === 'device') open.value.org = false
}

function goOrgDevices() {
  if (!orgId.value) return
  closeAll()
  router.push(`/dashboard/org/${orgId.value}/devices`)
}
function selectOrg(id: string) {
  closeAll()
  router.push(`/dashboard/org/${id}/devices`)
}
function selectDevice(id: string) {
  if (!orgId.value) return
  closeAll()
  router.push(`/dashboard/org/${orgId.value}/device/${id}/events`)
}

// close on outside / esc
function onDocClick(e: MouseEvent) {
  const t = e.target as Node
  if (orgRef.value?.contains(t) || devRef.value?.contains(t)) return
  closeAll()
}
function onEsc(e: KeyboardEvent) { if (e.key === 'Escape') closeAll() }

onMounted(() => {
  document.addEventListener('click', onDocClick)
  document.addEventListener('keydown', onEsc)
})
onUnmounted(() => {
  document.removeEventListener('click', onDocClick)
  document.removeEventListener('keydown', onEsc)
})

// tutup tiap route berubah
watch(() => route.fullPath, closeAll)
</script>

<template>
  <nav class="min-w-0">
    <ol class="flex items-center gap-2 min-w-0 text-[14px]">
      <!-- ORG -->
      <li v-if="orgId" class="flex items-center gap-2 min-w-0">
        <div ref="orgRef" class="relative inline-flex items-center min-w-0">
          <button
            type="button"
            class="inline-flex items-center gap-1 hover:underline min-w-0"
            :title="orgLabel"
            @click="inDeviceCtx ? goOrgDevices() : toggle('org')"
          >
            <span class="truncate max-w-[55vw] sm:max-w-[40vw] lg:max-w-[30vw]">
              {{ orgLabel }}
            </span>
            <!-- caret hanya muncul di org-level page -->
            <svg
              v-if="!inDeviceCtx && orgs.length > 1"
              viewBox="0 0 20 20" class="h-4 w-4 text-[#6B7280]" fill="none" aria-hidden="true">
              <path d="M6 8l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>

          <!-- menu org: hanya ketika bukan device context -->
          <div
            v-if="open.org && !inDeviceCtx"
            class="absolute left-0 top-full mt-1 z-[70] w-60 rounded-md border border-[#E5E7EB] bg-white shadow-lg"
          >
            <button
              v-for="o in orgs"
              :key="o.id"
              class="w-full text-left px-3 py-2 hover:bg-gray-50 truncate"
              @click="selectOrg(o.id)"
              :title="o.name"
            >
              {{ o.name }}
            </button>
          </div>
        </div>

        <span class="text-[#9CA3AF] select-none">/</span>
      </li>

      <!-- DEVICE (muncul kalau di device context) -->
      <li v-if="inDeviceCtx" class="flex items-center gap-2 min-w-0">
        <div ref="devRef" class="relative inline-flex items-center min-w-0">
          <button
            type="button"
            class="inline-flex items-center gap-1 hover:underline min-w-0"
            :title="deviceLabel"
            @click="toggle('device')"
          >
            <span class="truncate max-w-[55vw] sm:max-w-[40vw] lg:max-w-[30vw]">{{ deviceLabel }}</span>
            <svg
              v-if="devices.length > 1"
              viewBox="0 0 20 20" class="h-4 w-4 text-[#6B7280]" fill="none" aria-hidden="true">
              <path d="M6 8l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>

          <div
            v-if="open.device"
            class="absolute left-0 top-full mt-1 z-[70] w-64 rounded-md border border-[#E5E7EB] bg-white shadow-lg"
          >
            <button
              v-for="d in devices"
              :key="d.id"
              class="w-full text-left px-3 py-2 hover:bg-gray-50 truncate"
              @click="selectDevice(d.id)"
              :title="d.name"
            >
              {{ d.name }}
            </button>
          </div>
        </div>
      </li>

      <!-- Fallback root -->
      <li v-if="!orgId">
        <button class="hover:underline" @click="router.push('/dashboard')">Organizations</button>
      </li>
    </ol>
  </nav>
</template>
