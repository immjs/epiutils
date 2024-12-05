"use client";
import { themeContext } from "@/lib/theme-client";
import { tokenContext } from "@/lib/csrf-client";
import { oidcStateContext } from "@/lib/oidcstate-client";
import { ReactNode, useState } from "react";

export function ApplyContexts({ children, ogTheme, oidcState, csrf }: ApplyContextsProps) {
  const [theme, setTheme] = useState<"light" | "dark">(ogTheme);
  return (
    <tokenContext.Provider value={csrf}>
      <oidcStateContext.Provider value={oidcState}>
        <themeContext.Provider value={[theme, setTheme]}>
          {children}
        </themeContext.Provider>
      </oidcStateContext.Provider>
    </tokenContext.Provider>
  );
}

interface ApplyContextsProps {
  children: ReactNode | ReactNode[];
  csrf: string;
  oidcState: string;
  ogTheme: "light" | "dark";
}
