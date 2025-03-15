import Link from "next/link"

export default function ProductList() {
          const productId = 100;
          return <div className="space-y-6"><h1>Product list</h1>
          <Link href='/'>Home</Link>
                    <li>
                              <ol>Product 1</ol>
                              <ol>Product 2</ol>
                              <ol>Product 3</ol>
                    </li>

<Link href={`/product/${productId}`}>Product {productId}</Link>


          </div>
}