import React, { useEffect} from 'react';
import axios from 'axios';

const DashBoard = props => {
    return(

        <div key = {props.key}>
            <p>{props.name}</p>
            
        </div>
        
    )
}
export default DashBoard