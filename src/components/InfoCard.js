import React, {useEffect} from 'react';

const InfoCard = props => {

    return(
        <div key = {props.key}>
            <p>{props.name}</p>
            
        </div>       
    )
}
export default InfoCard