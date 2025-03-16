import { headers,cookies } from "next/headers";

export async function GET(request) {
  // const requestHeaders = new Headers(request.headers)
  // console.log(requestHeaders.get("Authorization"));
  const headerList = await headers();
  console.log(headerList.get("Authorization"));

  const theme = request.cookies.get("theme")
  console.log(theme);

  const cookieStore  = await cookies();
  cookieStore.set("resultsPerPage","20")
  console.log(cookieStore.get("resultsPerPage"))

  return new Response("Profile API data",{
          headers: {
                    "Content-Type" : "text/html",
                    "Set-Cookie" : "theme=dark",
          }
  });
}
