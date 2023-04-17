import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  console.log(req);
  const token = req.headers.get("token"); // get token from request header
  const userIsAuthenticated = true; // TODO: check if user is authenticated
  if (!userIsAuthenticated) {
    const signinUrl = new URL("/", req.url);
    return NextResponse.redirect(signinUrl);
  }

  return NextResponse.next();
}

export const config = { matcher: ["/blog/:id*", "/post", "/user"] };
