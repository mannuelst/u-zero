import Link from "next/link";



export default async function Home() {
  // const users = await getUsers()
  return (
    <div className="flex flex-col gap-10">
      <header className="font-bold text-2xl border-gray-500/50 border-b">U-zero</header>
      <div className="flex flex-col gap-3 items-center">
        <p>U-zero é uma plataforma de gerenciamento de usuários!</p>

        <Link className="bg-blue-500 text-white px-2 py-1.5 rounded-md hover:bg-blue-700" href={"/auth/login"}>Entrar</Link>
      </div>

    </div>
  );
}
