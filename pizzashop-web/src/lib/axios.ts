import { env } from "@/env"
import axios from "axios"

export const api = axios.create({
  baseURL: env.VITE_SUPABASE_URL,
  withCredentials: true
})