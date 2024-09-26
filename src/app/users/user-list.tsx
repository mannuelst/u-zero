"use client"
import { useGetUsersQuery } from "@/lib/redux/apiSlice"
import Link from "next/link"

export function Users() {
  const { data, isLoading, isError } = useGetUsersQuery()
  if (isLoading) return (<p>Carregando...</p>)
  if (isError) return (<p>Falha ao carregar os usuários</p>)
  return (
    <div>
      <h2>Todos os </h2>
      <div>

        {data.length > 0 ? (
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
        )}
      </div>
    </div>
  )
}