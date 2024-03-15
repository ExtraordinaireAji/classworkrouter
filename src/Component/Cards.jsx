import React from 'react'

const Cards = (props) => {
  return (
    <>
        <div class="card" style={{width: "18rem"}}>
  <img src={props.image} class="card-img-top" alt="..." style={{height: "200px"}}/>
  <div class="card-body" style={{height: "150px"}}>
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.desc}</p>
    <a href="#" class="btn btn-primary" style={{width:"100%"}}>Add to cart</a>
  </div>
</div>
    </>
  )
}

export default Cards