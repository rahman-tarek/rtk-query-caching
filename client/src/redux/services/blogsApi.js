import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const blogsApi = createApi({
    reducerPath: "blogsApi",
    tagTypes: ["Users"],
    baseQuery: fetchBaseQuery({ baseUrl: "https://json-server-api-6e07.onrender.com" }),
    endpoints: (builder) => ({
        getBlogs: builder.query({
            query: () => "/users",
            providesTags: (users) => users ? users.map(({ id }) => ({ type: "Users", id })) : ["Users"]
        }),
        getBlog: builder.query({
            query: (id) => `/users/${id}`
        }),
        updateBlog: builder.mutation({
            query: ({ id, ...rest }) => ({
                url: `/users/${id}`,
                method: "PATCH",
                body: rest,
            }),
            invalidatesTags: (result, error, { id }) => [{ type: "Users", id }]
        }),
        addBlog: builder.mutation({
            query: (blog) => ({
                url: "/users",
                method: "POST",
                body: blog,
            }),
            invalidatesTags: ["Users"]
        }),
        deleteBlog: builder.mutation({
            query: (id) => ({
                url: `/users/${id}`,
                method: "DELETE",

            }),
            invalidatesTags: (result, error, id) => [{ type: "Users", id }]
        })
    })
})

export const { useGetBlogsQuery, useGetBlogQuery, useAddBlogMutation, useDeleteBlogMutation, useUpdateBlogMutation } = blogsApi;
export default blogsApi;