import { createSlice, PayloadAction } from '@reduxjs/toolkit'

//todo move to another file type
export type Theme = "dark" | "light";
export type TLang = "ru" | "en";


interface SystemState {
    theme: Theme,
    lang: TLang
}

const initialState: SystemState = {
    theme: "light",
    lang: "ru"
}

export const systemSlice = createSlice({
    name: 'system',
    initialState,
    reducers: {
        changeTheme: (state, action: PayloadAction<Theme>) => {
            state.theme = action.payload
        },
        changeLang: (state, action: PayloadAction<TLang>) => {
            state.lang = action.payload
        },
    }
})

export const { changeTheme , changeLang} = systemSlice.actions

