"use client"

import { deleteUsers } from "@/actions";

export function ButtonDeleteUser(userId: string) {
  return (
    <form action={deleteUsers}>
      <input type="text" name="id" value={userId} />
      <button>Excluir este usuário</button>
    </form>
  )
}