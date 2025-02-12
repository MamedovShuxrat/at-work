import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_USERS } from "../../constants";

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get(GET_USERS)
    return response.data.slice(0, 6)
})

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        list: [],
        archive: [],
        status: 'idle',
        error: null
    },
    reducers: {
        editUser: (state, action) => {
            const { id, ...updatedUser } = action.payload
            const userIndex = state.list.findIndex((user) => user.id === id)
            if (userIndex !== -1) {
                state.list[userIndex] = { ...state.list[userIndex], ...updatedUser }
            }
        },
        archiveUser: (state, action) => {
            const user = state.list.find((user) => user.id === action.payload)
            if (user) {
                state.list = state.list.filter((user) => user.id !== action.payload)
                state.archive.push(user)
            }
        },
        hideUser: (state, action) => {
            state.list = state.list.filter((user) => user.id !== action.payload)
        },
        activateUser: (state, action) => {
            const user = state.archive.find((user) => user.id === action.payload)
            if (user) {
                state.archive = state.archive.filter((user) => user.id !== action.payload)
                state.list.push(user)
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.list = action.payload
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const { editUser, archiveUser, hideUser, activateUser } = usersSlice.actions
export default usersSlice.reducer