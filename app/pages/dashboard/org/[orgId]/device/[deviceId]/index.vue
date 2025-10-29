<template></template>

<script setup lang="ts">
const route = useRoute()

onMounted(() => {
  const { orgId, deviceId } = route.params as { orgId: string; deviceId: string }
  navigateTo(`/dashboard/org/${orgId}/device/${deviceId}/events`, { replace: true })
})
</script>
