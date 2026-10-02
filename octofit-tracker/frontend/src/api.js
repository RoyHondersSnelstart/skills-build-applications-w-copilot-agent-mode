const codespaceName = import.meta.env.VITE_CODESPACE_NAME

export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api`
  : 'http://localhost:8000/api'

export function buildApiUrl(resource) {
  return `${apiBaseUrl}/${resource}/`
}

export function normalizeCollection(payload) {
  if (Array.isArray(payload)) {
    return payload
  }

  const candidates = [payload?.results, payload?.data, payload?.items, payload?.docs]
  const collection = candidates.find((candidate) => Array.isArray(candidate))

  return collection ?? []
}