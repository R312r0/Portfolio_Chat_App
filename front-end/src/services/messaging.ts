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
        getUsersByIds: builder.query<User[], string[]>({
            query: (usersIds) => ({
                url: 'users/findByIds',
                params: {userIds: [...usersIds]}
            })
        }),
        getUserChats: builder.query<Chat[], void>({
            query: () => 'chats',
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
        }),
        removeChatById: builder.mutation({
            query: args => ({
                url: '/chats',
                method: 'DELETE',
                params: {...args}
            }),
            invalidatesTags: ['Chats']
        })
    })
})

export const {
    useGetUsersQuery,
    useGetUsersByIdsQuery,
    useGetUserChatsQuery,
    useAddNewChatMutation,
    useRemoveChatByIdMutation
} = chatsApi;
