import React from 'react'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HomePage from '../pages/HomePage'
import UseEffectEx from '../pages/UseEffectEx'
import ListRendring from '../pages/ListRendring'
import SettingPage from '../pages/SettingPage'


const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/effect' element={<UseEffectEx/>}/>
        <Route path='/list' element={<ListRendring/>}/>
        <Route path='/setting' element={<SettingPage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default AppRoutes
