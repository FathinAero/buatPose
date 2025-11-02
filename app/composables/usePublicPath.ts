export const usePublicPath = () => {
  const base = (useRuntimeConfig().app?.baseURL || '/').replace(/\/+$/, '')
  const p = (path: string) => (path.startsWith('/') ? `${base}${path}` : `${base}/${path}`)
  return { p }
}