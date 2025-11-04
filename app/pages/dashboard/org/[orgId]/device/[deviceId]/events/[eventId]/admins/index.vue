<script setup lang="ts">
definePageMeta({ layout: 'dashboard' })
try { (await import('~/composables/useDashboardSidebar')).useDashboardSidebar().mode.value = 'event' } catch {}

type Admin = { id:string; name:string; email:string; role:Role; createdAt:string; status:'active'|'inactive' }

const admins = ref<Admin[]>([
  // active
  { id:'a1', name:'Hafizh Zulfikar', email:'hafizh@maiadigital.id', role:'Event Admin', createdAt:'2025-08-23', status:'active' },
  { id:'a2', name:'Fahmi',           email:'fahmi@maiadigital.id',  role:'Event Admin', createdAt:'2025-08-23', status:'active' },
  { id:'a3', name:'Popo',            email:'popo@maiadigital.id',   role:'Partner',     createdAt:'2025-08-23', status:'active' },
  // inactive
  { id:'i1', name:'Budi', email:'budi@maiadigital.id', role:'Event Admin', createdAt:'2025-07-10', status:'inactive' },
  { id:'i2', name:'Sari', email:'sari@maiadigital.id', role:'Partner',     createdAt:'2025-06-02', status:'inactive' },
])

/* Tabs */
const adminTab = ref<number | string>(0) // 0=Active, 1=Inactive
const tabs = [{ label: 'Active' }, { label: 'Inactive' }]
const tabNum = computed(() => Number(adminTab.value))

const filtered = computed(() =>
  admins.value.filter(a => a.status === (tabNum.value === 0 ? 'active' : 'inactive'))
)

// === Pagination ===
const page = ref(1)
const pageSize = ref(20)
const pageSizes = [10, 20, 50, 100]

const pageCount = computed(() =>
  Math.max(1, Math.ceil(filtered.value.length / pageSize.value))
)

watch([filtered, pageSize], () => {
  // reset / clamp kalau data/tab berubah
  page.value = Math.min(page.value, pageCount.value)
})
watch(() => tabNum.value, () => { page.value = 1 })

const paginated = computed(() => {
  const start = (page.value - 1) * pageSize.value
  return filtered.value.slice(start, start + pageSize.value)
})

const rangeStart = computed(() =>
  filtered.value.length ? (page.value - 1) * pageSize.value + 1 : 0
)
const rangeEnd = computed(() =>
  Math.min(page.value * pageSize.value, filtered.value.length)
)

const fDate = (iso: string) =>
  new Date(iso + 'T00:00:00').toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).replace(',', '')

// --- Add Admin (modal custom + tabs di dalam modal)
const showAdd = ref(false)
const modalTab = ref<number | string>(0)   // 0 = Create New, 1 = Assign Existing

type Role = 'Event Admin' | 'Partner'
const roleOptions: Role[] = ['Event Admin', 'Partner']

const formCreate = reactive({
  name: 'Pedro Duarte',
  email: 'john@gmail.com',
  role: 'Event Admin' as Role,
  password: ''
})
const formAssign = reactive({
  email: '',
  role: 'Event Admin' as Role
})

function openAdd() {
  modalTab.value = 0
  formCreate.name = 'Pedro Duarte'
  formCreate.email = 'john@gmail.com'
  formCreate.role = 'Event Admin'
  formCreate.password = ''
  formAssign.email = ''
  formAssign.role = 'Event Admin'
  showAdd.value = true
}

function saveAdd() {
  // FE only untuk sekarang
  showAdd.value = false
}

// (opsional) Esc to close + lock scroll saat modal terbuka
let onKey: ((e: KeyboardEvent) => void) | null = null
watch(showAdd, (v) => {
  document.documentElement.classList.toggle('overflow-hidden', v)
  if (v) {
    onKey = (e) => { if (e.key === 'Escape') showAdd.value = false }
    window.addEventListener('keydown', onKey)
  } else if (onKey) {
    window.removeEventListener('keydown', onKey)
    onKey = null
  }
})
onBeforeUnmount(() => {
  document.documentElement.classList.remove('overflow-hidden')
  if (onKey) window.removeEventListener('keydown', onKey)
})
</script>

