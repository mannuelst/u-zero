import { getUser } from "@/actions";
import Link from "next/link";

export default async function LoginPage() {
  // const users = await getUsers()
  return (
    <div className="flex flex-col gap-10">
      <header className="font-bold text-2xl border-gray-500/50 border-b">U-zero</header>
      <div className="flex flex-col gap-3 items-center w-[600]">
        <h2 className="font-bold">Login</h2>
        <form action={getUser}
          className="space-y-4 w-full border flex flex-col p-2 rounded-md">
          <div className="flex flex-col gap-1">

            <label htmlFor="email">Email</label>
            <input type="email"
              name="email"
              id="email"
              placeholder="email@example.com"
              className="bg-gray-200 border rounded-md outline-none px-2 py-1.5" />
          </div>
          <button
            className="bg-blue-500 text-white px-2 py-1.5 rounded-md hover:bg-blue-700">Entrar</button>

          <div className="self-end">
            <p
              className="text-sm"
            >Não tem um perfil ? <span className="text-blue-500 hover:underline"> <Link href={"/auth/signup"}>Crie o seus!</Link></span></p>
          </div>

        </form>
      </div>
    </div>
  );
}
