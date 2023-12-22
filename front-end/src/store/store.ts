import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import systemSlice from "./system/systemSlice";
import {chatsApi} from "../services/messaging";

export const store = configureStore({
    reducer: {
       systemSlice,
       [chatsApi.reducerPath] : chatsApi.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(chatsApi.middleware)

})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;