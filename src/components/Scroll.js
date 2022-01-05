import React from "react";

const Scroll = (props) =>{
    return(
        <div style={{
            overflowY: "scroll",
            height: '75vh',
            border: 'solid 2px black'
        }}>
            {props.children}
        </div>
    )
}

export default Scroll;