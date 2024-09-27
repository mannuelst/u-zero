import { UserResponse } from '@/utils/definitions';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://u0-xi.vercel.app" }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUsers: builder.query<UserResponse[], void>({
      query: () => "users",
      providesTags: ["User"],

    }),
    addUser: builder.mutation<UserResponse, Omit<UserResponse, 'id'>>({
      query: (user) => ({
        url: "users",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    updateUser: builder.mutation<UserResponse, UserResponse>({
      query: (user) => ({
        url: `users/${user.id}`,
        method: "PUT",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation<void, string>({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useAddUserMutation
} = apiSlice


