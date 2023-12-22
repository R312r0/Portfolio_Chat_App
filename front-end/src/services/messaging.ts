import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Chat, User} from "../store/system/types";

export const chatsApi = createApi({
    reducerPath: 'system',
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:3000/'
    }),
    tagTypes: ['Chats'],
    endpoints: (builder) => ({

        getUsers: builder.query<User[], void>({
            query: () => 'users'
        }),

        getUserChats: builder.query<Chat[], string>({
            query: (name) => 'chats',
            providesTags: ['Chats']
        }),

        //mutations
        addNewChat: builder.mutation({
            query: initialChat => ({
                url: '/chats',
                method: 'POST',
                body: initialChat
            }),
            invalidatesTags: ['Chats']
        })
    })
})

export const {
    useGetUsersQuery,
    useGetUserChatsQuery,
    useAddNewChatMutation
} = chatsApi;
