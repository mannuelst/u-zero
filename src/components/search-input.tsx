"use client"

import { useState } from "react"

export function SearchInput() {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <input
      type="text"
      placeholder="Search users..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  )
}