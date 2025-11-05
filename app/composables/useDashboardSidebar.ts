export const useDashboardSidebar = () => {
  // 'org' = sidebar mode org-level (Devices / Billings / ...)
  // 'device' = sidebar mode device-level (Events / Account)
  const mode = useState<'org' | 'device'>('dashboardSidebarMode', () => 'org')

  // NEW: state untuk mobile drawer
  const open = useState<boolean>('dashboardSidebarOpen', () => false)
  const toggle = () => (open.value = !open.value)
  const close = () => (open.value = false)

  return { mode, open, toggle, close }
}
