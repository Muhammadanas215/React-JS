import React from 'react';
import {
    Link
} from "react-router-dom";

function Nav(){
    return (
        <div>
<Link to='/'>Home</Link><br />
<Link to='/About'>About</Link><br />
<Link to="/student"> Student </Link><br />
        </div>
    )

}

export default Nav;