import { getUserDetails } from "@/actions"
import { ButtonDeleteUser } from "./btn-delete-user"

export default async function UserDetail({ params }: Readonly<{ params: { id: string } }>) {
  const data = await getUserDetails(params.id)
  return (
    <>
      <h2>Detalhes do usuário <span className="font-bold">{data.name}</span> </h2>
      <div>


        <p>{data.biography}</p>
        <div>
          <ButtonDeleteUser userId={params?.id} />
        </div>
      </div>
    </>
  )
}