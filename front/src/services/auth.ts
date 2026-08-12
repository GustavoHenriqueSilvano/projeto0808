import { api } from './api'

export interface User {
  id: number
  name: string
  email: string
  created_at: string
  updated_at: string
}

export interface LoginPayload {
  email: string
  password: string
}

// POST /api/v1/login -> devolve o User (a API ainda não emite token)
export function login(payload: LoginPayload) {
  return api.post<User>('/login', payload)
}
