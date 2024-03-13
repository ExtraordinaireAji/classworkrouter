import React from 'react'
import David from './Component/David'
import Idris from './Component/Idris'
import Artists from './Component/Artists'
import Button from './Component/Button'
import CardsP from './Component/CardsP'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Testimonials from './pages/Testimonials'

const App = () => {
  const image1 = 'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=600'
  const image2 = 'https://www-konga-com-res.cloudinary.com/w_400,f_auto,fl_lossy,dpr_2.0,q_auto/media/catalog/product/I/K/125080_1707904583.jpg'
  const image3 = 'https://www-konga-com-res.cloudinary.com/w_400,f_auto,fl_lossy,dpr_2.0,q_auto/media/catalog/product/H/P/81303_1696153656.jpg'
  const image4 = 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  const image5 = 'https://www-konga-com-res.cloudinary.com/w_400,f_auto,fl_lossy,dpr_2.0,q_auto/media/catalog/product/B/Z/229025_1708511646.jpg'
  return (
    <>
      {/* <David />
      <Idris/>
      <Artists/>
      <Button name='Register' />
      <Button name='Sign up' />
      <Button name='Click me' />
      <Button name='Submit' />
      <div className='d-flex flex-wrap gap-4'>
      <CardsP image={image1} title='Headphone' desc='Beats by Dre headphone' price={34} />
      <CardsP image={image2} title='Center table' desc='Grey centre table for beautifying your luxury sitting room' price={95} />
      <CardsP image={image3} title='Hot plate' desc='Electric hot plate for cooking' price={13} />
      <CardsP image={image4} title='Sneakers' desc='Nike sneakers suitable for work outs' price={8} />
      <CardsP image={image5} title='Led TV' desc='75 inches led TV with better colours technology' price={75} />
      </div> */}

      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/testimonials' element={<Testimonials/>} />
          </Routes>
      </BrowserRouter>
    
    </>


    
  )
}

export default App