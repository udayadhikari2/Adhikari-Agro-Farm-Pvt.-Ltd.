import React from 'react'
import {Link} from 'react-router-dom';
import './Footer.css'

function FooterItems(props) {
    return (
        <>
            <li className="footer-items-links">
                <Link className="footer-links" to={props.path} title={props.title}><i className={props.icons}></i> {props.text}
                </Link>
            </li>
      
        </>

    )
}

export default FooterItems
