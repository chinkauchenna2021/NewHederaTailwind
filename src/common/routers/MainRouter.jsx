/* eslint-disable no-unused-vars */
import React from 'react'
import { MemoryRouter , Routes ,Route } from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Activities from '../pages/Activities'
import SendHadera from '../pages/SendHadera'

function MainRouter() {
  return (
      <MemoryRouter>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/activities' element={<Activities />} /> 
                 <Route path='/send' element ={<SendHadera/>} /> 
          </Routes>
      </MemoryRouter>
  )
}

export default MainRouter