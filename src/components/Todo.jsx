// Making a todo App using localStorage
import React from "react";

export default function Todo() {
    const [todos, setTodos] = React.useState([])
    const [inputValue, setInputValue] = React.useState('')

    React.useEffect(() => {
        const storedTodos = localStorage.getItem('todos');
        console.log('Fetched todos from localStorage:', storedTodos);
        if(storedTodos) {
            setTodos(JSON.parse(storedTodos))
        }
    }, [])

    const addTodo = () => {
        const now = new Date();
        if(inputValue.trim() !== '') {
            const newTodos = [...todos, { id: now.getTime(), text: inputValue, completed: false}]
            setTodos(newTodos);
            localStorage.setItem('todos', JSON.stringify(newTodos));
        }
        setInputValue('');
    }

    const toggleTodo = (id) => {
        const updatedTodos = 
            todos.map((todo) => (
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            ))
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    return (
        <div>
            <h1>Todo App</h1>
            <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={addTodo}>Add Todo</button>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.text}
                        <button onClick={() => toggleTodo(todo.id)}>{todo.completed ? 'Undo' : 'Complete'}</button>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}