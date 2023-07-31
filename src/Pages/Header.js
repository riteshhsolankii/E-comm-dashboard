import React from "react";
import {NavLink} from 'react-router-dom'

function Header(){
    return(
        <React.Fragment>
            <div className="header-main">
                <nav>
                    <ul>
                        <li>
                            <NavLink> Hey</NavLink>
                        </li>
                    </ul>
                </nav>
               
            </div>
        </React.Fragment>
    )
}

export default Header;