'use client'
import { useRouter,redirect } from "next/navigation"

export default function OrderProduct() {
          const router = useRouter();
          const handleClick = () => {
                    console.log("placing your order")
                    setTimeout(() => {

                              // router.push('/');    // -- using router
                              redirect('/')          //  -- using redirect
                    }, 3000);
          }

          return (<>

                    <h1> product lazeez</h1>
                    <button onClick={handleClick} className="m-2 p-2 rounded-xl bg-amber-900">buy now</button>
          </>)
}