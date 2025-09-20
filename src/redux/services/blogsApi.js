import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const blogsApi = createApi({
    reducerPath: "blogsApi",
    tagTypes: ["Users"],
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
    endpoints: (builder) => ({
        getBlogs: builder.query({
            query: () => "/users",
            providesTags: ["Users"]
        }),
        getBlog: builder.query({
            query: (id) => `/users/${id}`
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
            invalidatesTags: ["Users"]
        })
    })
})

export const { useGetBlogsQuery, useGetBlogQuery, useAddBlogMutation, useDeleteBlogMutation } = blogsApi;
export default blogsApi;