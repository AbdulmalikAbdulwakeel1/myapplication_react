import React from "react";
import dellogo from './dell.jpg';

 function Header () {
    return(
        <header> 
           
        <nav className="nav">
        <img src={dellogo} height="60px"/>
        <h1>Dell</h1>
      <ul className="item">
      
      <li>Home</li>
      <li>About us</li>
      <li>Contact us</li>
      <li>Blog</li>

    
      </ul>
        </nav>
        </header>

    );
}

export default Header