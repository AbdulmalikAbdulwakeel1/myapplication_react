import React from "react";

function Body (props){
    return(
<main className={props.darkmode ? "dark":""}>
    <h1>Real facts about using dell</h1>
    <ul className="main--facts">
        <li>Dell has first released in 2004</li>
        <li>Was originally created by dellinthon</li>
        <li>has sell over 180 countries</li>
        <li>its maintained by dellas</li>
    </ul>
</main>

    ); 
}
export default Body;

