import { Feedback } from '@/components/feedback';

import { TableData, TableHeaders } from '@/components/table-header';
import { useDeleteUserMutation, useGetUsersQuery } from '@/lib/redux/apiSlice';
import { UserResponse } from '@/utils/definitions';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Modal } from './modal';
import { UserForm } from './user-form';



export function UserList() {
  const [page, setPage] = useState(1)
  const { data: users, isLoading, isError } = useGetUsersQuery()
  const [deleteUser] = useDeleteUserMutation()
  const [editingUser, setEditingUser] = useState<UserResponse | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')


  function goToPreviousPage() {
    setPage(page - 1)
  }
  function goToNextPage() {
    setPage(page + 1)
  }


  if (isLoading) return <Feedback msg="Loading..." />
  if (isError) return <Feedback msg="Falha ao carregar os dados" />

  const filteredUsers = users?.filter(
    (user: UserResponse) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );



  const handleEditUser = (user: UserResponse) => {
    setEditingUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setEditingUser(null);
    setIsModalOpen(false);
  };

  const totalPages = Math.ceil(filteredUsers?.length / 10)
  return (
    <div>
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-fit p-2 mb-4 border rounded outline-none"
      />
      <div>
        <table className="border  p-4 w-full rounded-md">
          <thead>
            <TableHeaders />
          </thead>
          <tbody>
            {filteredUsers?.slice((page - 1) * 10, page * 10)?.map((user: User) => (
              <tr key={user.id} className="border-b">

                <TableData>
                  <div className='flex flex-col'>
                    {user.name}
                    <span className='text-sm text-gray-500'>{user.job}</span>
                  </div>
                </TableData>
                <TableData hideOnMobile>
                  {user.email}
                </TableData>

                <TableData hideOnMobile>
                  {user.role}
                </TableData>
                <TableData>
                  <div className='flex justify-between items-center md:flex-row text-white gap-2'>
                    <button
                      onClick={() => handleEditUser(user)}
                      className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        if (window.confirm('Are you sure you want to delete this user?')) {
                          deleteUser(user.id);
                        }
                      }}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </TableData>
              </tr>
            ))}
          </tbody>
        </table>
        <tfoot>
          <tr className='w-full'>

            <td className="text-sm text-zinc-500" colSpan={4}>
              <div className="flex items-center justify-center gap-1.5">

                <button onClick={goToPreviousPage} disabled={page === 1}
                  className=" border border-white/10 rounded p-1.5">
                  <ChevronLeft className="size-5" />
                </button>
                <button onClick={goToNextPage} disabled={page === totalPages} className=" border border-white/10 rounded p-1.5">
                  <ChevronRight className="size-5" />
                </button>

              </div>

            </td>
          </tr>

        </tfoot>

      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <UserForm user={editingUser} onClose={handleCloseModal} />
      </Modal>
    </div>
  );
}