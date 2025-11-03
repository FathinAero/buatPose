<script setup lang="ts">
definePageMeta({ layout: 'dashboard' })

const route = useRoute()
const orgId = route.params.orgId as string
const deviceId = route.params.deviceId as string

const { mode } = useDashboardSidebar()
mode.value = 'device'

await navigateTo(`/dashboard/org/${orgId}/device/${deviceId}/events`, { replace: true })
</script>

<template></template>
