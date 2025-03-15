import { notFound } from "next/navigation";

function getRandomInt(count) {
  return Math.floor(Math.random() * count);
}
export default async function ProductReview({ params }) {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("error loading review");
  }
  const { productId, reviewId } = await params;
  if (parseFloat(reviewId) > 1000) {
    notFound();
  }

  return (
    <h1>
      Product review {reviewId} about {productId}
    </h1>
  );
}
