import React from 'react'

const Footer = () => {
  return (
    <div className='footer-container'>
    <div className='container'>
      <div className='colum'>
        <h4>point m</h4>
        <ul>
          <li>
          <ion-icon name="location-outline"></ion-icon>
          <span className='adresse-store'>
            <span className='adresse-bureau'>
          - Siège social :<br></br>
        
          14, Rue du commerce ZI Charguia 1 BP 126 1053<br></br>
          
          
          Les Berges du Lac<br></br>
          
          </span>
          
          - Bureaux : <br></br>
          
          
          Résidence Sérim, Rue Ghar El Melh 1053 <br></br>
          
          Les Berges du Lac<br></br>
          </span>
          </li>
          <li>
          <ion-icon name="call-outline"></ion-icon>
          <span>+216 70 600 023</span>
          </li>
          <li>
          <ion-icon  name="mail-outline"></ion-icon> 
          <a href='#'>pointmparfumeriz@utic.com</a>
          </li>
        </ul>
      </div>
      <div className='colum'>
        <h4>information</h4>
        <ul>
          <li>Nos magasins</li>
          <li>Contactez-nous</li>
          <li>Condition générele du vente</li>
          <li>Mentions légales</li>
          <li>A propos du M</li>
          <li>Carte de fidélité point M</li>
        </ul>
      </div>
      <div className='colum'>
        <div className='colum-1'>
        <h4>Connectz vous avec point m</h4>
        <span>Comptez parmi les premiers informés de nos offres spéciales et<br></br>
         évènements Point M</span>
        <input type="text" name='email' placeholder='saisissez votre adresse e-mail'/>
        <button type='submit'>envoyer</button>
        </div>
        <div className='colum-2'>
         <h4>suivez nous</h4>
         <ul>
         <li ><ion-icon name="logo-facebook"></ion-icon></li>
        <li ><ion-icon name="logo-instagram"></ion-icon></li>
        <li ><ion-icon name="logo-youtube"></ion-icon></li>
        <li ><ion-icon name="location-outline"></ion-icon></li>
         </ul>
         
        </div>
      </div>

      </div>
    <div className='logo'>

    </div>
    </div>
  )
}

export default Footer