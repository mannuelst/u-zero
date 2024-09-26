"use client "

import { apiSlice } from "@/lib/redux/apiSlice";
import { store } from "@/lib/redux/store";
import { ProviderProp } from "@/utils/definitions";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { Provider } from "react-redux";



export function MainProvider({ children }: Readonly<ProviderProp>) {
  return (
    <Provider store={store}>
      <ApiProvider api={apiSlice}>
        {children}
      </ApiProvider>
    </Provider>
  )
}