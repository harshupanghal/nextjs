import Link from "next/link"

export default function Home() {
          return <>
                    <h1>Harsh learning next</h1>
                    <Link href='/'>Home</Link>
                    <Link href='/blog'>Blog</Link>
                    <Link href='/product'>Products</Link>
          </>
}