import React, { useState ,useEffect} from 'react';
import InfoCard from './InfoCard'

const Country = props => {

    const country = props.cData.find(
        findName => findName.name === props.match.params.name
    )
    return(
        <div>
            <InfoCard name={country.name} />
        </div>
        
        
    )
}
export default Country