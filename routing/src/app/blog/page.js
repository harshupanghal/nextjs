export default async function Blog() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("intentional delay");
    }, 2000);
  });
  
  return (
    <>
      <h1>blog page</h1>

    </>
  );
}
