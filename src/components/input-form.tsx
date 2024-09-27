import React from 'react';

interface FormFieldProps {
  label: string;
  name: string;
  type: 'text' | 'email' | 'select';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  error?: string;
  options?: { value: string; label: string }[];
}

export function InputForm({
  label,
  name,
  type,
  value,
  onChange,
  error,
  options
}: FormFieldProps) {
  return (
    <div>
      <label htmlFor={name} className="block mb-1">
        {label}:
      </label>
      {type === 'select' ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full p-2 border rounded"
        >
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full p-2 border rounded"
        />
      )}
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
}