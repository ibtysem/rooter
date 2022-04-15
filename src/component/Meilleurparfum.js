import React from 'react'

const Meilleurparfum = ({bestparfum}) => {
  return (
    <div className='nouvel-parfum'>
    <img src={bestparfum.img}/>
    <h4>{bestparfum.nom}</h4>
    <p>{bestparfum.desc}</p>
    <h4>{bestparfum.prod}</h4>
    <h4>{bestparfum.prix}DT</h4>
    </div>
  )
}

export default Meilleurparfum