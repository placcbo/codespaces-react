import React from "react";

function Jokes(props){
 
return (

<div className="jokes-container">

<h1>{props.setup}</h1>
<h3>{props.punchline}</h3>


</div>

)


}

export default Jokes