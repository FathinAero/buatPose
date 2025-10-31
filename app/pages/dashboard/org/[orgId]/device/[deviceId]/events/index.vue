<script setup lang="ts">
definePageMeta({
	layout: "dashboard",
});

const { mode } = useDashboardSidebar();
mode.value = "device";

const route = useRoute();

const orgId = route.params.orgId as string;
const deviceId = route.params.deviceId as string;

// ambil data dummy dari composable yang udah kita siapin
const { tableRows, pagination } = useDeviceEvents(orgId, deviceId);
</script>

<template>
	<div class="flex flex-col w-full">
		<header class="flex items-start justify-between pb-4 flex-wrap gap-y-4">
			<h1 class="text-[20px] font-semibold text-[#1F2937] leading-[1.2]">Events</h1>

			<div class="flex items-center gap-[8px] flex-shrink-0">
				<!-- ga ada search/add di screenshot Events original,
             tapi kita tinggal kosongin kanan -->
			</div>
		</header>

		<div class="pt-0">
			<div class="border border-[#E5E7EB] rounded-[6px] bg-white overflow-hidden text-[14px] text-[#1F2937]">
				<table class="w-full border-collapse">
					<thead class="bg-[#F9FAFB] text-left text-[13px] text-[#4B5563] font-medium border-b border-[#E5E7EB]">
						<tr>
							<th class="py-[10px] px-[16px] font-medium">
								<div class="flex items-center gap-[4px]">
									<span>Event</span>
									<span class="text-[10px] text-[#9CA3AF] leading-none">▲▼</span>
								</div>
							</th>
							<th class="py-[10px] px-[16px] font-medium">
								<div class="flex items-center gap-[4px]">
									<span>Created At</span>
									<span class="text-[10px] text-[#9CA3AF] leading-none">▲▼</span>
								</div>
							</th>
							<th class="py-[10px] px-[16px] font-medium">
								<div class="flex items-center gap-[4px]">
									<span>Revenue</span>
									<span class="text-[10px] text-[#9CA3AF] leading-none">▲▼</span>
								</div>
							</th>
						</tr>
					</thead>

					<tbody>
						<tr
							v-for="row in tableRows"
							:key="row.id"
							class="border-b border-[#E5E7EB] last:border-b-0 hover:bg-[#F9FAFB]">
							<td class="py-[12px] px-[16px] text-[14px] text-[#1F2937]">
								{{ row.event }}
							</td>
							<td class="py-[12px] px-[16px] text-[14px] text-[#1F2937]">
								{{ row.createdAt }}
							</td>
							<td class="py-[12px] px-[16px] text-[14px] text-[#1F2937]">
								{{ row.revenue }}
							</td>
						</tr>
					</tbody>
				</table>

				<div class="flex flex-col md:flex-row md:items-center justify-between gap-[12px] text-[12px] text-[#4B5563] px-[16px] py-[12px] bg-white">
					<div class="leading-none">
						Showing
						<span class="font-medium text-[#1F2937]">{{ pagination.from }}-{{ pagination.to }}</span>
						of
						<span class="font-medium text-[#1F2937]">{{ pagination.total }}</span>
						products
					</div>

					<div class="flex items-center gap-[8px] flex-wrap">
						<div class="relative">
							<select class="appearance-none border border-[#D1D5DB] rounded-[6px] py-[6px] pl-[10px] pr-[28px] text-[13px] leading-none text-[#1F2937] bg-white">
								<option>Show 20</option>
								<option>Show 50</option>
								<option>Show 100</option>
							</select>
							<span class="pointer-events-none absolute right-[8px] top-1/2 -translate-y-1/2 text-[10px] text-[#6B7280]"> ▼ </span>
						</div>

						<div class="flex items-center gap-[4px]">
							<button class="border border-[#D1D5DB] rounded-[6px] w-[32px] h-[32px] flex items-center justify-center text-[13px] text-[#1F2937] hover:bg-[#F3F4F6]">‹</button>
							<button class="border border-[#D1D5DB] rounded-[6px] w-[32px] h-[32px] flex items-center justify-center text-[13px] text-[#1F2937] hover:bg-[#F3F4F6]">›</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
