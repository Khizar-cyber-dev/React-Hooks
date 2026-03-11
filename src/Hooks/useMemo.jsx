import React from 'react'
import { lazy } from 'react';

const UseMemo = () => {
    // without useMemo, the expensiveComputation function will be called on every render, even if the count state hasn't changed. This can lead to performance issues, especially if the computation is resource-intensive.
    // const memoizedResult = expensiveComputation();

    // By using useMemo, we can memoize the result of the expensiveComputation function. It will only be re-computed when the count state changes, improving performance by avoiding unnecessary calculations on every render.
    const memoizedResult = React.useMemo(() => expensiveComputation(), []);
    const [count, setCount] = React.useState(0);
  return (
    <div>
        <h1>
            Using useMemo to memoize expensive calculations
        </h1>
        <h1>Even Sum: {memoizedResult.EvenNum}</h1>
        <h1>Odd Sum: {memoizedResult.OddNum}</h1>
        <button onClick={() => setCount(count + 1)}>Increment Count: {count}</button>
    </div>
  )
}

export default UseMemo

const expensiveComputation = () => {
    console.log('Running expensive computation...');
    let EvenNum = 0;
    let OddNum = 0;
    for (let i = 0; i < 1000000000; i++) {
      if(i % 2 === 0) {
        EvenNum += i;
      } else {
        OddNum += i;
      }
    }
    return { EvenNum, OddNum };
}