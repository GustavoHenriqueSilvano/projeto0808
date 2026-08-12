// Em dev o Vite faz proxy de /api para o Go em :8080 (ver vite.config.ts).
// Em produção, defina VITE_API_URL no build.
const BASE_URL = import.meta.env.VITE_API_URL ?? '/api/v1'

export class ApiError extends Error {
  readonly status: number

  constructor(message: string, status: number) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${BASE_URL}${path}`, {
    ...init,
    headers: { 'Content-Type': 'application/json', ...init?.headers },
  })

  const body = await response.json().catch(() => null)

  if (!response.ok) {
    // A API Go responde erro no formato { "error": "mensagem" }
    throw new ApiError(body?.error ?? 'Erro inesperado no servidor', response.status)
  }

  return body as T
}

export const api = {
  post: <T>(path: string, data: unknown) =>
    request<T>(path, { method: 'POST', body: JSON.stringify(data) }),
}
