import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

const API_URL = import.meta.env.VITE_API_URL || '/api'

function App() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    try {
      const res = await axios.get(`${API_URL}/todos`)
      setTodos(res.data)
    } catch (err) {
      console.error(err)
    }
  }

  const addTodo = async () => {
    if (!text.trim()) return
    try {
      const res = await axios.post(`${API_URL}/todos`, { text: text.trim() })
      setTodos([...todos, res.data])
      setText('')
    } catch (err) {
      console.error(err)
    }
  }

  const toggleComplete = async (id, completed) => {
    try {
      const res = await axios.put(`${API_URL}/todos/${id}`, { completed: !completed })
      setTodos(todos.map(todo => todo._id === id ? res.data : todo))
    } catch (err) {
      console.error(err)
    }
  }

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/todos/${id}`)
      setTodos(todos.filter(todo => todo._id !== id))
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="app">
      <h1>Todo App</h1>
      <div className="add-todo">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new todo"
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo._id} className={todo.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo._id, todo.completed)}
            />
            <span onClick={() => toggleComplete(todo._id, todo.completed)}>{todo.text}</span>
            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App