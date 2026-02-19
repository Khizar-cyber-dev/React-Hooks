// import { useEffect } from 'react'
// import { PostListWithData } from './components/FetchPost'

import React from "react";
import ModalComponent from "./components/ModalComponent";
import Todo from "./components/Todo";
import SearchFilter from "./components/SearchFilter";
import Form from "./components/Form";
import Otp from "./components/Otp";
import CartSystem from "./components/CartSystem";
import { useUserContext } from "./context/UserContext";

//import { useCallback } from "react"

// const Component = ({ props }) => {
//   if (!props || props.trim() === '' || props === null) {
//     return props = "No Data Available"
//   }
//   return (
//     <h1>
//       {props}
//     </h1>
//   )
// }

// const App = () => {
//   useEffect(() => {
//     async function fetchData() {
//       const data = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//       const json = await data.json()
//       console.log(json)
//     }
//     fetchData()
//   },[])
//   return (
//     <div>
//       <PostListWithData author="John Doe" />
//       <Component />
//     </div>
//   )
// }

// export default App

// const ChildComponent = ({ onAction }) => {
//   return (<button onClick={onAction}>Click Me</button>)
// }

// function App() {
//   const expensiveComputation = () => {
//     let sum = 0
//     for (let i = 0; i < 1000; i++) {
//       sum += i
//     }
//     return sum
//   }

//   const handleClick = useCallback(() => {
//     console.log('Button clicked!')
//   })
//   return (
//     <div>
//       <h1>Expensive Computation Result: {expensiveComputation()}</h1>
//       <ChildComponent onAction={handleClick} />
//     </div>
//   )
// }

// export default App;

// Using React.memo and useCallback to optimize re-renders
// import React, { useState, useCallback } from "react";
// function Parent() {
//   const [count, setCount] = useState(0);

//   const handleClick = useCallback(() => {
//     console.log("Clicked!");
//   }, []);
//   // const handleClick = () => {
//   //   console.log("Clicked!");
//   // }

//   return (
//     <>
//       <Child onClick={handleClick} />
//       <button onClick={() => setCount(count + 1)}>Increment Count: {count}</button>
//     </>
//   );
// }

// const Child = React.memo(({ onClick }) => {
//   console.log("Child rendered!");
//   return <button onClick={onClick}>Click</button>;
// });

// function App() {
//   return (
//     <div>
//       <Parent />
//     </div>
//   );
// }

// export default App;

// Using useMemo to memoize expensive calculations
// import React, { useState, useMemo } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");

//   const expensiveComputation = (num) => {
//     console.log("Computing...");
//     let sum = 0;
//     for (let i = 0; i < 1000000000; i++) {
//       sum += i;
//     }
//     return sum + num;
//   }
//   const memoizedValue = useMemo(() => expensiveComputation(count), [count]);
  
//   return (
//     <div>
//       <h1>Expensive Computation Result: {memoizedValue}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment Count</button>
//       <input type="text" placeholder="Type here..." value={text} onChange={(e) => setText(e.target.value)}/>
//       <p>Input Text: {text}</p>
//     </div>
//   );
// }

// export default App;

// Using useRef to manage focus on an input element
// import React, { useRef } from "react";

// function App() {
//   const inputRef = useRef(null);

//   const handleFocus = () => {
//     if (inputRef.current) {
//       inputRef.current.focus();
//     }
//   };

//   return (
//     <div>
//       <input ref={inputRef} type="text" placeholder="Focus me with the button" />
//       <button onClick={handleFocus}>Focus Input</button>
//     </div>
//   );
// }

// export default App;

// Using useReducer for state management
// import React, { useReducer } from "react";

// const intialState = { count: 0 };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'increment': 
//       return { count: state.count + 1 };
//     case 'decrement': 
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// }

// function App() {
//   const [state, dispatch] = useReducer(reducer, intialState);

//   return (
//     <div>
//       <h1>Count: {state.count}</h1>
//       <button onClick={() => dispatch({ type: 'decrement' })} disabled={state.count <= 0 ? true : false}>-</button>
//       <button onClick={() => dispatch({ type: 'increment' })} disabled={state.count >= 10 }>+</button>
//     </div>
//   );
// }

// export default App;

// Modren react lifeCycle methods using hooks
// import React, { useState, useEffect } from "react";
// import useFetch from "./components/useFetch";

// function Child() {
//   useEffect(() => {
//     console.log("Child mounted");

//     return () => {
//       console.log("Child unmounted");
//     };
//   }, []);

//   return <h2>I am Child</h2>;
// }

// export default function App() {
//   const [show, setShow] = useState(true);
//   const {data, loading, error} = useFetch({url: 'https://jsonplaceholder.typicode.com/posts'})
//   return (
//     <div>
//       <button onClick={() => setShow(!show)}>
//         Toggle Child
//       </button>

//       {loading && <p>Loading...</p>}
//       {error && <p>Error: {error.message}</p>}
//       {data && (
//         <ul>
//           {data.slice(0, 5).map((post) => (
//             <li key={post.id}>
//               <h3>{post.title}</h3>
//               <p>{post.body}</p>
//             </li>
//           ))}
//         </ul>
//       )}

//       {show && <Child />}
//     </div>
//   );
// }


// export default function App() {
//   const [isOpen, setIsOpen] = React.useState(false);
//   const { theme, seTheme} = useUserContext();

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };
//   return (
//     // <Todo />
//     <>
//     {/* <button onClick={openModal}>Open Modal</button>
//     <ModalComponent isOpen={isOpen} onClose={closeModal} title={"Khizar"}>
//       <p style={{color: "red"}}>This is the content of the modal.</p>
//     </ModalComponent> */}
//     {/* <SearchFilter /> */}
//     {/* <Form /> */}
//     {/* <Otp /> */}
//     <CartSystem />
//     </>
//   )
// }

export default function App() {
  const { theme, setTheme } = useUserContext();

  // Toggle function
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      style={{
        width: '100%',
        height: "100vh",
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <h1>Theme is {theme}</h1>
      <button onClick={toggleTheme}>
        Change theme
      </button>
      <SearchFilter />
    </div>
  );
}
