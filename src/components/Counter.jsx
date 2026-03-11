import React from 'react'

const Counter = () => {
    let [count, setCount] = React.useState(0);
    let [running, setRunning] = React.useState(false);

    React.useEffect(() => {
        if(!running) return;

        const interval = setInterval(() => {
            setCount(prev => prev + 1);
        }, 1000);
        return () => {
            clearInterval(interval);
            console.log('Interval cleared');
        }
    }, [running])
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setRunning(!running)}>{running ? 'Stop' : 'Start'}</button>
        <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default Counter