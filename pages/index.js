import { useCallback, useState } from "react"
import ToDo from "../components/Header"
import ToDoForm from "../components/TodoForm"

export default function App() {
    console.count('App')
    const [todos, setTodos] = useState([]);

    const addTask = useCallback((userInput) => {
        if (userInput) {
            const newItem = {
                id: Date.now(),
                task: userInput,
                complete: false
            }
            setTodos([...todos, newItem])
        }
    });

    const removeTask = useCallback((id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])
    });

    const handleToggle = useCallback((id) => {
        setTodos([
            ...todos.map((todo) =>
                todo.id === id ? { ...todo, checked: !todo.checked } : { ...todo })
        ])
    });

    

    return (
       <>
            <ToDoForm addTask={addTask} />
            <ul>
                {todos.map((todo) => {
                    return (
                        <ToDo
                            todo={todo}
                            key={todo.id}
                            toggleTask={handleToggle}
                            removeTask={removeTask} />
                    )
                })
                }
            </ul>
            </>
    )
}