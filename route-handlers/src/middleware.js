// import { NextResponse } from "next/server";

// export function middleware(request) { 
//           return NextResponse.redirect(new URL("/",request.url))
// }

// export const config = {
//           matcher : "/profile",
// }

//..................................................

// import { NextResponse } from "next/server";

// export function middleware(request) { 
//           if(request.nextUrl.pathname === '/profile'){
//           return NextResponse.redirect(new URL("/hello",request.url))
// }}

//..................................................


// import { NextResponse } from "next/server";

// export function middleware(request) { 
//           if(request.nextUrl.pathname === '/profile'){
//           return NextResponse.rewrite(new URL("/hello",request.url))
// }}


import { NextResponse } from "next/server";

export function middleware(request) { 
          const response =  NextResponse.next();
          const themePrefrence = request.cookies.get('theme')
          if (!themePrefrence){
                    response.cookies.set("theme","dark")
          }

          response.headers.set("custom-header","custom-value")

          return response;
}