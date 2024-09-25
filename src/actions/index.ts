import { api } from "@/lib/axios";
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

export async function deleteUsers(id: string) {

  const { data } = await api.delete(`/${id}`)
  console.log("data: ", data)

  return data
}

export async function getUserDetails(id: string) {
  const { data } = await api.get(`/${id}`)
  console.log("data: ", data)

  return data
}