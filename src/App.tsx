import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import InitialView from "./pages/InitialView"
import ProductDetail from './pages/ProductDetail'
import SearchResult from './pages/SearchResult'

function App() {
  const [data, setData] = useState<null | void>(null)
  
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<InitialView setData={setData}/>}/>
          <Route path= '/items' element={<SearchResult data={data} setData={setData}/>} />
          <Route path="/items/:id" element={<ProductDetail setData={setData}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App