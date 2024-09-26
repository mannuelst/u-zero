"use client"
import UserForm from '@/components/user-form';
import { useDeleteUserMutation, useGetUsersQuery } from '@/lib/redux/apiSlice';
import { ChevronLeft, ChevronRight, Search, Settings, Trash } from 'lucide-react';
import { useState } from 'react';
export function UserList() {
  const [page, setPage] = useState(1)
  const { data: users, isLoading, isError } = useGetUsersQuery();
  const [deleteUser] = useDeleteUserMutation();
  const [editingUser, setEditingUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  function goToPreviousPage() {
    setPage(page - 1)
  }
  function goToNextPage() {
    setPage(page + 1)
  }



  if (isLoading) return <div>Loading..</div>
  if (isError) return <div>Error loading users</div>

  const filteredUsers = users?.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const totalPages = Math.ceil(filteredUsers.length / 10)

  return (
    <div>
      <div className='flex gap-1 bg-gray-200 w-fit rounded-md'>

        <Search className='size-6 text-red-400' />
        <input
          type="text"
          placeholder="Search users..."
          className='bg-gray-200'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>



      <table className="border rounded-md p-4 w-full">
        <thead>
          <tr className="border-b border bg-gray-300">
            <th className="py-3 px-4 text-lg text-left">Nome</th>
            <th className="py-3 px-4 text-lg text-left">Email</th>
            <th className="py-3 px-4 text-lg text-left">Role</th>
            <th className="py-3 px-4 text-lg text-left  ">Action</th>

          </tr>


        </thead>
        <tbody>
          {
            filteredUsers?.slice((page - 1) * 10, page * 10)?.map((user) => (

              <tr className="border-b border hover:bg-roxo/5" key={user.id}  >
                <td className="py-3 px-4 ">
                  <div className='flex flex-col'>
                    {user.name}

                    <span className='text-sm text-gray-500'>{user.job}</span>
                  </div>


                </td>
                <td className="py-3 px-4">
                  {user.email}
                </td>
                <td className="py-3 px-4 text-left ">{user.role}</td>
                <td className="py-3 px-4 text-center ">
                  <div className='flex text-white gap-2'>

                    <button

                      onClick={() => setEditingUser(user)}><Settings className='text-blue-500' /></button>
                    <button

                      onClick={() => {
                        deleteUser(user.id);
                      }}><Trash className='text-red-500 ' /></button>
                  </div>
                </td>


              </tr>
            )

            )}

        </tbody>
        <tfoot>
          <tr>

            <td className="py-3 px-4 text-sm text-zinc-500" colSpan={2}>
              Total {users?.length} Usuários
            </td>
            <td className="py-3 px-4 text-sm text-zinc-500 text-right" colSpan={3}>
              <div className="inline-flex items-center gap-8">

                <span>Página {page} de {totalPages}</span>
                <div className="flex gap-1.5">

                  <button onClick={goToPreviousPage} disabled={page === 1}
                    className=" border border-white/10 rounded p-1.5">
                    <ChevronLeft className="size-5" />
                  </button>
                  <button onClick={goToNextPage} disabled={page === totalPages} className=" border border-white/10 rounded p-1.5">
                    <ChevronRight className="size-5" />
                  </button>

                </div>
              </div>

            </td>
          </tr>

        </tfoot>
      </table>
      {
        editingUser && (
          <UserForm user={editingUser} action={() => setEditingUser(null)} />
        )
      }
    </div >
  );
};

