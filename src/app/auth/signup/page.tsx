import Link from "next/link";

export default async function SignUpPage() {
  // const users = await getUsers()
  return (
    <div className="flex flex-col gap-10">
      <header className="font-bold text-2xl border-gray-500/50 border-b">U-zero</header>
      <div className="flex flex-col gap-3 items-center w-[600]">
        <h2 className="font-bold">Criar Conta</h2>
        <form action=""
          className="space-y-4 w-full border flex flex-col p-2 rounded-md">
          <div className="flex flex-col gap-1">

            <label htmlFor="name">Nome</label>
            <input type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              className="bg-gray-200 border rounded-md outline-none px-2 py-1.5" />
          </div>
          <div className="flex flex-col gap-1">

            <label htmlFor="email">Email</label>
            <input type="email"
              name="email"
              id="email"
              placeholder="email@example"
              className="bg-gray-200 border rounded-md outline-none px-2 py-1.5" />
          </div>
          <div className="flex flex-col gap-1">

            <label htmlFor="job">Profissão</label>
            <input type="text"
              name="job"
              id="job"
              placeholder="Your Job"
              className="bg-gray-200 border rounded-md outline-none px-2 py-1.5" />
          </div>
          <button
            className="bg-blue-500 text-white px-2 py-1.5 rounded-md hover:bg-blue-700">Entrar</button>

          <div className="self-end">
            <p
              className="text-sm"
            >Já tem um perfil ? <span className="text-blue-500 hover:underline"> <Link href={"/auth/login"}>Faça o login!</Link></span></p>
          </div>
        </form>
      </div>
    </div>
  );
}