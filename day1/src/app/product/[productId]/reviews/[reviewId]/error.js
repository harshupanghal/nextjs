"use client";
import { useRouter } from "next/navigation";
import { startTransition } from "react";
export default function ErrorBoundary({ error, reset }) {
  
          const router = useRouter();
          const reload = ()=>{
                    startTransition(()=>{
                              router.refresh();
                              reset();
                    })
          }
  
          return (
    <>
      <h1>{error.message}</h1>
      {/* <h1>error in client component</h1> */}

      <button onClick={reload}> Try again </button>
    </>
  );
}
