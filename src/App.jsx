import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './Pages/Inicio'
import Tendencias from './Pages/Tendencias'
import Categorias from './Pages/Categorias'
import Detalles from './Pages/Detalles'
import Peliculas from './Pages/Peliculas'

const App = () => {
  return (
    <BrowserRouter>
    <div className='app'>
    <Header/>
    <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/inicio' element={<Inicio/>}/>
      <Route path='/tendencias/:id' element={<Tendencias/>}/>
      <Route path='/categorias/:id/:tipo' element={<Categorias/>}/>
      <Route path='/detalles/:id' element={<Detalles/>}/>
      <Route path='/peliculas/:id' element={<Peliculas/>}/>
      <Route path='*' element={<Inicio/>}/>
    </Routes>
    <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App