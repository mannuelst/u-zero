"use client"
import { apiSlice } from "@/lib/redux/apiSlice";
import { ProviderProp } from "@/utils/definitions";
import { ApiProvider } from "@reduxjs/toolkit/query/react";

export function MainProvider({ children }: Readonly<ProviderProp>) {
  return (
    <ApiProvider api={apiSlice} >
      {children}
    </ApiProvider>
  )
}