// app/composables/useDashboardSidebar.ts
export const useDashboardSidebar = () => {
  // 'org' = sidebar mode org-level (Devices / Billings / ...)
  // 'device' = sidebar mode device-level (Events / Account)
  const mode = useState<'org' | 'device'>(
    'dashboardSidebarMode',
    () => 'org'
  )

  return { mode }
}
