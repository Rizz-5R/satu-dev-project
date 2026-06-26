import { useState } from 'react'
import { Hadispage } from './pages/ulumulhadis/Hadispage'

import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Definisi from "./pages/ulumulhadis/detail/Definisi"
import Home from './pages/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>


    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/definisi' element={<Definisi />} />
      </Routes>
    </BrowserRouter>
      
  )
}

export default App