<template></template>

<script setup lang="ts">
const route = useRoute()

onMounted(() => {
  const orgId = route.params.orgId as string
  navigateTo(`/dashboard/org/${orgId}/devices`, { replace: true })
})
</script>
