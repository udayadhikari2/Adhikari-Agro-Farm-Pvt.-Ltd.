import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'

function FooterSocialMedia() {
    return (
        <div className="copyRight-socialMedia-container-wapper">
            
            
            <section className="copyRight-container" title="All Right Reserved"> 
                <h4 className="copyRight">
                <i className="far fa-copyright"></i> Adhikari Agro, 2020
                </h4>
            </section>
            <section className="grow">

            </section>
            <section className="socialMedia-container">
                <div className="socialMedia">
                    <ul className="socialMedia-items">
                        <li className="socialMedia-items-links">
                            <Link className="socialMedia-links" title="Facebook" to="/facebook"><i className="fab fa-facebook"></i></Link>
                        </li>
                        <li className="socialMedia-items-links">
                            <Link className="socialMedia-links" title="Youtube" to="/Youtube"><i className="fab fa-youtube"></i></Link>
                        </li>
                        <li className="socialMedia-items-links">
                            <Link className="socialMedia-links" title="Viber" to="/Viber"><i className="fab fa-viber"></i></Link>
                        </li>
                        <li className="socialMedia-items-links">
                            <Link className="socialMedia-links" title="Messenger" to="/Messenger"><i className="fab fa-facebook-messenger"></i></Link>
                        </li>
                    </ul>
                </div>
            </section>

            
        </div>
    )
}

export default FooterSocialMedia
