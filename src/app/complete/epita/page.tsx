"use client";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export default function IdTokenStore() {
  useEffect(() => {
    const data = new URLSearchParams(location.hash.slice(1));
    const cookies = Object.fromEntries(document.cookie.split(/; /g).map((v) => v.split('=')));

    if (!data.has('id_token') || !cookies.state) return location.replace('/');
    const decodedIdToken = jwtDecode(data.get('id_token')!) as any;

    if (decodedIdToken.nonce !== cookies.state) return location.replace('/');

    document.cookie = `id_token=${data.get('id_token')};max-age=${data.get('expires_in')};path=/`;

    return location.replace('/');
  });
}
