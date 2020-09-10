import React, { useState ,useEffect} from 'react';
import InfoCard from './InfoCard'
import Axios from 'axios';

const Country = props => {

    const [currentCountry, setCurrentCountry] = useState()
    
    const country = props.cData.find(
        findName => findName.name === props.match.params.name
    )

    console.log(props, "props")

    console.log(currentCountry, "currentCountry")



    const RunFetch = name => {
        Axios({
            "method":"GET",
            "url":`https://restcountries-v1.p.rapidapi.com/name/${name}`,
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"restcountries-v1.p.rapidapi.com",
            "x-rapidapi-key":"d99e177f0cmsh5c3cc2147cd5808p1ad5dcjsnd3c8290db918",
            "useQueryString":true
            }
            })
            .then((response)=>{
              console.log(response)
              setCurrentCountry(response.name)
            })
            .catch((error)=>{
              console.log(error)
            })
    }
console.log((props.match.params.name).replaceAll(" ", ""), "props.history")
    if (country === undefined){
        RunFetch((props.match.params.name).replaceAll(" ", ""))
    }

console.log(currentCountry, "currentCountry")

    return(
        <div>
            <InfoCard name={country !== undefined? country.name: currentCountry}/>
        </div>
    )
}
export default Country