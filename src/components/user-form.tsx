"use client"
import { useAddUserMutation, useUpdateUserMutation } from '@/lib/redux/apiSlice';
import { User, userSchema } from '@/utils/definitions';
import { CircleX, Send } from 'lucide-react';
import { useState } from 'react';

import { z } from 'zod';
type FormProps = {
  user: User | null,
  action: () => void
}
export default function UserForm({ user = null, action }: Readonly<FormProps>) {
  const [addUser] = useAddUserMutation();
  const [updateUser] = useUpdateUserMutation();
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState<User>({
    name: user?.name || '',
    email: user?.email || '',
    role: user?.role || 'user',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      userSchema.parse(formData);
      if (user) {
        await updateUser({ id: user.id, ...formData });
      } else {
        await addUser(formData);
      }
      action();
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(error.formErrors.fieldErrors);
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label htmlFor="role">Role:</label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        {errors.role && <span>{errors.role}</span>}
      </div>
      <div className='flex justify-between'>

        <button
          className='bg-red'
          type="submit">{user ? 'Update' : 'Add'} <Send className='text-blue-500' /> </button>
        <button type="button" onClick={action}> <CircleX className='text-blue-500' /> </button>
      </div>
    </form>
  )
}
