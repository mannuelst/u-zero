import { ReactNode } from "react"
import { z } from "zod"

export const userSchema = z.object({
  id: z.string().uuid("..."),
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres").max(100, "Nome não pode exceder 100 caracteres"),
  email: z.string().email("Email inválido"),
  job: z.string().min(2, "Profissão deve ter pelo menos 2 caracteres").max(100, "Profissão não pode exceder 100 caracteres"),
  role: z.enum(['admin', 'user'], { message: "Papel deve ser 'admin' ou 'user'" }),
  about: z.string().max(100, "Descrição não pode exceder 100 caracteres").optional(),
})

export type User = z.infer<typeof userSchema>

export type ProviderProp = {
  children: ReactNode
}