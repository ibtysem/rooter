import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import HeaderContainer from './component/HeaderContainer';
import Section from './component/Section';

import { useState } from 'react';
import BlocMedia from './component/BlocMedia';
import Footer from './component/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Nouvete from './component/Nouvete';

function App() {
  const [Nouv,setNouv]=useState([
    {
      id:Math.random(),
      nom:"CHLOE",
      desc:"chloé eau de parfum naturelle",
      prod:"Eau de parfum",
      prix:260,
      img:"https://www.pointm.tn/9583-home_default/chloe-nomade-eau-de-parfum-naturelle.jpg",
      },
      {
        id:Math.random(),
        nom:"CARVEN",
        desc:"CARVEN C'EST PARIS",
        prod:"Eau de parfum",
        prix:181,
        img:"https://www.pointm.tn/9658-home_default/carven-c-est-paris-.jpg", 
      },
      {
        id:Math.random(),
        nom:"GIORGO ARMANI",
        desc:"SI PASSION ECLAT",
        prod:"Eau de parfum",
        prix:228,
        img:"https://www.pointm.tn/9557-home_default/si-passione-eclat.jpg", 
      },
      {
        id:Math.random(),
        nom:"BURBURRY",
        desc:"HER LONDON DREAM",
        prod:"Eau de parfum",
        prix:211,
        img:"https://www.pointm.tn/9598-home_default/her-london-dream.jpg", 
      },
      {
        id:Math.random(),
        nom:"PEPE JEANS",
        desc:"LONDON CALCING FOR HIM",
        prod:"Eau de parfum",
        prix:186,
        img:"https://www.pointm.tn/9606-home_default/london-calling-for-him.jpg", 
      },
      {
        id:Math.random(),
        nom:"CARVEN",
        desc:"CARAVEN C'EST PARIS",
        prod:"Eau de toilette",
        prix:194,
        img:"https://www.pointm.tn/9655-home_default/carven-c-est-paris-.jpg", 
      },
      {
        id:Math.random(),
        nom:"LANCOME",
        desc:"Idole",
        prod:"Eau de parfum",
        prix:145,
        img:"https://www.pointm.tn/7696-home_default/idole.jpg",
        },
        {
          id:Math.random(),
          nom:"LANCOME",
          desc:"Idole l'intnse",
          prod:"Eau de parfum",
          prix:160,
          img:"https://www.pointm.tn/8493-home_default/idole-l-intense.jpg", 
        },
        {
          id:Math.random(),
          nom:"FRANCK OLIVIER",
          desc:"OUD TOUCH",
          prod:"Eau de parfum",
          prix:211,
          img:"https://www.pointm.tn/3917-home_default/oud-touch.jpg", 
        },
        {
          id:Math.random(),
          nom:"LANCOME",
          desc:"LA VIE EST BELLE SOLIEL CRISTAL",
          prod:"Eau de parfum",
          prix:186,
          img:"https://www.pointm.tn/8683-home_default/la-vie-est-belle-soleil-cristal.jpg", 
        },
      
    ]
  );
  const [Promotion,setPromotion]=useState([
    {
      id:Math.random(),
      nom:"lancome",
      desc:"la vie est belle eclat",
      prod:"coffret de parfum",
      prix:252,
      img:"https://www.pointm.tn/7529-home_default/la-vie-est-belle-leclat.jpg",
      },
      {
        id:Math.random(),
        nom:"lancome",
        desc:"la vie est belle eclat",
        prod:"coffret de parfum",
        prix:252,
        img:"https://www.pointm.tn/7529-home_default/la-vie-est-belle-leclat.jpg",
        },
        {
          id:Math.random(),
          nom:"lancome",
          desc:"la vie est belle eclat",
          prod:"coffret de parfum",
          prix:252,
          img:"https://www.pointm.tn/7529-home_default/la-vie-est-belle-leclat.jpg",
          },
          {
            id:Math.random(),
            nom:"lancome",
            desc:"la vie est belle eclat",
            prod:"coffret de parfum",
            prix:252,
            img:"https://www.pointm.tn/7529-home_default/la-vie-est-belle-leclat.jpg",
            },
            {
              id:Math.random(),
              nom:"lancome",
              desc:"la vie est belle eclat",
              prod:"coffret de parfum",
              prix:252,
              img:"https://www.pointm.tn/7529-home_default/la-vie-est-belle-leclat.jpg",
              },
      
    ]
      );

  const [Meilleur,setMeilleur]=useState([
    {
      id:Math.random(),
      nom:"LANCOME",
      desc:"Idole",
      prod:"Eau de parfum",
      prix:145,
      img:"https://www.pointm.tn/7696-home_default/idole.jpg",
      },
      {
        id:Math.random(),
        nom:"LANCOME",
        desc:"Idole l'intnse",
        prod:"Eau de parfum",
        prix:160,
        img:"https://www.pointm.tn/8493-home_default/idole-l-intense.jpg", 
      },
      {
        id:Math.random(),
        nom:"LANCOME",
        desc:"Idole aura",
        prod:"Eau de parfum",
        prix:177,
        img:"https://www.pointm.tn/9492-home_default/idole-aura.jpg", 
      },
      {
        id:Math.random(),
        nom:"FRANCK OLIVIER",
        desc:"OUD TOUCH",
        prod:"Eau de parfum",
        prix:211,
        img:"https://www.pointm.tn/3917-home_default/oud-touch.jpg", 
      },
      {
        id:Math.random(),
        nom:"LANCOME",
        desc:"LA VIE EST BELLE SOLIEL CRISTAL",
        prod:"Eau de parfum",
        prix:186,
        img:"https://www.pointm.tn/8683-home_default/la-vie-est-belle-soleil-cristal.jpg", 
      },
     ]
      );
      const [text,settext]=useState("");

  return (
    <div className="App">
      <div className='page'>
      <Header/>
      <HeaderContainer settext={settext}/>
      <Routes>
      <Route path="/section"element={ <Section nouveau={Nouv} prefer={Meilleur} Promo={Promotion} text={text}/> } /> 
      <Route path='/' element={<Home/>}/>
      <Route path="/nouvete" element={<Nouvete nouveau={Nouv} text={text}/>}/> 
      </Routes>
      {/*<Section nouveau={Nouv} prefer={Meilleur} Promo={Promotion} text={text}/>*/}
      <BlocMedia/>
      <Footer/>
     </div>
    </div>
  );
}

export default App;
