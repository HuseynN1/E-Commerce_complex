import React from 'react'
import Nav from './Components/nav'

import { BrowserRouter } from 'react-router-dom'
const App = () => {
  return (
   <>
   <BrowserRouter>
   <Nav/>
   </BrowserRouter>
   </>
  )
}

export default App