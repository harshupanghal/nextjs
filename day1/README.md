# Day 1

---

## Routing 

Next.js has a file system based routing system.

URLs you can access in your browser are determined by how you orgainze your file and folders in your code.

### Routing conventions

1. All routes must live inside the app folder
2. Route files must be named either page.js or page.tsx
   
   When these conventions are followed , the file automatically becomes available as a route.

### Dynamic Routes

  create a folder with square brackets `[productId]`. Inside it create a page.js. Inside page.js component grab the product id using params prop to show dynamic content.
  
  eg. `page.js`

  ```javascript
  export default async function ProductDetails({ params }) {
  const productId = (await params).productId;
  return <h1>Product details about {productId}</h1>;
}
```

### Nested Dynamic Routes

  create a nested folder inside [productId] name it , anything `xyz`, inside `xyz` create another folder `[reviewId]`, create a `page.js` and do this :

  ``` javascript
export default async function ProductReview({ params }) {
          const {productId,reviewId} = await params;
          
          return <h1>Product review {reviewId} about {productId}</h1>;
        }
  ```

### Catch All Segments

inside app folder create a folder `docs` inside it create a folder `[...slug]`. inside it create create a `page.js`, when you go to any url , it will show the same page. For customization : 

```javascript
export default async function Docs({ params }) {
  const { slug } = await params;
  if (slug?.length === 2) {
    return (
      <h1>
        docs for feature{slug[0]} and concept {slug[1]}
      </h1>
    );
  } else if (slug.length === 1) {
    return <h1>Viewing docs for feature {slug[0]}</h1>;
  }
}
```

> to make slugs optional and showing a default page for docs only : `[[...slug]]` : ` return <><h1>Docs home page</h1></>` at end of component function

### Not Found Page

1. create a file in app folder named exactly like this : `not-found.js`.

2. Another way is to use `notFound` function from `"next/navigation"` and trigger it on specific condition you want : 
```javascript

import { notFound } from "next/navigation";

export default async function ProductReview({ params }) {
          const {productId,reviewId} = await params;
          if(parseFloat(reviewId)> 1000 ) {
          notFound();
          }
          return <h1>Product review {reviewId} about {productId}</h1>;
        }
```

3. One more, if you want to create a custom not found page, like for product reviews, limiting them upto 1000, create another `not-found.js` in that folder and customize it.

> we can't use props in not found component , to use custom message based on route, we have to use react `usePathname` hook.
 ```javascript
 'use client'
import { usePathname } from "next/navigation"

export default function NotFound() {
          const pathname = usePathname();
          const productId = pathname.split('/')[2];
          const reviewId = pathname.split('/')[4];
          return <>
          <h2>Review {reviewId} not found for product {productId}</h2>      
          </>
}
```

#### File Colocation
 A route only becomes public when it has a `page.js` or `page.tsx` file. It has to be defaulted export component by page.js

#### Private Folders
 - A way to tell Next.js that it is a internal stuff and don't include it in routing system. The folder and all its sub-folders are excluded from the routing.
 - Just add an underscore before folder name : `_stats`.
 - If you want to add an underscore in url, in place of underscore use : `%5F`

### Route Groups 
Logically organizing our routes without affecting the url.
  - like there are 3 routes : login , register and forgot-password. To group them , create a new folder named auth and surround it wiht paranthese : `(auth)`.
  -  Move all routes to this folder. This tells Nextjs to treat it as a organizational folder only.
  -  We can nest them also
  
  
## Layouts

        