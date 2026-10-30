import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import './App.css'

function App() {

  const [items, setItems] = useState([])
  const [text, setText] = useState('')

  const loadItems = async () => {
    const { data } = await supabase.from('items').select('*').order('id')
    setItems(data ?? [])
  }

  useEffect(() => {
    loadItems()
  }, [])

  const addItem = async () => {
    if (!text) return
    await supabase.from('items').insert({ title: text })
    setText('')
    loadItems()
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
