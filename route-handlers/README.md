## Route Handlers

- Route handlers run server-side, allows us to create custom request handlers for a given route.
- They are defined in `route.js` file.
- Route handlers are equivalent of API routes in Page router. supported routes are : _GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS_
- If an unsupported route is called, Next.js return a `405 Method Not Allowed` Response.
- They are flexible and can be nested
  > By default if `page.js` and `route.js` are on the same level inside a rorute folder, then the route handler will take over the page.js and it will show its data. To prevent this we have to make a new `api` folder and move our route-handler to that folder.

### GET(), POST()

To make these request handlers, just define them inside a route.js

```js
import { comments } from "./data";

export async function GET() {
  return Response.json(comments);
}

export async function POST(request) {
  const comment = await request.json();
  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
```

### Dynamic Route Handlers

Same as routes, here also define a folder enclosed in `[]` extract id from params, match the id of comment and return if present.

```js
import { comments } from "../data";
export async function GET(_request, { params }) {
  const { id } = await params;
  const comment = comments.find((comment) => comment.id === parseInt(id));
  return Response.json(comment);
}
```

### PATCH Request

Lets us make partial modifications to a resource.

```js
export async function PATCH(request, { params }) {
  const { id } = await params;
  const body = await request.json();
  const { text } = body;

  const index = comments.findIndex((comment) => comment.id === parseInt(id));
  comments[index].text = text;

  return Response.json(comments[index]);
}
```

### DELETE() Request

Deleting values from data

```js
export async function DELETE(request, { params }) {
  const { id } = await params;
  const index = comments.findIndex((comment) => comment.id === parseInt(id));
  const deletedComment = comments[index];
  comments.splice(index, 1);
  return Response.json(deletedComment);
}
```

### URL Query Parameters

Used for searching,sorting, pagination and filtering etc.

```js
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filteredComments = query
    ? comments.filter((comment) => comment.text.includes(query))
    : comments;
  return Response.json(filteredComments);
}
```

### Headers

- Represent the metadata associated with an API request and response.

  **Request Headers**
  These are sent by the client, such as web browser to the sever. They contain essential information about the request, which helps the server understand and process it correctly.

  _User-Agent_ which identifies the browser and operation system to the server.
  _Accept_ which indicates the content types like text, video or image formats that the client can process.
  _Authorization_ header ueed by the client to authenticate itself to the server.

  **Response Headers**
  These are sent back from the server to the client. They provide information about the server and the data being sent in the response.

  _Content-Type_ header which indicates the media type of the response. It tells the client what the data type of the returned content is, such as text/html for HTML documents, application/json for json data etc.

  Two ways to handle headers :

  1.  Using `request` parameter:
      ```js
      export async function GET(request) {
        const requestHeaders = new Headers(request.headers);
        console.log(requestHeaders.get("Authorization"));
        return new Response("Profile API data");
      }
      ```
  2.  Using Header function:
      ```js
      import { headers } from "next/headers";
      export async function GET(request) {
        const headerList = await headers();
        console.log(headerList.get("Authorization"));
        return new Response("Profile API data");
      }
      ```

> _The headers returned from header function are read onl. To set new header we have to return a new response with custom header :_

```js
return new Response("Profile API data", {
  headers: {
    "Content-Type": "text/html",
  },
});
```

### Cookies

- Cookies are small pieces of data that a server sends to a user's web browser.
- The browser can store the cookies and send them back to the same server with future requests.
- Cookies serve three main purposes :

  - managing sessions (like user logins and shopping carts)
  - handling personalization (such as user prefrences and themes)
  - tracking (like recording and analyzing user behaviour)

- Two ways to set and get cookies:

1. By returning a new response with set get cookie header:

   **_To set Cookie_**

   ```js
   return new Response("Profile API data", {
     headers: {
       "Content-Type": "text/html",
       "Set-Cookie": "theme=dark",
     },
   });
   ```

   **_To get Cookie_**

   ```js
   const theme = request.cookies.get("theme");
   console.log(theme);
   ```

2. Using cookie function

   **_Set and Get_**

   ```js
   import { headers,cookies } from "next/headers";
   .
   .
   .
   const cookieStore  = await cookies();
   cookieStore.set("resultsPerPage","20")
   console.log(cookieStore.get("resultsPerPage"))
   ```

### Redirects

### Caching

- Route handlers are not cached by default but you can opt into caching when using the GET method.

  > **Caching doesn't happen in development mode and only works with GET method other methods like POST,PUT,DELETE are never cached. Also if you're using dynamic functions like headers() and cookies() or working with the request object in your GET method, caching won't be applied.**

- To cache a route just add this at the top, it will change data only on rebuilt :
  `export const dynamic = "force-static";`

- If you want to update data without rebuilding the entire application, you can revalidate cached data using _incremental static regeneration_. To do this add this at the top of file. It will revalidate data every 10 seconds.
  `export const revalidate = 10;`

### Middleware

- It is a powerful feature that lets us intercept and control the flow of requests and responses throughout your application.
- It does this at a global level, (create a `middleware.js` in src folder) significantly enhancing features like redirects, URL rewrites, authentication, headers, cookies and more..
- Middleware lets you specify paths where it should be active

  - Custom matcher config
    _When someone navigates to "/profile" it will be redirected to home page :_

  ```js
  import { NextResponse } from "next/server";
  export function middleware(request) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  export const config = {
    matcher: "/profile",
  };
  ```

- Conditional statements
  _When someone navigates to "/profile" it will be redirected to hello page :_

  ```js
  import { NextResponse } from "next/server";

  export function middleware(request) {
    if (request.nextUrl.pathname === "/profile") {
      return NextResponse.redirect(new URL("/hello", request.url));
    }
  }
  ```

  > it also can rewrite the url, while being on same url it will show different page :

  ```js
  import { NextResponse } from "next/server";

  export function middleware(request) {
    if (request.nextUrl.pathname === "/profile") {
      return NextResponse.rewrite(new URL("/hello", request.url));
    }
  }
  ```

  > in middleware we can also play with cookies and headers :

  ```js
  import { NextResponse } from "next/server";

  export function middleware(request) {
    const response = NextResponse.next();
    const themePrefrence = request.cookies.get("theme");
    if (!themePrefrence) {
      response.cookies.set("theme", "dark");
    }

    response.headers.set("custom-header", "custom-value");

    return response;
  }
  ```

  
