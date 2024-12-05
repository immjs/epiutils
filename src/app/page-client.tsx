"use client";
import { useOidcState } from '@/lib/oidcstate-client';
import { useTranslations } from 'next-intl';
import { Epiutils } from './components/epiutils';

export default function Home() {
  const tEntryPage = useTranslations("entry_page");

  const redirectUri = `${process.env.NEXT_PUBLIC_BASE_URL}/complete/epita/`;
  
  const oidcState = useOidcState();

  const oauthUrl = `${process.env.NEXT_PUBLIC_FORGE_BASE_URL}/authorize\
?client_id=${process.env.NEXT_PUBLIC_FORGE_CLIENT_ID}\
&response_type=id_token\
&nonce=${oidcState}\
&scope=openid%20profile%20email%20epita%20picture\
&redirect_uri=${encodeURIComponent(redirectUri)}`;
  
  return (
    <>
      <Epiutils />
      <a className="w-full" href={oauthUrl}>
        <button className="p-4 text-[1em] bg-fg text-bg font-bold w-full rounded-lg">{tEntryPage("login")}</button>
      </a>
    </>
  );
}
