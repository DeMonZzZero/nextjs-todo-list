
import { useCallback, useState } from "react"

export default function ToDoForm({ addTask }) {
    const [userInput, setUserInput] = useState('');
    const [todos, setTodos] = useState([]);

    const handleSubmit = useCallback((e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    });

    const handleChange = useCallback((e) => {
        setUserInput(e.currentTarget.value)
    });

    const handleKeyPress = useCallback((e) => {
        if (e.key === "Enter") {
            handleSubmit(e)
        }
    });

    const clearAll = useCallback(() => {
        setTodos([]);
        todos.length = 0;
    })

    return (
        <form onSubmit={handleSubmit} >
            <input
                value={userInput}
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder='........'
            />
            <button>Добавить задачу</button>  
            <button onClick={clearAll}>Очистить все</button>
        </form>
    )
}