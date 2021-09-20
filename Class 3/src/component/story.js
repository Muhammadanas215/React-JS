import React from "react";

function Story({heading, descp,  para}) {
    return (
        <div>
            <h1>{heading}</h1>
            <h3>{descp}</h3> 
            <p>{para}</p>
                
        </div>
    )

}
export default Story