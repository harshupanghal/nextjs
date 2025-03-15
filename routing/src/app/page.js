
import Link from "next/link"
import './global.css'

export default function Home() {
          return <div className="m-10 space-y-10">
                    <h1>Harsh learning next</h1>
                    <div className="flex flex-col justify-between max-w-fit gap-2 text-blue-500">

                    <Link href='/'>Home</Link>
                    <Link href='/blog'>Blog</Link>
                    <Link href='/product'>Products</Link>
                    <Link href='/order-product'>Buy Product</Link>
                    <Link href='/articles/breaking-news-123?lang=en'>Read in english</Link>
                    <Link href='/articles/breaking-news-123?lang=fr'>Read in french</Link>
                    
                    </div>
          </div>
}