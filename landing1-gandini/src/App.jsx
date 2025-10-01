import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './components/Error'
import Inicio from './components/Inicio'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import Contacto from './components/Contacto'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar />}>
            <Route index element={<Inicio />} />
            <Route path='/productos' element={<ItemListContainer />} />
            <Route path='/productos/:id' element={<ItemDetailContainer />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/*' element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
