import React from "react";
import Header from'./Header';
import Body from './body';

export default function Application (){

   const [darkmode,setdarkmode]=React.useState(true)
function toggleDarkmode (){
    setdarkmode(prev => !prev) 
}
    return(
<div>
    <Header darkmode={darkmode} toggleDarkmode={toggleDarkmode} 
             
    />
    <Body  darkmode={darkmode}
    />
  
</div>
    )
}