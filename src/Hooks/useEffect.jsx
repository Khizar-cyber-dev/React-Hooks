import React from 'react'

const FetchEffect = () => {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then(json => {
                setData(json);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);
  return (
    <div>
      {loading ? <p>Loading...</p> : error ? <p>Error: {error}</p> : <p>{data?.title}</p>}
    </div>
  )
}

export default FetchEffect;
