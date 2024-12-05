import { getTheme } from "@/lib/theme-server";
import { ApplyContexts } from "@/app/layout-contexts";
import { getToken } from "@/lib/csrf-server";
import Home from "./page-client";
import { getOidcState } from "@/lib/oidcstate-server";
import { cookies } from "next/headers";
import HomeLoggedIn from "./page-loggedin";
import { jwtDecode } from "jwt-decode";

export default async function Page() {
  const [theme, oidcState, token, idToken] = await Promise.all([
    getTheme(),
    getOidcState(),
    getToken(),
    cookies()
      .then((v) => v.get('id_token')),
  ]);

  return (
    <ApplyContexts ogTheme={theme} oidcState={oidcState} csrf={token}>
      {idToken ? <HomeLoggedIn idToken={jwtDecode(idToken.value)} /> : <Home />}
    </ApplyContexts>
  );
}
