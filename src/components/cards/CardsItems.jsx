import React from 'react';
import {Link} from 'react-router-dom';
import './Cards.css'

export default function CardsItems(props) {
    return (
       <div className="cards-lists">
           <li className="cards-items-links">
               <Link to={props.path}>
                <figure className="cards-image" data-category={props.label}>
                    <img src={props.image}/>
                </figure>
                <div className="cards-info">
                    <h5 className="cards-heading">{props.text}</h5>
                </div>
               </Link>

           </li>
       </div>
    )
}
