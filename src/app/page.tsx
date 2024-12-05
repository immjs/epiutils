import { getTheme } from "@/lib/theme-server";
import { ApplyContexts } from "@/app/layout-contexts";
import { getToken } from "@/lib/csrf-server";
import Success from "./page-client";
import { getOidcState } from "@/lib/oidcstate-server";

export default async function Page() {
  return (
    <ApplyContexts ogTheme={await getTheme()} oidcState={await getOidcState()} csrf={await getToken()}>
      <Success />
    </ApplyContexts>
  );
}
