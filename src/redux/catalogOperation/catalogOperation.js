import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fakestoreapi.com'
    }),
    tagTypes: ['products'],
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => ({
               url: '/products',
               method: "GET" 
            }),
            providesTags: ['products']
        }),
        getByCategories: builder.query({
            query: (categori) => ({
                url: `/products/category/${categori}`,
                method: "GET"
            }),
            providesTags: ['products']
        })
    })

})

export const {useGetAllProductsQuery, useGetByCategoriesQuery} = productsApi