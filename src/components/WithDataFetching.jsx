import React from 'react'

export const WithDataFetching = (WrappedComponent, fetchData) => {
    return function DataFetchingComponent(props) {
        const [data, setData] = React.useState(null)
        const [loading, setLoading] = React.useState(true)
        const [error, setError] = React.useState(null)
        React.useEffect(() => {
            let isMounted = true
            fetchData()
                .then((response) => {
                    if (isMounted) {
                        setData(response)
                        setLoading(false)
                    }
                })
                .catch((err) => {
                    if (isMounted) {
                        setError(err)
                        setLoading(false)
                    }
                })
            return () => {
                isMounted = false
            }
        }, [])
        return (
            <WrappedComponent
                {...props}
                data={data}
                loading={loading}
                error={error}
            />
        )
    }
}

export default WithDataFetching