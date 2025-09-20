import { useState, useEffect } from 'react'
import axios from 'axios'
import './index.css'

const API_URL = import.meta.env.VITE_API_URL || '/api'

const IconPlus = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconCheck = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconTrash = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 6h18M8 6v12a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6M10 6V4a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

function App() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [editText, setEditText] = useState('')

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
      setTodos(prev => [...prev, res.data])
      setText('')
      // tiny entry animation: add a short delay then refetch for ordering
      setTimeout(() => fetchTodos(), 200)
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

  const startEdit = (id, currentText) => {
    setEditingId(id)
    setEditText(currentText)
  }

  const saveEdit = async () => {
    if (!editText.trim()) return
    try {
      const res = await axios.put(`${API_URL}/todos/${editingId}`, { text: editText.trim() })
      setTodos(todos.map(todo => todo._id === editingId ? res.data : todo))
      setEditingId(null)
      setEditText('')
    } catch (err) {
      console.error(err)
    }
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditText('')
  }

  const total = todos.length
  const completed = todos.filter(t => t.completed).length
  const remaining = total - completed

  return (
    <div className="app-outer">
      <div className="floating-bg">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
      </div>

      <main className="app">
        <header className="app-header">
          <div className="title-wrap">
            <h1 className="brand">Aurora Todos</h1>
            <p className="tag">Small tasks. Big vibes.</p>
          </div>
          <div className="stats">
            <div className="stat">
              <strong>{total}</strong>
              <span>All</span>
            </div>
            <div className="stat">
              <strong className="accent">{remaining}</strong>
              <span>Left</span>
            </div>
            <div className="stat">
              <strong>{completed}</strong>
              <span>Done</span>
            </div>
          </div>
        </header>

        <section className="card">
          <div className="add-row">
            <input
              className="input-main"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="What needs to be done?"
              onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            />
            <button className="btn-primary" onClick={addTodo} aria-label="Add">
              <IconPlus />
            </button>
          </div>

          <ul className="todo-list">
            {todos.map(todo => (
              <li key={todo._id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                <button className={`check ${todo.completed ? 'on' : ''}`} onClick={() => toggleComplete(todo._id, todo.completed)} aria-label="Toggle">
                  {todo.completed ? <IconCheck /> : <span />}
                </button>

                {editingId === todo._id ? (
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && saveEdit()}
                    className="edit-input"
                    autoFocus
                  />
                ) : (
                  <div className="todo-content" onDoubleClick={() => startEdit(todo._id, todo.text)}>
                    <span className="todo-text">{todo.text}</span>
                    <span className="todo-time">{new Date(todo.updatedAt || todo.createdAt).toLocaleString()}</span>
                  </div>
                )}

                <div className="actions">
                  {editingId === todo._id ? (
                    <>
                      <button onClick={saveEdit} className="btn save">Save</button>
                      <button onClick={cancelEdit} className="btn cancel">Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => startEdit(todo._id, todo.text)} className="icon-btn edit">Edit</button>
                      <button onClick={() => deleteTodo(todo._id)} className="icon-btn remove"><IconTrash /></button>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <footer className="app-footer">
          <small>Tip: Double-click a todo to edit. Press Enter to save.</small>
        </footer>
      </main>
    </div>
  )
}

export default App