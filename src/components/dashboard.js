import React, { useState ,useEffect} from 'react';
import {NavLink} from "react-router-dom"
import InfoCard from './InfoCard';

const DashBoard = props => {

    return(
        <div>
            {props.cData.map(country => (
                <div key={country.name}>

                        <NavLink to = {`/location/${country.name}`}>
                    <div >
                        <InfoCard name={country.name} />
                    </div>

                </NavLink>

                </div>

                
            ))}
        </div>
        
        
    )
}
export default DashBoard