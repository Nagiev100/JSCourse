import {applyMiddleware, createStore} from "@reduxjs/toolkit";
import {thunk} from "redux-thunk";
import {rootReducer} from "./reducers";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const store = createStore(rootReducer,applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;