import React from 'react'
import Nouvparum from './Nouvparum'
import Meilleurparfum from './Meilleurparfum'
import Promotion from './Promotion'
import { Link } from 'react-router-dom'

const Section = ({nouveau,prefer,Promo,text}) => {
  console.log(text);
  return (
    <div className='sectionn'>
      <ul>
          <Link to="/section"><li>PRODUIT</li></Link> 
           <Link to="/nouvete"><li>NOUVAUTEES</li></Link> 
            <li>PROMOTIONS</li>
            <li>EXCLUSIVITEES</li>
            <li>MARQUES</li>
            <li>IDEES CADEAUX</li>
          </ul>
          <img 
          src='https://www.pointm.tn/modules/homeslider/images/8bc08ec1e4d0052111574ffd72dd002ce0f33e8b_BANNERFEMME.jpg'
          alt='image'></img>
          <div className='section'>
      <h2 className='nouvetee'>NouveautéS</h2>
      <div className='nouveau-card'>
      
      {
      nouveau
      .filter((el)=>el.nom.toLowerCase().includes(text.toLowerCase()))
      .map((el)=><Nouvparum nouvel={el}/>)}
      </div>
       <h2 className='nouvetee' id='meilleur'>NOS MEILLEURS VENTES</h2>
      <div className='nouveau-card'>
      {prefer
      .filter((el)=>el?.nom?.toLowerCase().includes(text.toLowerCase())).map((el)=>(<Meilleurparfum bestparfum={(el)}/>))}
      </div>
      <h2 className='nouvetee' id='meilleur'>promotions</h2>
      <div className='nouveau-card'>
      {Promo
      .filter((el)=>el.nom.toLowerCase().includes(text.toLowerCase())).map((el)=>(<Promotion coffret={(el)}/>))}
      </div> 
      <img src='https://www.pointm.tn/modules/themeconfigurator/img/f22aedd7c987fd0c05226f28d8206df0c66d4cf3_diapositive3-copie.PNG' alt='logo'/>
    </div>
    </div>
  )
}

export default Section