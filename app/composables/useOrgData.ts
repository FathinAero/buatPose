import type { Org, Device, DeviceEvent } from '~/types/dashboard'

// helper kecil buat format rupiah di FE (biar tabel tetep keliatan cakep)
function formatRupiah(value: number): string {
  // very dumb formatter, backend bisa kirim string langsung nanti kalau mau
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(value)
}

/**
 * List semua org yang user punya akses.
 * Dipakai di breadcrumb dropdown (bagian kiri).
 */
export function useOrgList() {
  // NOTE: dummy data sekarang
  const orgs = ref<Org[]>([
    { id: 'testorg', name: 'Maia Digital Network' },
    { id: 'pose-labs', name: 'Pose Labs' },
    { id: 'studio-alpha', name: 'Studio Alpha' }
  ])

  return { orgs }
}

/**
 * List semua device di dalam 1 org.
 * Dipakai di /dashboard/org/[orgId]/devices
 */
export function useOrgDevices(orgId: string) {
  // nanti backend tinggal ganti ini jadi call API:
  // return useFetch(`/api/org/${orgId}/devices`)
  const devices = ref<Device[]>([
    {
      id: 'win-10-apa',
      name: 'Windows 10 apa',
      email: 'ramizbrain@gmail.com',
      createdAt: '2023-06-23',
      revenue: 200_000_000
    },
    {
      id: 'tangerang-1',
      name: 'Tangerang 1',
      email: 'ramizbrain2@gmail.com',
      createdAt: '2023-06-24',
      revenue: 200_000_000
    },
    {
      id: 'cibis-park',
      name: 'Cibis Park',
      email: 'ramizbrain3@gmail.com',
      createdAt: '2023-06-25',
      revenue: 200_000_000
    },
    {
      id: 'emma-brown',
      name: 'Emma Brown',
      email: 'ramizbrain4@gmail.com',
      createdAt: '2023-06-26',
      revenue: 200_000_000
    },
    {
      id: 'liam-johnson-1',
      name: 'Liam Johnson',
      email: 'ramizbrain5@gmail.com',
      createdAt: '2023-06-23',
      revenue: 200_000_000
    },
    {
      id: 'liam-johnson-2',
      name: 'Liam Johnson',
      email: 'ramizbrain6@gmail.com',
      createdAt: '2023-06-23',
      revenue: 200_000_000
    }
  ])

  // ini data yg udah siap render ke tabel
  const tableRows = computed(() =>
    devices.value.map(d => ({
      id: d.id,
      deviceName: d.name,
      email: d.email,
      createdAt: d.createdAt,
      revenue: formatRupiah(d.revenue)
    }))
  )

  // exposed pagination info
  const pagination = ref({
    from: 1,
    to: devices.value.length,
    total: 32 // dummy total, nanti backend yang kasih
  })

  return {
    devices,     // raw
    tableRows,   // pretty for UI
    pagination
  }
}

/**
 * List semua event untuk 1 device spesifik.
 * Dipakai di /dashboard/org/[orgId]/device/[deviceId]/events
 * Juga dipakai crumb dropdown device.
 */
export function useDeviceEvents(orgId: string, deviceId: string) {
  // dummy data event buat device tsb
  const events = ref<DeviceEvent[]>([
    { id: 'perbasi',      name: 'Perbasi',       createdAt: '2023-06-23', revenue: 200_000_000 },
    { id: 'tangerang-1',  name: 'Tangerang 1',   createdAt: '2023-06-24', revenue: 200_000_000 },
    { id: 'cibis-park',   name: 'Cibis Park',    createdAt: '2023-06-25', revenue: 200_000_000 },
    { id: 'emma-brown',   name: 'Emma Brown',    createdAt: '2023-06-26', revenue: 200_000_000 },
    { id: 'liam-1',       name: 'Liam Johnson',  createdAt: '2023-06-23', revenue: 200_000_000 },
    { id: 'liam-2',       name: 'Liam Johnson',  createdAt: '2023-06-23', revenue: 200_000_000 }
  ])

  const tableRows = computed(() =>
    events.value.map(e => ({
      id: e.id,
      event: e.name,
      createdAt: e.createdAt,
      revenue: formatRupiah(e.revenue)
    }))
  )

  const pagination = ref({
    from: 1,
    to: events.value.length,
    total: 32 // dummy
  })

  return {
    events,
    tableRows,
    pagination
  }
}

/**
 * Semua device dalam org (tanpa event) buat dropdown switcher device.
 * Breadcrumb butuh ini.
 */
export function useDeviceList(orgId: string) {
  // for now sama aja isinya kyk useOrgDevices
  const devices = ref([
    { id: 'win-10-apa', name: 'Windows 10 apa' },
    { id: 'tangerang-1', name: 'Tangerang 1' },
    { id: 'cibis-park',  name: 'Cibis Park' }
  ])

  return { devices }
}

/**
 * Billing entries for an org.
 * Dipakai di /dashboard/org/[orgId]/billings
 * Table kolom: Event / Created At / Revenue
 */
export function useOrgBillings(orgId: string) {
  // dummy data for now
  const billings = ref<DeviceEvent[]>([
    { id: 'perbasi',     name: 'Perbasi',      createdAt: '2023-06-23', revenue: 200_000_000 },
    { id: 'tangerang-1', name: 'Tangerang 1',  createdAt: '2023-06-24', revenue: 200_000_000 },
    { id: 'cibis-park',  name: 'Cibis Park',   createdAt: '2023-06-25', revenue: 200_000_000 },
    { id: 'emma-brown',  name: 'Emma Brown',   createdAt: '2023-06-26', revenue: 200_000_000 },
    { id: 'liam-1',      name: 'Liam Johnson', createdAt: '2023-06-23', revenue: 200_000_000 },
    { id: 'liam-2',      name: 'Liam Johnson', createdAt: '2023-06-23', revenue: 200_000_000 }
  ])

  // data yang udah siap render di tabel
  const tableRows = computed(() =>
    billings.value.map(e => ({
      id: e.id,
      event: e.name,
      createdAt: e.createdAt,
      revenue: formatRupiah(e.revenue)
    }))
  )

  // pagination mock
  const pagination = ref({
    from: 1,
    to: billings.value.length,
    total: 32
  })

  return {
    billings,   // raw data
    tableRows,  // siap display
    pagination
  }
}


/**
 * Account info untuk org ini.
 * Ini dipakai di /dashboard/org/[orgId]/account
 * Form ini editable (kecuali beberapa field yang dikunci).
 */
export function useOrgAccount(orgId: string) {
  // dummy initial data; backend nanti tinggal isi dari DB user/device
  const account = ref({
    deviceName: 'Pedro Duarte',    // nama device / display name
    email: 'john@gmail.com',       // email owner
    status: 'Active',              // status saat ini
    newPassword: '',
    confirmPassword: ''
  })

  // possible status options (bisa diganti backend)
  const statusOptions = ref([
    'Active',
    'Suspended',
    'Disabled'
  ])

  // stub "save" biar backend tinggal ganti logic ini
  async function saveAccount() {
    // nanti backend tinggal ganti ini jadi $fetch('/api/...', { method: 'POST', body: account.value })
    console.log('Saving account payload:', account.value)
  }

  return {
    account,
    statusOptions,
    saveAccount
  }
}