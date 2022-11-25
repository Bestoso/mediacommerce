import { Home } from "./components/Home"
import { NavBar } from "./components/NavBar"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ErrorPage } from "./components/ErrorPage"
import { Footer } from "./components/Footer"
import { Commerce } from "./components/Commerce"
import { Tutorials } from "./components/Tutorials"
import { Contact } from "./components/Contact"
import { ItemCategory } from "./components/ItemCategory"
import { ItemDetail } from "./components/ItemDetail"
import { CartContextProvider } from "./context/CartContext"
import { Cart } from "./components/Cart"
import { StoreContextProvider } from "./context/StoreContext"
import { Loader } from "./components/Loader"

function App() {

  return (
    <StoreContextProvider>
      <CartContextProvider>
        <div className="App">
          <Router>
            <NavBar />
            <Routes>
              <Route path='/' element={<Navigate to='/home' />} />
              <Route path='/home' element={<Home />} />
              <Route path='/category/tutorials' element={<Tutorials />} />
              <Route path='/category/commerce' element={<Commerce />} />
              <Route path='/category/commerce/:id' element={<ItemCategory />} />
              <Route path='/category/contact' element={<Contact />} />
              <Route path='/item/:itemId' element={<ItemDetail />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='*' element={<ErrorPage />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      </CartContextProvider>
    </StoreContextProvider>
  )
}

export default App
