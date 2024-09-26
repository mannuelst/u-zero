"use client"
import UserForm from '@/components/user-form';
import { useDeleteUserMutation, useGetUsersQuery } from '@/lib/redux/apiSlice';
import { Search, Settings, Trash } from 'lucide-react';
import { useState } from 'react';
export function UserList() {
  const { data: users, isLoading, isError } = useGetUsersQuery();
  const [deleteUser] = useDeleteUserMutation();
  const [editingUser, setEditingUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');


  if (isLoading) return <div>Loading..</div>
  if (isError) return <div>Error loading users</div>

  const filteredUsers = users?.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

      <table className='border rounded-md p-4 w-full'>
        <thead className='bg-slate-500'>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className='p-4'>

          {filteredUsers?.map((user) => (
            <tr key={user.id}>
              <td>
                <div className='flex flex-col'>
                  {user.name}

                  <span className='text-sm text-gray-500'>{user.job}</span>
                </div>

              </td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td >
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
          ))}
        </tbody>
      </table>
      {
        editingUser && (
          <UserForm user={editingUser} action={() => setEditingUser(null)} />
        )
      }
    </div >
  );
};

