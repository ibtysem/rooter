import React from 'react'
import { Link } from 'react-router-dom'

const  Header = () => {
  return (
    <div className='nav' >
     <Link to="/section"><a href="">LA CARTE POINT M</a></Link> 
      <a href=''>CONTACTEZ-NOUS</a>
    </div>
  
  )
}

export default  Header