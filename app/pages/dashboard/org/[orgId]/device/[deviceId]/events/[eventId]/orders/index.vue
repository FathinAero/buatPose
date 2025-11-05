<script setup lang="ts">
definePageMeta({ layout: 'dashboard' })

// ------- data dummy -------
type Row = { id:string; date:string; time:string; frame:number; reprint:number; amount:number }

const allRows = ref<Row[]>([
  { id:'1', date:'2024-01-23', time:'15:00', frame:2, reprint:0, amount:400000 },
  { id:'2', date:'2024-01-23', time:'15:00', frame:2, reprint:1, amount:400000 },
  { id:'3', date:'2024-01-23', time:'15:00', frame:3, reprint:3, amount:400000 },
  { id:'4', date:'2024-01-23', time:'15:00', frame:1, reprint:1, amount:400000 },
  { id:'5', date:'2024-01-23', time:'15:00', frame:1, reprint:1, amount:400000 },
  { id:'6', date:'2024-01-23', time:'15:00', frame:1, reprint:1, amount:400000 },
])

const route = useRoute()
const router = useRouter()

function openOrder(id: string) {
  router.push(`${route.path.replace(/\/$/, '')}/${id}`)
}

function onRowKey(e: KeyboardEvent, id: string) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    openOrder(id)
  }
}

// ------- state UI -------
const q = ref('')                          // search
const dr = reactive<{start:string|null,end:string|null}>({ start: null, end: null }) // date range
const showDate = ref(false)

const pageSize = ref(20)
const page = ref(1)

// ------- formatters -------
const fIDR = new Intl.NumberFormat('id-ID',{ style:'currency', currency:'IDR', minimumFractionDigits:0, maximumFractionDigits:0 })
const fDate = (iso:string) =>
  new Date(iso + 'T00:00:00').toLocaleDateString('en-GB',{ day:'2-digit', month:'short', year:'numeric' }).replace(',', '')
const fTime = (t:string) => t.replace(':', '.') + ' WIB'

// ------- filters & pagination -------
const filtered = computed(() => {
  const term = q.value.trim().toLowerCase()

  const start = dr.start ? new Date(dr.start + 'T00:00:00') : null
  const end   = dr.end   ? new Date(dr.end   + 'T23:59:59.999') : null

  return allRows.value.filter(r => {
    const d = new Date(r.date + 'T00:00:00')
    if (start && d < start) return false
    if (end && d > end) return false

    if (!term) return true
    return [
      fDate(r.date),
      fTime(r.time),
      String(r.frame),
      String(r.reprint),
      fIDR.format(r.amount)
    ].some(v => v.toLowerCase().includes(term))
  })
})

// ------- popover UX -------
const popEl = ref<HTMLElement | null>(null)
function onDocClick(e: MouseEvent) {
  if (!showDate.value) return
  const t = e.target as Node
  if (popEl.value && !popEl.value.contains(t)) showDate.value = false
}
function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') showDate.value = false
}
onMounted(() => {
  document.addEventListener('click', onDocClick)
  document.addEventListener('keydown', onKey)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', onDocClick)
  document.removeEventListener('keydown', onKey)
})


watch([q, () => dr.start, () => dr.end], () => page.value = 1)

const total = computed(() => filtered.value.length)
const pageFrom = computed(() => total.value ? (page.value - 1) * pageSize.value + 1 : 0)
const pageTo = computed(() => Math.min(page.value * pageSize.value, total.value))
const totalPages = computed(() => Math.max(1, Math.ceil(total.value / pageSize.value)))

const rows = computed(() => {
  const start = (page.value - 1) * pageSize.value
  return filtered.value.slice(start, start + pageSize.value)
})

function prevPage(){ page.value = Math.max(1, page.value - 1) }
function nextPage(){ page.value = Math.min(totalPages.value, page.value + 1) }
watch(pageSize, () => { page.value = 1 })

const dateLabel = computed(() => {
  if (!dr.start && !dr.end) return 'Pick date'
  const s = dr.start ? fDate(dr.start) : '…'
  const e = dr.end   ? fDate(dr.end)   : '…'
  return `${s} - ${e}`
})

function clearDate(){ dr.start = dr.end = null; showDate.value = false }
function applyDate(){ showDate.value = false }
</script>

