import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppDispatch} from "./store";
import {githubApi, Repository, User} from "../api/github-api";

export type SearchStatuses = 'initial' | 'success' | 'fail' | 'loading'

type InitialState = {
    userData: User | null;
    searchStatus: SearchStatuses;
    repositories: Repository[];
};

const initialState: InitialState = {
    userData: null,
    searchStatus: "initial",
    repositories: [],
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.userData = action.payload
        },
        setSearchStatus: (state, action: PayloadAction<{value: SearchStatuses}>) => {
            state.searchStatus = action.payload.value
        },
        setRepository: (state, action: PayloadAction<Repository[]>) => {
            state.repositories = action.payload
        },
    }
})

export const userReducer = userSlice.reducer

//actions
export const {setUser, setSearchStatus, setRepository} = userSlice.actions


//thunk
export const fetchUserData = (userName: string) => (dispatch: AppDispatch) => {
    dispatch(setSearchStatus({value: 'loading'}));

    githubApi.getUser(userName)
        .then(res => {
                dispatch(setUser(res.data));
                dispatch(setSearchStatus({value: 'success'}));
        })
        .catch(() => {
            dispatch(setSearchStatus({value: 'fail'}));
        })
}

export const fetchUserRepositories = (userName: string, currentPage: number = 1) => (dispatch: AppDispatch) => {
    githubApi.getRepositories(userName, currentPage)
        .then(res => {
            dispatch(setRepository(res.data));
        })
}


