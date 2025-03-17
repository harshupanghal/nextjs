![Static rendering](./public/image1.png)
![Dynamic rendering](./public/image2.png)
![Dynamic rendering](./public/image3.png)
![Dynamic rendering](./public/image4.png)
![generateStaticParams](./public/image5.png)
![Dynamic Params](./public/image6.png)
![Dynamic Params](./public/image7.png)
![Streaming](./public/image8.png)

```js
import { Suspense } from "react";

import { Product } from "@/components/product";
import { Reviews } from "@/components/reviews";

export default function ProductDetailPage() {
  return (
    <div>
      <h1>Product detail page</h1>
      <Suspense fallback={<p>Loading product details...</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>Loading reviews...</p>}>
        <Reviews />
      </Suspense>
    </div>
  );
}
```

![ServerClient](./public/image9.png)
![ServerClient](./public/image10.png)
![ServerClient](./public/image11.png)

> To prevent the server code being exposed to client side, we use `server-only` package. To use this, just install it and import it in the file whee is your secure server logic.

> Some packages are still dependent on client component features, to use them in a server component, create a client component with those packages and import and use those client components in server components.

![context provider](./public/image12.png)
![ServerClient](./public/image13.png)

> To prevent the client code being exposed to client side, we use `client-only` package. To use this, just install it and import it in the file whee is your secure client logic.

> Try to place client components as deep as possible inside a component tree. Think 'use client' as a line, when you draw it on a component, all its child components also become child component, causing to send large chunks of code to client.

> when you nest a server component inside other client component, it won'twork becuase when we do this, the sever component becomes a client component. To make this work, we have to pass the server component as a prop/children to client component, instead of calling and placing it, we have to wrap it around a client component.

![ServerClient](./public/image14.png)
