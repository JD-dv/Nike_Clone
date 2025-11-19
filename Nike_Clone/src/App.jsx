import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Shop from "./pages/Shop.jsx"
import Product_Detail from "./pages/Product_Detail.jsx"


function App() {
  return (
  <Routes>
   <Route path="/" element={<Home />}/>
   <Route path="/Shop" element={<Shop/>}/>
   <Route path="/product/:id" element={<Product_Detail/>}/>
  </Routes>
  )
}

export default App
