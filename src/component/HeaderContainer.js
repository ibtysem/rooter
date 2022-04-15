import React from 'react'
import { Link } from 'react-router-dom'

const HeaderContainer = ({settext}) => {
  return (
    <div className='nav-container'>
       <Link to="/"><img src='https://www.pointm.tn/img/pointm-logo.svg' alt='logo'></img></Link> 
        <div className='rech-icon'>
        <input 
        type="text"
        placeholder="rechercher..." 
          onChange={(e)=>settext(e.target.value)}/><ion-icon name="search-outline"></ion-icon>
        </div>
        <div className='icon' >
       <ion-icon  name="mail-outline"></ion-icon> 
        <ion-icon  name="location-outline">MON MAGASIN</ion-icon>
        <ion-icon  name="heart-outline">MES FAVORIS</ion-icon>
        <ion-icon  name="person-outline">MON COMPTE</ion-icon>
        <ion-icon  name="cart-outline">MON PANIERS</ion-icon>
        </div>
        
    </div>
  )
}

export default HeaderContainer