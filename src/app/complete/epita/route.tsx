import { getOidcState } from "@/lib/oidcstate-server";

export async function GET(request: Request) {
  const urlSearch = new URL(request.url).searchParams;
  if (!(urlSearch.has('state'))) return new Response("Missing state", { status: 412 });
  if (urlSearch.get('state') !== await getOidcState()) return new Response("Invalid state", { status: 403 });

  console.log(new URLSearchParams({
    grant_type: 'authorization_code',
    client_id: process.env.NEXT_PUBLIC_FORGE_CLIENT_ID!,
    client_secret: process.env.FORGE_SECRET_KEY!,
    code: urlSearch.get('code')!,
    redirect_uri: `${process.env.NEXT_PUBLIC_BASE_URL}/complete/epita/`,
  }).toString());
  
  await fetch(`${process.env.NEXT_PUBLIC_FORGE_BASE_URL}/token`, {
    // headers: {
    //   'Content-Type': 'application/x-www-form-urlencoded',
    //   'Authorization': `Basic ${process.env.NEXT_PUBLIC_FORGE_CLIENT_ID}:${process.env.FORGE_SECRET_KEY}`
    // },
    // method: 'POST',
    // body: `grant_type=authorization_code&code=${urlSearch.get('code')}&redirect_uri=${encodeURIComponent(request.url)}`,
    method: 'POST',
    headers: {'content-type': 'application/x-www-form-urlencoded'},
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: process.env.NEXT_PUBLIC_FORGE_CLIENT_ID!,
      client_secret: process.env.FORGE_SECRET_KEY!,
      code: urlSearch.get('code')!,
      redirect_uri: `${process.env.NEXT_PUBLIC_BASE_URL}/complete/epita/`,
    }),
  })
    .then((v) => v.json());
}
