// app/composables/useDashboardSidebar.ts
export const useDashboardSidebar = () => {
  const mode = useState<'org' | 'device'>('dashboardSidebarMode', () => 'org')

  // NEW: drawer mobile
  const open = useState<boolean>('dashboardSidebarOpen', () => false)
  const toggle = () => (open.value = !open.value)
  const close = () => (open.value = false)

  return { mode, open, toggle, close }
}
