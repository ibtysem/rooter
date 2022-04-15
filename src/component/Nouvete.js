import React from 'react'
import Nouvparum from './Nouvparum'

const Nouvete = ({text,nouveau}) => {
  return (
    <div className='section'>
    <h2 className='nouvetee'>NouveautéS</h2>
    <div className='nouveau-card'>
    
    {
    nouveau
    .filter((el)=>el.nom.toLowerCase().includes(text.toLowerCase()))
    .map((el)=><Nouvparum nouvel={el}/>)}
    </div>
    </div>
  )
}

export default Nouvete