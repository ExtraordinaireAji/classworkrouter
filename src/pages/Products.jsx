import React from 'react'
import { Navbar } from '../Component/Navbar'
import Cards from '../Component/Cards'

const Products = () => {

  const image1 = 'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=600'
  const image2 = 'https://www-konga-com-res.cloudinary.com/w_400,f_auto,fl_lossy,dpr_2.0,q_auto/media/catalog/product/I/K/125080_1707904583.jpg'
  const image3 = 'https://www-konga-com-res.cloudinary.com/w_400,f_auto,fl_lossy,dpr_2.0,q_auto/media/catalog/product/H/P/81303_1696153656.jpg'
  const image4 = 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  const image5 = 'https://www-konga-com-res.cloudinary.com/w_400,f_auto,fl_lossy,dpr_2.0,q_auto/media/catalog/product/B/Z/229025_1708511646.jpg'
  return (
    <>
        <Navbar/>
        <h1>This is the  Product page</h1>
        <div style={{display: "flex", flexWrap: "wrap" , justifyContent: "space-around", gap: "2px"}}>
        <Cards image={image1} title='Headphone' desc='dummy desc' />
        <Cards image={image2} title='Center table' desc='dummy desc' />
        <Cards image={image3} title='Hot plate' desc='dummy desc' />
        <Cards image={image4} title='sneakers' desc='dummy desc' />
        <Cards image={image5} title='Samsung Tv' desc='dummy desc' />
        <Cards image={image1} title='Headphone' desc='dummy desc' />
        <Cards image={image2} title='Headphone' desc='dummy desc' />
        <Cards image={image3} title='Headphone' desc='dummy desc' />
        <Cards image={image4} title='Headphone' desc='dummy desc' />
        <Cards image={image5} title='Headphone' desc='dummy desc' />
        </div>
    </>
  )
}

export default Products