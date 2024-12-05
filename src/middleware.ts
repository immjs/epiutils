import { createId } from "@paralleldrive/cuid2";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";

export async function middleware(request: NextRequest) {
  request.cookies.delete("id_token_decoded");

  if (request.cookies.has("id_token")) {
    const decoded = jwtDecode(request.cookies.get("id_token")!.value);
    request.cookies.set("id_token_decoded", JSON.stringify(decoded));
  }

  if (request.method.toUpperCase() === "POST") {
    const expectedCsrf = request.cookies.get("csrf")?.value;
    if (!expectedCsrf) {
      return new NextResponse("CSRF token not initialized", { status: 403 });
    }
    if (expectedCsrf !== (await request.formData()).get("csrf")){
      return new NextResponse("CSRF token mismatch", { status: 403 });
    }
  }

  const token = request.cookies.get("csrf")?.value || createId();
  const state = request.cookies.get("state")?.value || createId();

  request.cookies.delete("csrf");
  request.cookies.set("csrf", token);

  request.cookies.delete("state");
  request.cookies.set("state", state);

  const response = NextResponse.next({
    headers: {
      Cookie: request.cookies.toString(),
      "X-Url": request.url,
    },
  });

  response.cookies.set("csrf", token, {
    secure: true,
    sameSite: true,
    maxAge: 604800,
  });
  response.cookies.set("state", state, {
    secure: true,
    sameSite: true,
    maxAge: 3600,
  });
  response.headers.set("Cache-Control", "maxAge=604800");
  return response;
}
