import {Routes , Route} from "react-router-dom"
import Home from "./pages/Home"
import Store from "./pages/Store"
import About from "./pages/About"
import Navbar from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShopppingCartContext"
function App() {
  return (
    <ShoppingCartProvider>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/store" element={<Store/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </ShoppingCartProvider>
  )
}

export default App
