import { useState, useEffect } from "react"


function App() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {

    async function getApi() {
      const result = await fetch('https://jsonplaceholder.typicode.com/todos')
      const finalResult = await result.json()
      return finalResult
    }
    
    getApi().then(res => setTasks(res))
  }, [])

  return (
    <div className="container">
      <h1>To Do Project</h1>
      <ol>
        {tasks.map((task) => {
          return (
            <li key={task.id}>Tarefa: {task.title}</li>
          )
        })}
      </ol>
    </div>
  )
}

export default App
