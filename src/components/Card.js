import React from "react";

const Card = ({name,wiki,homeworld,image}) =>{
    return(
        <div className="tc br3 grow dib bg-near-black bn shadow-4 gold pa3 ma2 ">
            <img src={image} alt="loading" height="400px" width="300px" />
            <h1>{name}</h1>
            <p className="f3">{homeworld}</p>
            <a className="no-underline light-yellow" href={wiki} target="_blank">profile</a>
        </div>
    )
}

export default Card;