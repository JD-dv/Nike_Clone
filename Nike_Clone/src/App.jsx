import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Shop from "./pages/Shop.jsx"


function App() {
  return (
  <Routes>
   <Route path="/" element={<Home />}/>
   <Route path="/Shop" element={<Shop/>}/>
  </Routes>
  )
}

export default App
