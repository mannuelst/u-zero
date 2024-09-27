import { ReactNode } from "react"
import { z } from "zod"

export const userSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres").max(100, "Nome não pode exceder 100 caracteres"),
  email: z.string().email("Email inválido"),
  job: z.string().min(2, "Profissão deve ter pelo menos 2 caracteres").max(100, "Profissão não pode exceder 100 caracteres"),
  role: z.enum(['admin', 'user'], { message: "Papel deve ser 'admin' ou 'user'" }),
})

export type UserFormData = z.infer<typeof userSchema>

export type ProviderProp = {
  children: ReactNode
}
export type UserResponse = {
  id: string;
} & UserFormData 