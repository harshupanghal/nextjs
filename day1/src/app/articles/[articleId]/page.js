'use client'
import Link from "next/link"
import { use } from "react";

import '../../global.css';
export default  function NewArticles(params, searchParams) {

          // const {articleId} =  use(params);
          // const {lang='en'} =  use(searchParams);


          return (
          <div className="m-8">
                    <h1>News Article</h1>
                    {/* <p> Reading in {lang}</p> */}

                    <div className="flex items-center gap-4 mt-6">
                    {/* <Link  href={`/articles/${articleId}?lang=en`}> English </Link> */}

                    {/* <Link  href={`/articles/${articleId}?lang=es`}> Spanish</Link> */}

                    {/* <Link  href={`/articles/${articleId}?lang=fr`}> French</Link> */}
                    </div>
          </div>)
}