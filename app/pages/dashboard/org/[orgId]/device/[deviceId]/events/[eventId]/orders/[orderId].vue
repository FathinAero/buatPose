<script setup lang="ts">
definePageMeta({ layout: 'dashboard' })
try {
  const { useDashboardSidebar } = await import('~/composables/useDashboardSidebar')
  useDashboardSidebar().mode.value = 'event'
} catch {}

const route = useRoute()
const orderId = route.params.orderId as string

// dummy data
const order = reactive({
  id: orderId || '432987432987492387434',
  status: 'Success',
  date: '2024-01-23',
  time: '15:00',          // 24h
  totalFrame: 1,
  subtotal: 160_000,
  discount: 20_000,
  promo: 'ISAGANTENG',
  total: 140_000,
  photos: [
    'https://picsum.photos/seed/pose1/320/420',
    'https://picsum.photos/seed/pose2/320/420',
    'https://picsum.photos/seed/pose3/320/420',
    'https://picsum.photos/seed/pose4/320/420',
    'https://picsum.photos/seed/pose5/320/420'
  ]
})

const fIDR = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })
const fDate = (iso: string) =>
  new Date(iso + 'T00:00:00').toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).replace(',', '')
const fTime = (t: string) => t.replace(':', '.') + ' WIB'
</script>

<template>
  <div class="space-y-4">
    <h1 class="text-[20px] font-semibold text-[#1F2937]">Order Detail</h1>

    <!-- Summary -->
    <div class="rounded-[10px] border border-[#E5E7EB] bg-white p-4 md:p-6">
      <div class="text-[14px] font-medium text-[#111827] mb-3">Summary</div>

      <div class="divide-y divide-[#E5E7EB]">
        <!-- row -->
        <div class="flex items-center justify-between py-[10px]">
          <div class="text-[13px] text-[#6B7280]">Order ID</div>
          <div class="text-[13px] text-[#111827]">{{ order.id }}</div>
        </div>

        <div class="flex items-center justify-between py-[10px]">
          <div class="text-[13px] text-[#6B7280]">Status</div>
          <div>
            <span class="inline-flex items-center h-[22px] px-[10px] rounded-full bg-[#111827] text-white text-[11px] font-medium">
              {{ order.status }}
            </span>
          </div>
        </div>

        <div class="flex items-center justify-between py-[10px]">
          <div class="text-[13px] text-[#6B7280]">Date</div>
          <div class="text-[13px] text-[#111827]">{{ fDate(order.date) }}</div>
        </div>

        <div class="flex items-center justify-between py-[10px]">
          <div class="text-[13px] text-[#6B7280]">Time</div>
          <div class="text-[13px] text-[#111827]">{{ fTime(order.time) }}</div>
        </div>

        <div class="flex items-center justify-between py-[10px]">
          <div class="text-[13px] text-[#6B7280]">Total Frame</div>
          <div class="text-[13px] text-[#111827]">{{ order.totalFrame }}</div>
        </div>

        <div class="flex items-center justify-between py-[10px]">
          <div class="text-[13px] text-[#6B7280]">Subtotal</div>
          <div class="text-[13px] text-[#111827]">{{ fIDR.format(order.subtotal) }}</div>
        </div>

        <div class="flex items-center justify-between py-[10px]">
          <div class="text-[13px] text-[#6B7280]">Discount</div>
          <div class="text-[13px] text-[#111827]">{{ fIDR.format(order.discount) }}</div>
        </div>

        <div class="flex items-center justify-between py-[10px]">
          <div class="text-[13px] text-[#6B7280]">Promo Code</div>
          <div class="text-[13px] text-[#111827]">{{ order.promo }}</div>
        </div>

        <div class="flex items-center justify-between py-[10px]">
          <div class="text-[13px] text-[#6B7280]">Total Amount</div>
          <div class="text-[13px] text-[#111827]">{{ fIDR.format(order.total) }}</div>
        </div>
      </div>
    </div>

    <!-- Photos -->
    <div class="rounded-[10px] border border-[#E5E7EB] bg-white p-4 md:p-6">
      <div class="text-[14px] font-medium text-[#111827] mb-3">Photos</div>

      <div class="flex gap-3 overflow-x-auto">
        <img
          v-for="(src, i) in order.photos"
          :key="i"
          :src="src"
          class="h-[160px] w-auto rounded-[8px] object-cover border border-[#E5E7EB] bg-[#F3F4F6]"
          alt="Order photo"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>
