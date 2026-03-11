import React, { use } from 'react';

export default function InfiniteScroll() {
    const [page, setpage] = React.useState(1);
    const [hasMore, setHasMore] = React.useState(true);
    const observerObject = React.useRef();
    const [loading, setLoading] = React.useState(false);
    const [post, setPost] = React.useState([]);

    const fetchPosts = React.useCallback(async (page) => {
        setLoading(true);
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
        const posts = await data.json();
        setPost(prevPosts => [...prevPosts, ...posts]);
        setLoading(false);
        if (posts.length === 0) {
            setHasMore(false);
        }
    }, [page]);

    React.useEffect(() => {
        fetchPosts(page);
    }, [fetchPosts, page]);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasMore && !loading) {
                    setpage(prevPage => prevPage + 1);
                }
            }
        );

        if (observerObject.current) {
            observer.observe(observerObject.current);
        }

        return () => observer.disconnect();
        
    }, [post, hasMore]);
    return (
        <div>
                <h1>Infinite Scroll Component</h1>
                <ul>
                    {post.map((p) => (
                        <li key={p.id}>{p.title}</li>
                    ))}
                </ul>
                <div ref={observerObject} style={{ height: '20px' }}></div>
                {loading && <p>Loading...</p>}
                {!hasMore && <p>No more posts to load.</p>}
        </div>
    )
}