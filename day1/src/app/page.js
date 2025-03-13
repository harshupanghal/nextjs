import Link from "next/link"

export default function Home() {
          return <>
                    <h1>Harsh learning next</h1>
                    <Link href='/'>Home</Link>
                    <Link href='/blog'>Blog</Link>
                    <Link href='/product'>Products</Link>
                    <Link href='/articles/breaking-news-123?lang=en'>Read in english</Link>
                    <Link href='/articles/breaking-news-123?lang=fr'>Read in french</Link>
          </>
}