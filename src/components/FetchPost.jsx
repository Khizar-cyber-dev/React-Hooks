import PostList from "./PostList";
import WithDataFetching from "./WithDataFetching";

// Mock data fetching function (simulates an API call)
const fetchPosts = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1, title: 'HOC Deep Dive', body: 'The body of the first post...' },
        { id: 2, title: 'React Hooks vs HOCs', body: 'The body of the second post...' },
      ]);
    }, 1000);
  });
};

// Enhanced Component: This component is now wrapped with the data fetching logic
export const PostListWithData = WithDataFetching(PostList, fetchPosts);