<template>
  <div class="space-y-4">
    <!-- header row -->
    <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <h1 class="text-[20px] font-semibold text-[#1F2937]">Orders</h1>

      <div class="flex items-center gap-2">
        <!-- search -->
        <div class="relative">
          <i class="i-lucide-search absolute left-[10px] top-1/2 -translate-y-1/2 text-[16px] text-[#9CA3AF]" />
          <input
            v-model="q"
            type="text"
            aria-label="Search orders"
            placeholder="Search orders..."
            class="h-[36px] w-[200px] md:w-[220px] rounded-[8px] border border-[#D1D5DB] pl-[34px] pr-[10px] text-[13px] text-[#111827] outline-none focus:border-[#9CA3AF]"
          />
        </div>

        <!-- date range popover (native date inputs) -->
        <div class="relative">
          <button
            @click="showDate = !showDate"
            type="button"
            class="h-[36px] rounded-[8px] border border-[#D1D5DB] px-[10px] text-[13px] text-[#111827] hover:bg-[#F9FAFB] inline-flex items-center gap-[8px]"
          >
            <i class="i-lucide-calendar" />
            <span>{{ dateLabel }}</span>
          </button>

          <div
            v-if="showDate"
            ref="popEl"
            class="absolute right-0 z-50 mt-2 w-[260px] rounded-[10px] border border-[#E5E7EB] bg-white p-3 shadow"
          >
            <div class="space-y-3">
              <div class="space-y-1">
                <div class="text-[12px] text-[#6B7280]">Start date</div>
                <input v-model="dr.start" type="date" class="w-full h-[36px] rounded-[8px] border border-[#D1D5DB] px-[10px] text-[13px]" />
              </div>
              <div class="space-y-1">
                <div class="text-[12px] text-[#6B7280]">End date</div>
                <input v-model="dr.end" type="date" class="w-full h-[36px] rounded-[8px] border border-[#D1D5DB] px-[10px] text-[13px]" />
              </div>
              <div class="flex justify-between gap-2">
                <button @click="clearDate" class="h-[32px] px-3 rounded-[8px] border border-[#D1D5DB] text-[13px]">Clear</button>
                <button @click="applyDate" class="h-[32px] px-3 rounded-[8px] bg-black text-white text-[13px]">Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- KPI cards -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
      <div class="rounded-[10px] border border-[#E5E7EB] bg-white p-4">
        <div class="text-[12px] text-[#6B7280]">Total Orders</div>
        <div class="text-[28px] leading-tight font-semibold text-[#111827] mt-[2px]">42</div>
        <div class="text-[12px] text-[#6B7280] mt-[2px]">Rp400.000</div>
      </div>
      <div class="rounded-[10px] border border-[#E5E7EB] bg-white p-4">
        <div class="text-[12px] text-[#6B7280]">Paid Orders</div>
        <div class="text-[28px] leading-tight font-semibold text-[#111827] mt-[2px]">42</div>
        <div class="text-[12px] text-[#6B7280] mt-[2px]">Rp400.000</div>
      </div>
      <div class="rounded-[10px] border border-[#E5E7EB] bg-white p-4">
        <div class="text-[12px] text-[#6B7280]">Failed orders</div>
        <div class="text-[28px] leading-tight font-semibold text-[#111827] mt-[2px]">120</div>
        <div class="text-[12px] text-[#6B7280] mt-[2px]">Rp500.000</div>
      </div>
      <div class="rounded-[10px] border border-[#E5E7EB] bg-white p-4">
        <div class="text-[12px] text-[#6B7280]">Refunded</div>
        <div class="text-[28px] leading-tight font-semibold text-[#111827] mt-[2px]">120</div>
        <div class="text-[12px] text-[#6B7280] mt-[2px]">Rp500.000</div>
      </div>
    </div>

    <!-- table -->
    <div class="rounded-[10px] border border-[#E5E7EB] bg-white overflow-hidden">
      <table class="w-full table-fixed">
        <thead class="bg-[#F9FAFB] text-left text-[13px] text-[#4B5563] border-b border-[#E5E7EB]">
          <tr class="[&>th]:py-[10px] [&>th]:px-[16px] font-medium">
            <th class="w-[25%]">Created At</th>
            <th class="w-[20%]">Time</th>
            <th class="w-[20%]">Total Frame</th>
            <th class="w-[20%]">Total Reprint</th>
            <th class="w-[15%] text-right pr-[20px]">Amount</th>
          </tr>
        </thead>
        <tbody class="text-[14px] text-[#1F2937]">
         <tr v-if="rows.length === 0">
                <td colspan="5" class="py-[28px] px-[16px] text-center text-[#6B7280]">
                    No orders found for this filter.
                </td>
         </tr>
          <tr v-for="r in rows" 
          :key="r.id" 
          @click="openOrder(r.id)"
          @keydown="onRowKey($event, r.id)"
          tabindex="0"
          role="button"
          class="cursor-pointer border-b border-[#E5E7EB] last:border-b-0 hover:bg-[#F9FAFB] focus:bg-[#F3F4F6] focus:outline-none">
            <td class="py-[12px] px-[16px]">{{ fDate(r.date) }}</td>
            <td class="py-[12px] px-[16px]">{{ fTime(r.time) }}</td>
            <td class="py-[12px] px-[16px]">{{ r.frame }}</td>
            <td class="py-[12px] px-[16px]">{{ r.reprint }}</td>
            <td class="py-[12px] px-[16px] text-right pr-[20px]">{{ fIDR.format(r.amount) }}</td>
          </tr>
        </tbody>
      </table>

      <!-- footer -->
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-[12px] text-[12px] text-[#4B5563] px-[16px] py-[12px] bg-white">
        <div class="leading-none">
          Showing
          <span class="font-medium text-[#1F2937]">{{ pageFrom }}-{{ pageTo }}</span>
          of
          <span class="font-medium text-[#1F2937]">{{ total }}</span>
          orders
        </div>

        <div class="flex items-center gap-[8px] flex-wrap">
          <div class="relative">
            <select v-model.number="pageSize" class="appearance-none border border-[#D1D5DB] rounded-[6px] py-[6px] pl-[10px] pr-[28px] text-[13px] leading-none text-[#1F2937] bg-white">
              <option :value="20">Show 20</option>
              <option :value="50">Show 50</option>
              <option :value="100">Show 100</option>
            </select>
            <span class="pointer-events-none absolute right-[8px] top-1/2 -translate-y-1/2 text-[10px] text-[#6B7280]">▼</span>
          </div>
          <div class="flex items-center gap-[4px]">
            <button @click="prevPage" :disabled="page===1" class="border border-[#D1D5DB] rounded-[6px] w-[32px] h-[32px] grid place-items-center text-[13px] text-[#1F2937] hover:bg-[#F3F4F6] disabled:opacity-40">‹</button>
            <button @click="nextPage" :disabled="page===totalPages" class="border border-[#D1D5DB] rounded-[6px] w-[32px] h-[32px] grid place-items-center text-[13px] text-[#1F2937] hover:bg-[#F3F4F6] disabled:opacity-40">›</button>
            <button disabled class="border border-[#D1D5DB] rounded-[6px] w-[32px] h-[32px] grid place-items-center text-[18px] text-[#6B7280]">···</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
