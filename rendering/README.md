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

![ServerClient](./public/image12.png)
![ServerClient](./public/image13.png)
![ServerClient](./public/image14.png)
![ServerClient](./public/image15.png)
![ServerClient](./public/image16.png)