<template>
  <div class="space-y-4">
    <h1 class="text-[20px] font-semibold text-[#1F2937]">Event Admins</h1>
    <div class="rounded-[10px] border border-[#E5E7EB] bg-white p-4 md:p-6">
      <div class="relative min-h-[36px]">
        <div class="w-[220px]">
          <UTabs
            v-model="adminTab"
            :items="[{ label: 'Active' }, { label: 'Inactive' }]"
            variant="pill"
            color="neutral"
            :ui="{
              root: 'inline-flex w-full',
              list: 'inline-flex w-full rounded-lg bg-[#F3F4F6] p-1',
              indicator: 'absolute z-0 rounded-md bg-white shadow transition-all duration-200',
              trigger: 'relative z-10 flex-1 justify-center rounded-md px-0 py-1.5 text-sm text-[#6B7280] data-[state=active]:text-[#111827]',
              content: 'hidden'
            }"
          />
        </div>

        <button
          type="button"
          @click="openAdd"
          class="absolute right-0 top-0 inline-flex items-center gap-2 h-[36px] rounded-[8px] px-[12px] bg-black text-white text-[13px] hover:opacity-90"
        >
          <i class="i-lucide-plus"></i>
          Add Admin
        </button>
      </div>
      <!-- Table -->
      <div class="mt-4 rounded-[10px] border border-[#E5E7EB] overflow-hidden">
        <table class="w-full table-fixed">
          <thead class="bg-[#F9FAFB] text-left text-[13px] text-[#4B5563] border-b border-[#E5E7EB]">
            <tr class="[&>th]:py-[10px] [&>th]:px-[16px] font-medium">
              <th class="w-[28%]">Name</th>
              <th class="w-[28%]">email</th>
              <th class="w-[18%]">Role</th>
              <th class="w-[18%]">Created at</th>
              <th class="w-[8%]">Action</th>
            </tr>
          </thead>
          <tbody class="text-[14px] text-[#1F2937]">
            <tr v-for="a in paginated" :key="a.id" class="border-b border-[#E5E7EB] last:border-b-0 hover:bg-[#F9FAFB]">
              <td class="py-[12px] px-[16px]">{{ a.name }}</td>
              <td class="py-[12px] px-[16px]">{{ a.email }}</td>
              <td class="py-[12px] px-[16px]">{{ a.role }}</td>
              <td class="py-[12px] px-[16px]">{{ fDate(a.createdAt) }}</td>
              <td class="py-[12px] px-[16px]">
                <button type="button" class="w-[28px] h-[28px] grid place-items-center rounded hover:bg-[#F3F4F6]">
                  <i class="i-lucide-more-horizontal text-[18px] text-[#6B7280]" />
                </button>
              </td>
            </tr>
            <tr v-if="filtered.length === 0">
              <td colspan="5" class="py-[28px] px-[16px] text-center text-[#6B7280]">No admins.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Footer controls (match Orders, no "…") -->
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-[12px] text-[12px] text-[#4B5563] px-[16px] py-[12px] bg-white">
        <div class="leading-none">
          Showing
          <span class="font-medium text-[#1F2937]">{{ rangeStart }}-{{ rangeEnd }}</span>
          of
          <span class="font-medium text-[#1F2937]">{{ filtered.length }}</span>
          admins
        </div>

        <div class="flex items-center gap-[8px] flex-wrap">
          <!-- Show N (caret) -->
          <div class="relative">
            <select
              v-model.number="pageSize"
              class="appearance-none border border-[#D1D5DB] rounded-[6px] py-[6px] pl-[10px] pr-[28px] text-[13px] leading-none text-[#1F2937] bg-white"
            >
              <option :value="10">Show 10</option>
              <option :value="20">Show 20</option>
              <option :value="50">Show 50</option>
              <option :value="100">Show 100</option>
            </select>
            <span class="pointer-events-none absolute right-[8px] top-1/2 -translate-y-1/2 text-[10px] text-[#6B7280]">▼</span>
          </div>

          <!-- Prev / Next -->
          <div class="flex items-center gap-[4px]">
            <button
              @click="page = Math.max(1, page - 1)"
              :disabled="page === 1"
              class="border border-[#D1D5DB] rounded-[6px] w-[32px] h-[32px] grid place-items-center text-[13px] text-[#1F2937] hover:bg-[#F3F4F6] disabled:opacity-40"
              aria-label="Previous page"
            >‹</button>

            <button
              @click="page = Math.min(pageCount, page + 1)"
              :disabled="page === pageCount"
              class="border border-[#D1D5DB] rounded-[6px] w-[32px] h-[32px] grid place-items-center text-[13px] text-[#1F2937] hover:bg-[#F3F4F6] disabled:opacity-40"
              aria-label="Next page"
            >›</button>
          </div>
        </div>
      </div>

    </div>

    <Teleport to="body">
      <transition enter-active-class="duration-150 ease-out"
                  enter-from-class="opacity-0"
                  enter-to-class="opacity-100"
                  leave-active-class="duration-150 ease-in"
                  leave-from-class="opacity-100"
                  leave-to-class="opacity-0">
        <div v-if="showAdd"
            class="fixed inset-0 z-[999] bg-black/40"
            @click.self="showAdd = false">
          <div class="absolute left-1/2 top-1/2 w-[420px] max-w-[90vw] -translate-x-1/2 -translate-y-1/2">
            <div class="rounded-[12px] bg-white p-5 shadow-xl">
              <!-- header -->
              <div class="mb-3 flex items-start justify-between">
                <div>
                  <div class="text-[16px] font-semibold">Add new admin</div>
                  <div class="text-[12px] text-[#6B7280]">
                    Make changes to your profile here. Click save when you’re done.
                  </div>
                </div>
                <button class="p-1 rounded hover:bg-[#F3F4F6]" @click="showAdd=false" aria-label="Close">
                  <i class="i-lucide-x text-[18px]"></i>
                </button>
              </div>

              <!-- Tabs dalam modal -->
              <UTabs
                v-model="modalTab"               
                :items="[{ label: 'Create New' }, { label: 'Assign Existing Account' }]"
                variant="pill"
                color="neutral"
                class="w-full"              
                :ui="{
                  list: 'relative flex rounded-lg bg-[#F3F4F6] p-1',       // flex biar child rata
                  indicator: 'absolute z-0 rounded-md bg-white shadow transition-all duration-200', // biar Nuxt UI yang handle posisi/width
                  trigger: 'relative z-10 flex-1 justify-center rounded-md px-0 py-1.5 text-sm \
                            text-[#6B7280] data-[state=active]:text-[#111827]'
                }"
              />

              <!-- Form: Create New -->
              <div v-if="Number(modalTab) === 0" class="mt-3 space-y-3">
                <div class="space-y-1">
                  <label class="text-[12px] text-[#6B7280]">Name</label>
                  <input v-model="formCreate.name" type="text"
                        class="w-full h-[38px] rounded-[8px] border border-[#D1D5DB] px-[12px] text-[14px]" />
                </div>
                <div class="space-y-1">
                  <label class="text-[12px] text-[#6B7280]">Email</label>
                  <input v-model="formCreate.email" type="email"
                        class="w-full h-[38px] rounded-[8px] border border-[#D1D5DB] px-[12px] text-[14px]" />
                </div>
                <div class="space-y-1">
                  <label class="text-[12px] text-[#6B7280]">Role</label>
                  <select v-model="formCreate.role"
                          class="w-full h-[38px] rounded-[8px] border border-[#D1D5DB] px-[10px] text-[14px]">
                    <option v-for="r in roleOptions" :key="r" :value="r">{{ r }}</option>
                  </select>
                </div>
                <div class="space-y-1">
                  <label class="text-[12px] text-[#6B7280]">Password</label>
                  <input v-model="formCreate.password" type="password"
                        class="w-full h-[38px] rounded-[8px] border border-[#D1D5DB] px-[12px] text-[14px]" />
                </div>
              </div>

              <!-- Form: Assign Existing Account -->
              <div v-else class="mt-3 space-y-3">
                <div class="space-y-1">
                  <label class="text-[12px] text-[#6B7280]">Email</label>
                  <input v-model="formAssign.email" type="email" placeholder="Email"
                        class="w-full h-[38px] rounded-[8px] border border-[#D1D5DB] px-[12px] text-[14px]" />
                </div>
                <div class="space-y-1">
                  <label class="text-[12px] text-[#6B7280]">Role</label>
                  <select v-model="formAssign.role"
                          class="w-full h-[38px] rounded-[8px] border border-[#D1D5DB] px-[10px] text-[14px]">
                    <option v-for="r in roleOptions" :key="r" :value="r">{{ r }}</option>
                  </select>
                </div>
              </div>

              <!-- footer -->
              <div class="mt-4 flex justify-end">
                <button class="h-[36px] px-[12px] rounded-[8px] bg-black text-white text-[13px]" @click="saveAdd">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </Teleport>
  </div>
</template>
