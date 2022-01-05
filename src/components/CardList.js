import React from 'react';
import Card from './Card';

const CardList = ({roleList}) =>{
    console.log(roleList)
    return(
        <div>
            {roleList.map((role,i) => 
                { return <Card 
                    key={i} 
                    name={roleList[i].name} 
                    wiki={roleList[i].wiki} 
                    homeworld={roleList[i].homeworld} 
                    image={roleList[i].image} />})}
        </div>
    )
}

export default CardList;

{/* <Card name={roleList[0].name} wiki={roleList[0].wiki} bornLocation={roleList[0].bornLocation} image={roleList[0].image} /> */}