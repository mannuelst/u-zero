import { api } from "@/lib/axios";
import { redirect } from "next/navigation";
//TODO: Refactor(don't forget)
export async function getUsers() {

  const { data } = await api.get("/")
  console.log("data: ", data)

  return data
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