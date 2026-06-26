import { useState } from 'react'
import { Hadispage } from './pages/ulumulhadis/Hadispage'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { DetailMateriPage } from './pages/ulumulhadis/detail/DetailMateriPage'
import { Materihadis } from "./pages/ulumulhadis/detail/Materihadis"
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>


    <Routes>
    <Route path='/' element={<Hadispage />} />
    <Route path='/materihadis' element={<Materihadis />} />
    <Route path='/materi/:slug' element={<DetailMateriPage />} />
    </Routes>
    </BrowserRouter>
      
  )
}

export default App