import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import CartContainer from './components/CartContainer.jsx'

function App() {
  return (


    <BrowserRouter>
      <>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartContainer />} />
        </Routes>
      </>
    </BrowserRouter>
  )
}

export default App
