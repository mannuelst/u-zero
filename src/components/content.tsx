"use client"

import { useState } from 'react';
import { Modal } from './modal';
import { UserForm } from './user-form';
import { UserList } from './user-list';

export function Content() {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">U-zero</h1>
      <p>Aplicação para gerenciamento de usuários!</p>
      <button
        onClick={() => setShowAddForm(true)}
        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
      >
        Add User
      </button>
      <UserList />
      <Modal isOpen={showAddForm} onClose={() => setShowAddForm(false)}>
        <UserForm user={null} onClose={() => setShowAddForm(false)} />
      </Modal>
    </div>

  );
}
