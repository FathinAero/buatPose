<script setup lang="ts">
definePageMeta({
	layout: "dashboard",
});

const { mode } = useDashboardSidebar();
mode.value = "device";

const route = useRoute();
const orgId = route.params.orgId as string;
const deviceId = route.params.deviceId as string;

// Dummy pagination dari composable
const { pagination } = useDeviceEvents(orgId, deviceId);

// Tabs
const tabItems = reactive([
	{ label: "All", isActive: true },
	{ label: "Active", isActive: false },
	{ label: "Inactive", isActive: false },
]);

function setActiveTab(index: number) {
	tabItems.forEach((tab, i) => (tab.isActive = i === index));
}

const activeTab = computed(() => tabItems.find((t) => t.isActive)?.label);

// Frames (dummy)
const frames = reactive([
	{
		id: 1,
		type: "Collaboration",
		price: "Rp25.000",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quod voluptas maiores harum doloremque labore nisi officia laborum sequi beatae eveniet assumenda porro aperiam ut nostrum exercitationem deserunt, corrupti consequatur?",
		active: true,
	},
	{
		id: 2,
		type: "Collaboration",
		price: "Rp25.000",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quod voluptas maiores harum doloremque labore nisi officia laborum sequi beatae eveniet assumenda porro aperiam ut nostrum exercitationem deserunt, corrupti consequatur?",
		active: false,
	},
	{
		id: 3,
		type: "Standard",
		price: "Rp26.000",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quod voluptas maiores harum doloremque labore nisi officia laborum sequi beatae eveniet assumenda porro aperiam ut nostrum exercitationem deserunt, corrupti consequatur?",
		active: true,
	},
	{
		id: 4,
		type: "Standard",
		price: "Rp27.000",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quod voluptas maiores harum doloremque labore nisi officia laborum sequi beatae eveniet assumenda porro aperiam ut nostrum exercitationem deserunt, corrupti consequatur?",
		active: false,
	},
	{
		id: 5,
		type: "Standard",
		price: "Rp27.000",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quod voluptas maiores harum doloremque labore nisi officia laborum sequi beatae eveniet assumenda porro aperiam ut nostrum exercitationem deserunt, corrupti consequatur?",
		active: false,
	},
]);

// Filter frames berdasarkan tab aktif
const filteredFrames = computed(() => {
	if (activeTab.value === "All") return frames;
	if (activeTab.value === "Active") return frames.filter((f) => f.active);
	if (activeTab.value === "Inactive") return frames.filter((f) => !f.active);
	return frames;
});
</script>

<template>
	<div class="flex flex-col w-full gap-y-4">
		<!-- Header -->
		<header class="flex flex-wrap items-start justify-between gap-y-4">
			<h1 class="text-[20px] font-semibold text-[#1F2937] leading-[1.2]">Frames</h1>
			<UiBaseButton :iconPath="'/img/circle-plus.svg'">Add Frame</UiBaseButton>
		</header>

		<!-- Content -->
		<div class="border border-[#E4E4E7] rounded-lg p-6 space-y-6">
			<!-- Tabs -->
			<div class="flex flex-col gap-y-6">
				<div class="flex bg-[#F4F4F5] w-fit p-1 rounded-md gap-x-0.5">
					<button
						v-for="({ label, isActive }, index) in tabItems"
						:key="index"
						class="px-3 py-1.5 rounded font-medium transition-all duration-150"
						:class="isActive ? 'bg-white text-[#09090B]' : 'text-[#71717A]'"
						@click="setActiveTab(index)">
						{{ label }}
					</button>
				</div>

				<!-- Cards -->
				<div
					class="grid grid-cols-2 gap-6 md:grid-cols-3 2xl:grid-cols-5"
					v-if="filteredFrames.length">
					<div
						v-for="({ type, price, description, id }, i) in filteredFrames"
						:key="i"
						class="flex flex-col overflow-hidden transition gap-y-2">
						<NuxtImg
							:src="'https://picsum.photos/300/500?random=' + id"
							class="object-cover w-full h-37.5" />

						<span
							class="text-xs font-semibold py-0.5 px-2.5 rounded-full w-fit"
							:class="type === 'Collaboration' ? 'bg-black text-white' : 'text-black bg-[#F4F4F5]'">
							{{ type }}
						</span>

						<p class="text-sm font-semibold">{{ price }}</p>
						<p class="text-xs text-[#4B5563] line-clamp-1">{{ description }}</p>
					</div>
				</div>

				<!-- Empty State -->
				<div
					v-else
					class="text-sm text-gray-500">
					No frames found.
				</div>
			</div>

			<!-- Pagination -->
			<div class="pt-2">
				<div class="border border-[#E5E7EB] rounded-[6px] bg-white overflow-hidden text-[14px] text-[#1F2937]">
					<div class="flex flex-col md:flex-row md:items-center justify-between gap-[12px] text-[12px] text-[#4B5563] px-[16px] py-[12px] bg-white">
						<div class="leading-none">
							Showing
							<span class="font-medium text-[#1F2937]">{{ pagination.from }}–{{ pagination.to }}</span>
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
	</div>
</template>
