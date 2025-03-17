import { cookies } from "next/headers"

export default async function Profile() {
          console.log("\nabout page is server component\n")
          const cookieStore =  await cookies();
          const theme = cookieStore.get("theme");
          console.log(theme)
          return(
                    <>
                    <h1>about page {new Date().toLocaleDateString()}</h1>
                    </>

          )
}