import React from 'react'

const Nouvparum = ({nouvel}) => {
  return (
    <div className='nouvel-parfum'>
      <img src={nouvel.img}/>
      <h4>{nouvel.nom}</h4>
      <p>{nouvel.desc}</p>
      <h4>{nouvel.prod}</h4>
      <h4>{nouvel.prix}DT</h4>
    </div>
  )
}

export default Nouvparum