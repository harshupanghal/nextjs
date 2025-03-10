export default async function ProductReview({ params }) {
          const {productId,reviewId} = await params;
          
          return <h1>Product review {reviewId} about {productId}</h1>;
        }
        