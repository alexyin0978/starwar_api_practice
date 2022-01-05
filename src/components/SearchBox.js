import React from "react";

const SearchBox = ({searchEvent}) => {
    return(
        <div>
            <input 
            className="pa3 ma2 ba b--yellow bg-black-90" 
            style={{color: "orange"}}
            type="search" 
            placeholder="enter name" 
            onChange={searchEvent}
            />
        </div>
    )
}

export default SearchBox;