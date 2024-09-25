import { getUsers } from "@/actions"
import Link from "next/link"

export default async function UserPage() {
  const data = await getUsers()
  return (
    <>
      <h2>TODOS OS USUÁRIOS</h2>
      <div>
        <ul>
          {data?.map((item) => (
            <li key={item.id}>
              <p>Nome: <span className="font-bold">{item.name}</span></p>
              <p>@<span>{item.username}</span></p>
              <p>Email: <span>{item.email}</span></p>
              <Link href={`/users/${item.id}/`}>Ver detalhes</Link>
            </li>
          ))}

        </ul>
      </div>
    </>
  )
}