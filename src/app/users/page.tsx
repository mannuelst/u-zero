"use client"

import { useGetUsersQuery } from "@/lib/redux/apiSlice"

export default function UserPage() {
  const { data, isLoading, isError } = useGetUsersQuery()
  return (
    <>
      <h2>TODOS OS USUÁRIOS</h2>
      <div>
        {data}
        {/* {data.length > 0 ? (
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                <p>Nome: <span className="font-bold">{item.name}</span></p>
                <p>Profissão: <span>{item.job}</span></p>
                <p>Email: <span>{item.email}</span></p>
                <Link href={`/users/${item.id}/`} className="bg-blue-600 text-white px-2 py-1.5">
                  Ver detalhes
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <h2>Nenhum usuário</h2>
        )} */}
      </div>
    </>
  )
}