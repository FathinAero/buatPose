<script setup lang="ts">
defineProps<{
	// variant?: "primary" | "secondary" | "outline";
	iconPath?: string;
	to?: string;
}>();
</script>

<template>
	<button
		class="flex items-center justify-center px-3 py-2 text-sm font-medium text-white transition-all duration-200 bg-black rounded-md hover:opacity-80 gap-x-2 whitespace-nowrap"
		:onclick="to ? () => navigateTo(to) : null">
		<NuxtImg
			:src="iconPath"
			class="size-4 aspect-square" />
		<slot />
	</button>
</template>
