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
export async function GET(_request,{params})  {
          const {id} = await params;
          const comment = comments.find((comment)=> comment.id === parseInt(id));
          return Response.json(comment);
}
 ```

 ### PATCH Request
 Lets us make partial modifications to a resource.
 ```js
 export async function PATCH(request,{params}) {
          const {id} = await params;
          const body = await request.json();
          const {text} = body;

          const index = comments.findIndex((comment)=> comment.id === parseInt(id));
          comments[index].text = text;

          return Response.json(comments[index]);
}
 ```

 ### DELETE() Request
 Deleting values from data

 ```js
 export async function DELETE(request,{params}){
          const {id} = await params;
          const index = comments.findIndex((comment)=> comment.id === parseInt(id));
          const deletedComment = comments[index];
          comments.splice(index,1);
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

   *User-Agent* which identifies the browser and operation system to the server.
   *Accept* which indicates the content types like text, video or image formats that the client can process.
   *Authorization* header ueed by the client to authenticate itself to the server.

   **Response Headers**
   These are sent back from the server to the client. They provide information about the server and the data being sent in the response.

   *Content-Type* header which indicates the media type of the response. It tells the client what the data type of the returned content is, such as text/html for HTML documents, application/json for json data etc.