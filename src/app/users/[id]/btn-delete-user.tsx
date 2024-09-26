"use client"

import { deleteUser } from "@/actions";

export function ButtonDeleteUser(userId: string) {
  return (
    <form action={deleteUser}>
      <input type="text" name="id" value={userId} />
      <button>Excluir este usuário</button>
    </form>
  )
}