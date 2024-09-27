import { InputForm } from '@/components/input-form';
import { useAddUserMutation, useUpdateUserMutation } from '@/lib/redux/apiSlice';
import { UserFormData, UserResponse, userSchema } from '@/utils/definitions';
import React, { useState } from 'react';
import { z } from 'zod';


interface UserFormProps {
  user: UserResponse | null;
  onClose: () => void;
}

export function UserForm({ user = null, onClose }: UserFormProps) {
  const [addUser] = useAddUserMutation();
  const [updateUser] = useUpdateUserMutation();
  const [errors, setErrors] = useState<Partial<UserFormData>>({});

  const [formData, setFormData] = useState<UserFormData>({
    name: user?.name || '',
    email: user?.email || '',
    job: user?.job || '',
    role: user?.role || 'user',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      userSchema.parse(formData);
      if (user) {
        await updateUser({ id: user.id, ...formData });
      } else {
        await addUser(formData);
      }
      onClose();
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(error.formErrors.fieldErrors as Partial<UserFormData>);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (<form onSubmit={handleSubmit} className="space-y-4">
    <h2 className="text-xl font-bold mb-4">{user ? 'Edit User' : 'Add User'}</h2>

    <InputForm
      label="Name"
      name="name"
      type="text"
      value={formData.name}
      onChange={handleChange}
      error={errors.name}
    />

    <InputForm
      label="Email"
      name="email"
      type="email"
      value={formData.email}
      onChange={handleChange}
      error={errors.email}
    />

    <InputForm
      label="Profissão"
      name="job"
      type="text"
      value={formData.job}
      onChange={handleChange}
      error={errors.job}
    />

    <InputForm
      label="Role"
      name="role"
      type="select"
      value={formData.role}
      onChange={handleChange}
      error={errors.role}
      options={[
        { value: 'user', label: 'User' },
        { value: 'admin', label: 'Admin' },
      ]}
    />

    <div className="flex justify-between mt-6">
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {user ? 'Update' : 'ADD'} User
      </button>
      <button type="button" onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">
        Cancel
      </button>
    </div>
  </form>
  );
}