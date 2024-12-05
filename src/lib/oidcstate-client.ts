"use client";
import { createContext, useContext } from "react";

export const oidcStateContext = createContext<string>("");

export function useOidcState() {
  return useContext(oidcStateContext);
}
