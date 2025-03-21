![Client Data Fetching](./public/image1.png)
![Server Data Fetching](./public/image2.png)

> you should really only use client components for data fetching when you absolutely need it like , real time updates or data depends on client side interactions that you can't predict on server side, else use server side data fetching.

![Request Memoization](./public/image3.png)
![Tyes of Data Fetching](./public/image4.png)

> The key to parallel data fetching is initiating the requests before awaiting any of them. Useful when there are too many requests and they don't depend on each other. eg:

```js
async function getUserPosts(userId) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  return res.json();
}

async function getUserAlbums(userId) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
  );
  return res.json();
}

export default async function Page({ params }) {
  const { userId } = await params;

  const postsData = getUserPosts(userId);
  const albumsData = getUserAlbums(userId);

  const [posts, albums] = await Promise.all([postsData, albumsData]);
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-8">User Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Posts</h2>
          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-lg font-bold mb-3 text-gray-800 leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Albums</h2>
          <div className="space-y-4">
            {albums.map((album) => (
              <div key={album.id} className="bg-white shadow-md rounded-lg p-6">
                <p className="text-gray-700">{album.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
```
