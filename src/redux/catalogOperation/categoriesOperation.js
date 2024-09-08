import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoriesApi = createApi({
    reducerPath: 'categories',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fakestoreapi.com'
    }),
    tagTypes: ['categories'],
    endpoints: (builder) => ({
        getAllCategories: builder.query({
            query: () => ({
                url: '/products/categories',
                method: "GET"
            }),
            providesTags: ['categories']
        })
    })
})

export const {useGetAllCategoriesQuery} = categoriesApi