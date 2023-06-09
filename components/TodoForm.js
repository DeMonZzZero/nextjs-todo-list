
import { useCallback, useState } from "react"

export default function ToDoForm({ addTask }) {
    const [userInput, setUserInput] = useState('');
    
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
            
        </form>
    )
}