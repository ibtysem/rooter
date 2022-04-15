import React from 'react'

const Promotion = ({coffret}) => {
  return (
    <div>
        <div className='nouvel-parfum'>
    <img src={coffret.img}/>
    <h4>{coffret.nom}</h4>
    <p>{coffret.desc}</p>
    <h4>{coffret.prod}</h4>
    <h4>{coffret.prix}DT</h4>
    </div>
    </div>
  )
}

export default Promotion