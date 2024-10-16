// src/app/blog/[postId]/page.tsx
interface Post {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
}

async function fetchPost(postId: string): Promise<Post> {
  const res = await fetch(`http://localhost/wordpress/wp-json/wp/v2/posts/${postId}`);
  return res.json();
}

export default async function PostPage({ params }: { params: { postId: string } }) {
  const post = await fetchPost(params.postId);

  return (
    <div style={{ padding: '2rem' }}>
      <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
}
