import { cookies } from "next/headers";

export const getOidcState = async () => (await cookies()).get("state")!.value;
