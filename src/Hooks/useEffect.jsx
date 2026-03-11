import React from 'react'

const FetchEffect = () => {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    const aboartController = new AbortController();

    React.useEffect(() => {
      let isMounted = true; // Flag to track if component is mounted
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/posts/1', { signal: aboartController.signal })
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

            return () => {             
                aboartController.abort(); // Abort the fetch request if component unmounts  
                isMounted = false; // Cleanup function to set the flag to false when component unmounts
                console.log('Component unmounted, cleanup executed');
            }
    }, []);

    // Timer with cleanup
    React.useEffect(() => {
        const timer = setTimeout(() => {
            console.log('Timer executed');
        }, 5000);

        return () => {
            clearTimeout(timer);
            console.log('Timer cleared');
        }
    }, []);

    // Event listener with cleanup
    React.useEffect(() => {
        const handleResize = () => {
            console.log('Window resized');
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            console.log('Event listener removed');
        }
    }, []);

    // Debounce with useEffect 
    // I added it in the SearchFilter component, check there if you want to see how it works
  return (
    <div>
      {loading ? <p>Loading...</p> : error ? <p>Error: {error}</p> : <p>{data?.title}</p>}
    </div>
  )
}

export default FetchEffect;


