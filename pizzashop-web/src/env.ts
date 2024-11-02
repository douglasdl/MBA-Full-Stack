import { z } from 'zod'

const envSchema = z.object({
  MODE: z.enum(['production', 'development', 'test']),
  VITE_ENABLE_API_DELAY: z.string().transform((value) => value === 'true'),

  USE_API: z.string(),
  DATABASE_URL: z.string().url(),
  DIRECT_URL: z.string().url(),     
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  NEXT_AUTH_SECRET: z.string(),
  VITE_SUPABASE_URL: z.string().url(),
  VITE_SUPABASE_ANON_KEY: z.string(),
  SUPABASE_KEY: z.string()
})

export const env = envSchema.parse(import.meta.env)