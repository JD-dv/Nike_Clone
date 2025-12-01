import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Shop from "./pages/Shop.jsx"
import About from "./pages/About.jsx"
import Product_Detail from "./pages/Product_Detail.jsx"


function App() {
  return (
  <Routes>
   <Route path="/" element={<Home />}/>
   <Route path="/Shop" element={<Shop/>}/>
   <Route path="/product/:id" element={<Product_Detail/>}/>
   <Route path="/about" element={<About/>}/>
  </Routes>
  )
}

export default App
