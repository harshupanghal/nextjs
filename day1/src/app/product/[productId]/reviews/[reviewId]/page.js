import { notFound } from "next/navigation";

export default async function ProductReview({ params }) {
          const {productId,reviewId} = await params;
          if(parseFloat(reviewId)> 1000 ) {
notFound();
          }
          
          return <h1>Product review {reviewId} about {productId}</h1>;
        }
        