import Link from "next/link";



export default async function Home() {
  // const users = await getUsers()
  return (
    <div>
      <h2>User Manager</h2>
      <div>
        <Link className="bg-blue-600 text-white px-2 py-1.5" href={"/users"}>Ver todos</Link>
      </div>
    </div>
  );
}
