import { useState } from 'react'
import viteLogo from '/vite.svg'
import TryGlasses from './try-glasses/try-glasses'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TryGlasses/>
    </>

  )
}

export default App
