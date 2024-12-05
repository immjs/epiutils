import { cookies } from "next/headers";

export const getTheme = async () =>
  ((await cookies()).get("theme")?.value || "light") as "light" | "dark";
