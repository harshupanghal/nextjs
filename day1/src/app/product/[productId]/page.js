export default async function ProductDetails({ params }) {
  const productId = (await params).productId;
  return <h1>Product details about {productId}</h1>;
}
