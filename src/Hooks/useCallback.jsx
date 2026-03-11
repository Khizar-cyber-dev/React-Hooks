import React from 'react'

const UseCallback = () => {
    const [count, setCount] = React.useState(0);
    const [text, setText] = React.useState('');
    const handleClick = React.useCallback(() => {
        console.log(count);
        setCount(prev => prev + 1);
    }, [])
    console.log('Parent component rendered');
    console.log('Text state:', text);
  return (
    <div>
        <ChildComponent num={count} fn={handleClick}/>
        <input type="text" alt="Mango" value={text} onChange={(e) => setText(e.target.value)}/>
    </div>
  )
}

export default UseCallback

const ChildComponent = React.memo(({ num, fn }) => {
    console.log('Child component rendered');
    return (
        <div>
            <h1>Count: {num}</h1>
            <button onClick={fn}>Increment</button>
        </div>
    )
})

// In this example, the handleClick function is memoized using useCallback. It will only be recreated if the dependencies specified in the dependency array change. Since the dependency array is empty, the function will be created only once and will not change on subsequent renders. This allows the ChildComponent to avoid unnecessary re-renders when the parent component re-renders, as the reference to the handleClick function remains the same.