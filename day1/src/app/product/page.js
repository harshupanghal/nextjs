import Link from "next/link"

export default function ProductList() {
          const productId = 100;
          return <><h1>Product list</h1>
          <Link href='/'>Home</Link>
                    <li>
                              <ul>Product 1</ul>
                              <ol>Product 2</ol>
                              <ol>Product 3</ol>
                    </li>

<Link href={`/product/${productId}`}>Product {productId}</Link>

          </>
}