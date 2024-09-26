"use client"
import UserForm from "@/components/user-form";
import { UserList } from "@/components/user-list";
import { useState } from "react";
export default function Home() {
  const [showAddForm, setShowAddForm] = useState(false);
  return (
    <div className="flex flex-col gap-10">
      <header className="font-bold text-2xl border-gray-500/50 border-b">U-zero</header>
      <div className="flex flex-col gap-3 items-center">
        <p>Aplicação para gerenciamento de usuários!</p>
      </div>
      <div>
        <button onClick={() => setShowAddForm(true)}>Add User</button>
        <UserList />
        {showAddForm && <UserForm action={() => setShowAddForm(false)} />}
      </div>

    </div>
  );
}
