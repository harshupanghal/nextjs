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

> to make slugs optional and showing a default page for docs only : `[[...slug]]` : 

` return <><h1>Docs home page</h1></>` at end of component function