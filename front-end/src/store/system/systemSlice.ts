import {createSlice} from "@reduxjs/toolkit";
import {Chat, User} from "./types";

interface SystemState {
    user: User | null,
    chats: Chat[]
}

const initialState: SystemState = {
    user: null,
    chats: []
}

export const systemSlice = createSlice({
    name: 'system',
    initialState,
    reducers: {
        doSmth: (state) => {
            state.chats.push({_id: '1', messages: [], owners: ["_1"]})
        }
    }
})

export const {doSmth} = systemSlice.actions;

export default systemSlice.reducer;