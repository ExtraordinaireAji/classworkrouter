// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'
// import Products from './pages/Products'
// import Contact from './pages/Contact'

// const App = () => {
  
//   return (
//     <>
//       <BrowserRouter>
//           <Routes>
//             <Route path='/' element={<Home/>} />
//             <Route path='/about' element={<About/>} />
//             <Route path='/products' element={<Products/>} />
//             <Route path='/contact' element={<Contact/>} />
//           </Routes>
//       </BrowserRouter>
    
//     </>


    
//   )
// }

// export default App

import React from 'react'
import State from './Component/State'
import State2 from './Component/State2'

const App = () => {
  return (
    <>
      <State/>
      <State2/>
    </>
  )
}

export default App