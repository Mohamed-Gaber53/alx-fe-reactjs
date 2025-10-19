// src/components/PostsComponent.jsx
import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

const PostsComponent = () => {
  const {
    data: posts,
    error,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 5000, // الكاش يفضل صالح 5 ثواني
    cacheTime: 1000 * 60 * 5, // يحتفظ بالكاش 5 دقائق
    refetchOnWindowFocus: true, // يعيد الجلب لما المستخدم يرجع للنافذة
    keepPreviousData: true, // يحتفظ بالبيانات القديمة أثناء الجلب الجديد
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? "Refreshing..." : "🔄 Refresh Posts"}
      </button>

      <ul>
        {posts?.slice(0, 10).map((post) => (
          <li key={post.id} style={{ marginBottom: "15px" }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
