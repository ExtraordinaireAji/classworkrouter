import React from 'react'

const CardsP = (props) => {
  return (
    <>
        
        <div class="card" style={{width: '18rem' }}>
  <img src={props.image} class="card-img-top" alt="..."style={{height: '200px'}} />
  <div class="card-body">
    <h5 className="card-title">{props.title}</h5>
    <div style={{height: '100px'}}>
    <p className="card-text">{props.desc}</p>
    <p className="card-text">${props.price}</p>
    </div>
    <a href="#" class="btn btn-primary" style={{width: '100%', color: 'darkgrey', backgroundColor: 'darkblue'}} >Add to cart</a>
  </div>
</div>
    </>
  )
}

export default CardsP