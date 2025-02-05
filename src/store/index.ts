import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './counter/counterSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import pokemonsSlice from './pokemons/pokemonsSlice';
import { localStorageMiddleware } from "./middlewares/localstorage.middleware";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    pokemons: pokemonsSlice
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  //   .concat( localStorageMiddleware )
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
