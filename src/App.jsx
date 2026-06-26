import { useState } from 'react'
import { Hadispage } from './pages/ulumulhadis/Hadispage'
import  HomePage  from './pages/Home/HomePage'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { DetailMateriPage } from './pages/ulumulhadis/detail/DetailMateriPage'
import { Materihadis } from "./pages/ulumulhadis/detail/Materihadis"

function App() {
  return (
<BrowserRouter>
    <Routes>
     <Route path='/' element={<HomePage />} />
    <Route path='/hadispage' element={<Hadispage />} />
    <Route path='/materihadis' element={<Materihadis />} />
    <Route path='/materi/:slug' element={<DetailMateriPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;