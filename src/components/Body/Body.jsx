import React from 'react'
import './Body.css';

function Body() {
    return (
        <div className="container">
           <figure className="background-image">
           </figure>
            <div className="body-tags">
                <h1 className="heading">Adhikari Agro Farm Pvt. Ltd.</h1>
                <p className="paragraph">
                Adhikari Agro Farm is the business company of agricultural production which involves the production, protection, sales and marketing of the product to satisfy the customers need.
                </p>
                <h4 className="proprieter"> - Binaya Adhikari</h4>
            </div>
            <div className="start-over-btn">
                <button type="button">Read More   <i class="fas fa-arrow-right"></i></button>
            </div>
        </div>
    )
}

export default Body
