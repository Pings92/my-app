import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ClassState from './components/ClassState'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-center"> useStates Hooks</h1>
      <ClassState />
    </>
  )
}

export default App
