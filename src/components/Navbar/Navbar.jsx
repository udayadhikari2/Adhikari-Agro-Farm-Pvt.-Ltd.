import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from '../DropdownMenu/Dropdown';
import Adhikari from '../../assets/Adhikari.png'

function Navbar() {
    const [state, setState] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const handelClick = () => {
        setState(!state);
    }
    const clickHandelMobile = () => {
        setState(false)
    }
    const onMouseEnter = () => {
        if (window.innerWidth < 900) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    }
    const onMouseLeave = () => {
        if (window.innerWidth < 900) {
            setDropdown(false)
        } else {
            setDropdown(false)
        }
    }
    return (
        <nav className="nav-items">
            <div className="nav-logo">
                <h5 className="nav-title">
                    <img src={Adhikari} width="40px"/> Adhikari Agro</h5>
            </div>
            <div className="nav-menu-icon" onClick={handelClick}>
                <i className={state ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={state ? 'nav-menu clicked' : 'nav-menu'}>
                <li>
                    <Link className="nav-link" to="./" onClick={clickHandelMobile}>Home</Link>
                </li>
                <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <Link className="nav-link" to="./Products" onClick={clickHandelMobile}>Products/Services <i className='fas fa-caret-down'></i></Link>
                    {dropdown && <Dropdown />}
                </li>
                <li>
                    <Link className="nav-link" to="./Services" onClick={clickHandelMobile}>Publication</Link>
                </li>
                <li>
                    <Link className="nav-link" to="./About" onClick={clickHandelMobile}>About</Link>
                </li>
                <li>
                    <Link className="nav-link" to="./Contact" onClick={clickHandelMobile}>Contact</Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar
