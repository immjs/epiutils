"use client";
import { createContext, useContext } from "react";

export const tokenContext = createContext<string>("");

export function useToken() {
  return useContext(tokenContext);
}
