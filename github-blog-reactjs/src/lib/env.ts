import { z } from 'zod'

const envSchema = z.object({
  VITE_GITHUB_GET_USERS_API: z.string().url(),
  VITE_GITHUB_SEARCH_ISSUES_API: z.string().url(),
  VITE_GITHUB_BASE_URL: z.string().url(),
  VITE_ENABLE_API_DELAY: z.string().transform((value) => value === 'true'),
})

export const env = envSchema.parse(import.meta.env)
