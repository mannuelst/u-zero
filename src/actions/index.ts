"use server"

import { api } from "@/lib/axios";
import { User } from "@/utils/definitions";
import { redirect } from "next/navigation";
//TODO: Refactor(don't forget)
export async function getUsers(): Promise<User[]> {

  const { data } = await api.get("/")
  if (!data) {
    return []
  }
  return data.data
}

export async function createUser(formData: FormData) {

  const { data } = await api.put("/")
  console.log("data: ", data)

  return data
}

export async function updateUser() {

  const { data } = await api.patch("/")
  console.log("data: ", data)

  return data
}

export async function deleteUser(formData: FormData) {
  const id = formData.get("id")
  console.log("id: ", id)
  try {

    await api.delete(`/${id}`)
  } catch (error) {
    throw new Error("Falha o efectuar estação")

  }

  redirect("/users")


}

export async function getUserDetails(id: string) {
  const { data } = await api.get(`/${id}`)
  console.log("data: ", data)

  return data
}



export async function getUser(formData: FormData) {
  const email = formData.get("email")

  const { data: [user] } = await api.get(`/users?email=${email}`)
  if (!user) {
    throw new Error("Usuário não encontrado!")
  }
  redirect("/users")
  //return user
}
//http://localhost:3333/users?email=admin@email.com