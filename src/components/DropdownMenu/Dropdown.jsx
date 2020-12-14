import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { DropdownItems } from './DropdownItems';
import './Dropdown.css';


function Dropdown() {
    const [state, setState] = useState(false)

    const handelClick=()=>{
        setState(!state);
    }
    console.log(DropdownItems)
    return (
        <>
            <ul onClick={handelClick} className={state ? 'dropdown-items clicked':'dropdown-items'}>
                {DropdownItems.map((dropItems,index)=>{
                    return (
                    <li className="drop-list" key={index}>
                        <Link className={dropItems.class} to={dropItems.url} onClick={()=> setState(!state)}>{dropItems.dropTitles}
                        </Link>
                    </li>
                    )
                })}
            </ul>
        </>

    )
}

export default Dropdown
