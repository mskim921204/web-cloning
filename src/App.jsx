import { useState } from 'react'
import './App.css'

function App() {
  const [items, setItems] = useState([])
  const [text, setText] = useState('')

  const addItem = () => {
    if (!text) return
    setItems([...items, { id: Date.now(), title: text }])
    setText('')
  }

  return (
    <div>
      <h1>내 웹 클론</h1>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addItem}>추가</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App