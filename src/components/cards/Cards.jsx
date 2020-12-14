import React from 'react'
import CardsItems from './CardsItems';
import './Cards.css'
import Agro1 from '../../assets/agro-1.jpg'
import Agro2 from '../../assets/agro-2.jpg'

function Cards() {
    return (
        <div className="cards">
            <h1 className="cards-info">Our Services and Products</h1>
           <div className="cards-container">
               <div className="cards-wapper">
                   <ul className="cards-items">
                       <CardsItems
                       image={Agro1}
                       path="/services"
                       text="A New technology in agriculture of Nepal."
                       label="Agro"
                       />
                       
                   </ul>
                   <ul className="cards-items">
                       <CardsItems
                       image={Agro2}
                       path="/services"
                       text="A New technology in agriculture of Nepal."
                       label="Agro"
                       />
                   </ul>
               </div>
               <div className="cards-wapper">
                   <ul className="cards-items">
                       <CardsItems
                       image={Agro1}
                       path="/services"
                       text="A New technology in agriculture of Nepal."
                       label="Agro"
                       />
                       
                   </ul>
                   <ul className="cards-items">
                       <CardsItems
                       image={Agro2}
                       path="/services"
                       text="A New technology in agriculture of Nepal."
                       label="Smart Tech"
                       />
                   </ul>
                   <ul className="cards-items">
                       <CardsItems
                       image={Agro1}
                       path="/services"
                       text="A New technology in agriculture of Nepal."
                       label="Rice"
                       />
                       
                   </ul>
               </div>
               </div>
           </div>
    )
}

export default Cards
