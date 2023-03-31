export default function ToDo({ todo, removeTask }) {
  console.count('ToDo')
  return (
      <li key={todo.id}>{todo.task}                  
              <span onClick={() => removeTask(todo.id)}>(X)</span>         
      </li>
      
  )
}