"use client";
import { createContext, Dispatch, SetStateAction, useContext } from "react";

export const themeContext = createContext<['light' | 'dark', Dispatch<SetStateAction<'light' | 'dark'>>]>(null!);

export function useTheme() {
  return useContext(themeContext)[0];
}
