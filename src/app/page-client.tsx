"use client";
import { useOidcState } from '@/lib/oidcstate-client';
import { useTranslations } from 'next-intl';

export default function Home() {
  const translationsCommon = useTranslations('common');
  
  const redirectUri = `${process.env.NEXT_PUBLIC_BASE_URL}/complete/epita/`;
  
  const oidcState = useOidcState();
  
  const oauthUrl = `${process.env.NEXT_PUBLIC_FORGE_BASE_URL}/authorize
?client_id=${process.env.NEXT_PUBLIC_FORGE_CLIENT_ID}\
&response_type=code
&state=${oidcState}
&scope=openid%20profile%20email%20epita%20picture
&redirect_uri=${encodeURIComponent(redirectUri)}`;
  
  return (
    <>
      <h1 className="text-4xl m-0 w-fit font-head">{translationsCommon('epiutils')}</h1>
      <a className="w-full" href={oauthUrl}>
        <button className="p-4 text-[1em] bg-fg text-bg font-bold w-full rounded-lg">Log in with Forge ID</button>
      </a>
    </>
  );
}
